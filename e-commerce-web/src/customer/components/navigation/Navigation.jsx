
'use client'
import { Link, useLocation } from 'react-router-dom'
import { Fragment, useState, useRef, useEffect } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import nav from './nav'
import AuthModal from '../../Auth/AuthModal'
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import { deepPurple } from '@mui/material/colors'


export default function Navigation() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location=useLocation();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [anchorE1, setanchorE1] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const [authMode, setAuthMode] = useState("signin");

  // ✅ Fix 1: localStorage (capital S)
  const jwt = localStorage.getItem("jwt");
  const userName = localStorage.getItem("userName") || 'User';

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleUserClick = (event) => {
    setanchorE1(event.currentTarget);
    setUserMenuOpen((v) => !v);
  }
  const handleCloseUserMenu = () => {
    setanchorE1(null);
    setUserMenuOpen(false);
  }
  // const handleOpen = () => {
  //   setOpenAuthModal(true);
  // }
  const handleOpen = (mode) => {
    setAuthMode(mode);
    setOpenAuthModal(true);
  }
  const handleClose = () => {
    setOpenAuthModal(false);
    navigate('/');
  }
  const handleLogout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('userName');
    setUserMenuOpen(false);
    navigate('/');
  }
  const goToProfile = () => {
    setUserMenuOpen(false);
    navigate('/profile');
  }
  const goToOrders = () => {
    setUserMenuOpen(false);
    navigate('/account/order');
  }

  const handleCategoryClick = (category, section, item, close) => {
    navigate(`/${category.id}/${section.id}/${item.id}`);
    close();
  }

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {nav.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {nav.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <a to={item.to} className="mt-6 block font-medium text-gray-900">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a to={item.to} className="-m-2 block p-2 text-gray-500">
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {nav.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a to={page.to} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            {/* ✅ Mobile auth section */}
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {jwt ? (
                <>
                  <div className="flow-root">
                    <button onClick={goToProfile} className="-m-2 block w-full text-left p-2 font-medium text-gray-900">
                      Profile
                    </button>
                  </div>
                  <div className="flow-root">
                    <button onClick={goToOrders} className="-m-2 block w-full text-left p-2 font-medium text-gray-900">
                      My Orders
                    </button>
                  </div>
                  <div className="flow-root">
                    <button onClick={handleLogout} className="-m-2 block w-full text-left p-2 font-medium text-red-600">
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flow-root">
                    <button onClick={handleOpen} className="-m-2 block w-full text-left p-2 font-medium text-gray-900">
                      Sign in
                    </button>
                  </div>
                  <div className="flow-root">
                    <button onClick={handleOpen} className="-m-2 block w-full text-left p-2 font-medium text-gray-900">
                      Create account
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* <div className="border-t border-gray-200 px-4 py-6">
              <Link to="#" className="-m-2 flex items-center p-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg"
                  className="block h-auto w-5 shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                <span className="sr-only">, change currency</span>
              </Link>
            </div> */}
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}

              <div className="ml-4 flex lg:ml-0">
                <span className="sr-only">Your Company</span>
                <Link to="#">
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </Link>
              </div>


              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {nav.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="group relative flex items-center justify-center text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:text-indigo-600">
                          {category.name}
                          <span
                            aria-hidden="true"
                            className="absolute inset-x-0 -bottom-px z-30 h-0.5 transition duration-200 ease-out group-data-open:bg-indigo-600"
                          />
                        </PopoverButton>
                      </div>
                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full z-20 w-full bg-white text-sm text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                      >
                        <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-sm" />
                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div key={item.name} className="group relative text-base sm:text-sm">
                                    <img
                                      alt={item.imageAlt}
                                      src={item.imageSrc}
                                      className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                    />
                                    <a to={item.to} className="mt-6 block font-medium text-gray-900">
                                      <span aria-hidden="true" className="absolute inset-0 z-10" />
                                      {item.name}
                                    </a>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <p onClick={() => handleCategoryClick(
                                            category,
                                            section,
                                            item,
                                            () => { }
                                          )}
                                            className='cursor-pointer hover:text-gray-800'
                                          >{item.name}</p>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}
                  {nav.pages.map((page) => (
                    <a
                      key={page.name}
                      to={page.to}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {jwt ? (
                    // ✅ Fix 2: replaced broken Popover.Button with a simple custom dropdown
                    <div className="relative" ref={userMenuRef}>
                      <Avatar
                        onClick={handleUserClick}
                        sx={{ bgcolor: deepPurple[500], color: 'white', cursor: 'pointer', width: 36, height: 36 }}
                      >
                        {userName[0].toUpperCase()}
                      </Avatar>

                      {userMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                          <div className="py-1">
                            <button onClick={goToProfile} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              Profile
                            </button>
                            <button onClick={goToOrders} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              My Orders
                            </button>
                            <hr className="my-1 border-gray-200" />
                            <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                              Logout
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    // ✅ Fix 3: Sign in + Create account for guests
                    <>
                      {/* <button onClick={handleOpen} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                        Sign in
                      </button>
                      <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                      <button onClick={handleOpen} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                        Create account
                      </button> */}
                      <button onClick={() => handleOpen("/signin")} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                        Sign in
                      </button>

                      <span aria-hidden="true" className="h-6 w-px bg-gray-200" />

                      <button onClick={() => handleOpen("/signup")} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                        Create account
                      </button>
                    </>
                  )}
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <Link to="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                  </Link>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* <AuthModal handleClose={handleClose} open={openAuthModal} /> */}
      <AuthModal handleClose={handleClose} open={openAuthModal} mode={authMode} />
    </div>
  )
}