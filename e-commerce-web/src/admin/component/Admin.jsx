
// import Box from '@mui/material/Box';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Toolbar from '@mui/material/Toolbar';
// import React, { useState } from 'react'
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import EmailIcon from '@mui/icons-material/Email';
// import InboxIcon from '@mui/icons-material/Inbox';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import PortraitIcon from '@mui/icons-material/Portrait';
// import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
// import ReorderIcon from '@mui/icons-material/Reorder';
// import AddBoxIcon from '@mui/icons-material/AddBox';
// import { useTheme, useMediaQuery, List, Drawer, ListItemText, CssBaseline } from "@mui/material";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Dashboard from './Dashboard';
// import Producttable from './Producttable';
// import Ordertable from './Ordertable';
// import Customertable from './Customertable';
// import Createproductform from './Createproductform.jsx';

// const menu = [
//     { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
//     { name: "Products", path: "/admin/products", icon: <ProductionQuantityLimitsIcon /> },
//     { name: "Customer", path: "/admin/customers", icon: <PortraitIcon /> },
//     { name: "Order", path: "/admin/orders", icon: <ReorderIcon /> },
//     { name: "Addproduct", path: "/admin/product/create", icon: <AddBoxIcon /> },
// ]

// const Admin = () => {
//     const theme = useTheme();
//     const islargescreen = useMediaQuery(theme.breakpoints.up("lg"));
//     const [sidebarvisible, setsidebarvisible] = useState(false);
//     const navigate = useNavigate();
//     const drawer = (
//         <Box
//             sx={{
//                 overflow: "auto",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between"
//             }}>
//             {/* {islargescreen && <Toolbar />} */}
//             <List>
//                 {menu.map((item, index) => (
//                     <ListItem
//                         key={item.name}
//                         disablePadding
//                         onClick={() => navigate(item.path)}
//                     >
//                         <ListItemButton>
//                             <ListItemIcon>
//                                 {item.icon}
//                             </ListItemIcon>
//                             <ListItemText>{item.name}</ListItemText>
//                         </ListItemButton>
//                     </ListItem>))}
//                 <ListItem
//                     disablePadding
//                     onClick={() => navigate(item.path)}
//                 >
//                     <ListItemButton>
//                         <ListItemIcon>
//                             <AccountCircleIcon />
//                         </ListItemIcon>
//                         <ListItemText>Account</ListItemText>
//                     </ListItemButton>
//                 </ListItem>

//             </List>
//         </Box>
//     )
//     return (
//         <div>
//             <div className='flex h-[100vh] border '>
//                 <CssBaseline/>
//                 <div className='w-[15%] border border-r-gray-300 h-full'>
//                     <Drawer
//                         variant='permanent'
//                     >

//                         {drawer}
//                     </Drawer>
//                 </div>
//                 <div className='w-[85%]'>
//                     {/* <Box className='adminContainer' component={'main'} sx={{flexGrow:1}}> */}
//                     <Routes>
//                         <Route path='/' element={<Dashboard />}></Route>
//                         <Route path='/product/create' element={<Createproductform />}></Route>
//                         <Route path='/customers' element={<Customertable />}></Route>
//                         <Route path='/orders' element={<Ordertable />}></Route>
//                         <Route path='/products' element={<Producttable />}></Route>
//                     </Routes>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Admin

import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import React, { useState } from 'react'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PortraitIcon from '@mui/icons-material/Portrait';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ReorderIcon from '@mui/icons-material/Reorder';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTheme, useMediaQuery, List, Drawer, ListItemText, CssBaseline, Typography, Avatar, Divider } from "@mui/material";
import Dashboard from './Dashboard';
import Producttable from './Producttable';
import Ordertable from './Ordertable';
import Customertable from './Customertable';
import Createproductform from './Createproductform.jsx';
import Profile from './profile.jsx';

const DRAWER_WIDTH = 220;

const menu = [
    { name: "Dashboard",   path: "/admin",                 icon: <DashboardIcon /> },
    { name: "Products",    path: "/admin/products",         icon: <ProductionQuantityLimitsIcon /> },
    { name: "Customer",    path: "/admin/customers",        icon: <PortraitIcon /> },
    { name: "Order",       path: "/admin/orders",           icon: <ReorderIcon /> },
    { name: "Addproduct",  path: "/admin/product/create",   icon: <AddBoxIcon /> },
]

const Admin = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    const handleclick=()=>{
        navigate(`/profile`)
    }

    const drawer = (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            py: 2,
        }}>
            {/* Brand / Logo */}
            <Box sx={{ px: 2.5, mb: 3 }}>
                <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ color: "primary.main", letterSpacing: 0.5 }}
                >
                    ShopSphere
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    Admin Panel
                </Typography>
            </Box>

            <Divider sx={{ mb: 1 }} />

            {/* Nav items */}
            <List disablePadding sx={{ flex: 1 }}>
                {menu.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <ListItem
                            key={item.name}
                            disablePadding
                            onClick={() => navigate(item.path)}
                            sx={{ mb: 0.5, px: 1 }}
                        >
                            <ListItemButton
                                sx={{
                                    borderRadius: 2,
                                    px: 1.5,
                                    py: 1,
                                    backgroundColor: isActive ? "primary.main" : "transparent",
                                    color: isActive ? "#fff" : "text.primary",
                                    "&:hover": {
                                        backgroundColor: isActive ? "primary.dark" : "action.hover",
                                    },
                                    transition: "all 0.15s ease",
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 36,
                                        color: isActive ? "#fff" : "text.secondary",
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.name}
                                    primaryTypographyProps={{
                                        fontSize: 14,
                                        fontWeight: isActive ? 600 : 400,
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>

            <Divider sx={{ my: 1 }} />

            {/* Account — fixed at bottom */}
            <ListItem
                disablePadding
                onClick={() => navigate("/admin/account")}
                sx={{ px: 1 }}
            >
                <ListItemButton
                    sx={{
                        borderRadius: 2,
                        px: 1.5,
                        py: 1,
                        "&:hover": { backgroundColor: "action.hover" },
                    }}
                >
                    <ListItemIcon sx={{ minWidth: 36 }}>
                        <Avatar
                            sx={{
                                width: 28,
                                height: 28,
                                bgcolor: "primary.main",
                                fontSize: 13,
                            }}
                        >
                            A
                        </Avatar>
                    </ListItemIcon>
                    <ListItemText
                        primary="Account"
                        primaryTypographyProps={{ fontSize: 14 }}
                    />
                </ListItemButton>
            </ListItem>
        </Box>
    );

    return (
        <Box sx={{ display: "flex", height: "100vh" }}>
            <CssBaseline />

            {/* Sidebar */}
            <Drawer
                variant="permanent"
                sx={{
                    width: DRAWER_WIDTH,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: DRAWER_WIDTH,
                        boxSizing: "border-box",
                        borderRight: "1px solid",
                        borderColor: "divider",
                    },
                }}
            >
                {drawer}
            </Drawer>

            {/* Main content */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    overflow: "auto",
                    bgcolor: "grey.50",
                    minHeight: "100vh",
                }}
            >
                <Routes>
                    <Route path='/'                element={<Dashboard />} />
                    <Route path='/product/create'  element={<Createproductform />} />
                    <Route path='/customers'        element={<Customertable />} />
                    <Route path='/orders'           element={<Ordertable />} />
                    <Route path='/products'         element={<Producttable />} />
                    <Route path='/account'         element={<Profile/>} />
                </Routes>
            </Box>
        </Box>
    );
}

export default Admin;