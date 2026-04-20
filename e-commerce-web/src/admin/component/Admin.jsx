
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Toolbar from '@mui/material/Toolbar';
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import InboxIcon from '@mui/icons-material/Inbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PortraitIcon from '@mui/icons-material/Portrait';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ReorderIcon from '@mui/icons-material/Reorder';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useTheme, useMediaQuery, List, Drawer, ListItemText, CssBaseline } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dashboard from './Dashboard';
import Producttable from './Producttable';
import Ordertable from './Ordertable';
import Customertable from './Customertable';
import Createproductform from './Createproductform.jsx';

const menu = [
    { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
    { name: "Products", path: "/admin/products", icon: <ProductionQuantityLimitsIcon /> },
    { name: "Customer", path: "/admin/customers", icon: <PortraitIcon /> },
    { name: "Order", path: "/admin/orders", icon: <ReorderIcon /> },
    { name: "Addproduct", path: "/admin/product/create", icon: <AddBoxIcon /> },
]

const Admin = () => {
    const theme = useTheme();
    const islargescreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sidebarvisible, setsidebarvisible] = useState(false);
    const navigate = useNavigate();
    const drawer = (
        <Box
            sx={{
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
            {/* {islargescreen && <Toolbar />} */}
            <List>
                {menu.map((item, index) => (
                    <ListItem
                        key={item.name}
                        disablePadding
                        onClick={() => navigate(item.path)}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText>{item.name}</ListItemText>
                        </ListItemButton>
                    </ListItem>))}
                <ListItem
                    disablePadding
                    onClick={() => navigate(item.path)}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText>Account</ListItemText>
                    </ListItemButton>
                </ListItem>

            </List>
        </Box>
    )
    return (
        <div>
            <div className='flex h-[100vh] border '>
                <CssBaseline/>
                <div className='w-[15%] border border-r-gray-300 h-full'>
                    <Drawer
                        variant='permanent'
                    >

                        {drawer}
                    </Drawer>
                </div>
                <div className='w-[85%]'>
                    {/* <Box className='adminContainer' component={'main'} sx={{flexGrow:1}}> */}
                    <Routes>
                        <Route path='/' element={<Dashboard />}></Route>
                        <Route path='/product/create' element={<Createproductform />}></Route>
                        <Route path='/products' element={<Customertable />}></Route>
                        <Route path='/orders' element={<Ordertable />}></Route>
                        <Route path='/customers' element={<Producttable />}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Admin