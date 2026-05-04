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
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme, useMediaQuery, List, Drawer, ListItemText, CssBaseline, Typography, Avatar, Divider, IconButton, AppBar, Toolbar } from "@mui/material";
import Dashboard from './Dashboard';
import Producttable from './Producttable';
import Ordertable from './Ordertable';
import Customertable from './Customertable';
import Createproductform from './Createproductform.jsx';
import Profile from './Profile.jsx';

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
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (path) => {
        navigate(path);
        if (isMobile) setMobileOpen(false); // ✅ close drawer on mobile after click
    };

    const drawer = (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%", py: 2 }}>
            {/* Brand */}
            <Box sx={{ px: 2.5, mb: 3 }}>
                <Typography variant="h6" fontWeight={700} sx={{ color: "primary.main", letterSpacing: 0.5 }}>
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
                            onClick={() => handleNavClick(item.path)}
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
                                <ListItemIcon sx={{ minWidth: 36, color: isActive ? "#fff" : "text.secondary" }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.name}
                                    primaryTypographyProps={{ fontSize: 14, fontWeight: isActive ? 600 : 400 }}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>

            <Divider sx={{ my: 1 }} />

            {/* Account */}
            <ListItem disablePadding onClick={() => handleNavClick("/admin/account")} sx={{ px: 1 }}>
                <ListItemButton sx={{ borderRadius: 2, px: 1.5, py: 1, "&:hover": { backgroundColor: "action.hover" } }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                        <Avatar sx={{ width: 28, height: 28, bgcolor: "primary.main", fontSize: 13 }}>A</Avatar>
                    </ListItemIcon>
                    <ListItemText primary="Account" primaryTypographyProps={{ fontSize: 14 }} />
                </ListItemButton>
            </ListItem>
        </Box>
    );

    return (
        <Box sx={{ display: "flex", height: "100vh" }}>
            <CssBaseline />

            {/* ✅ Mobile top AppBar */}
            {isMobile && (
                <AppBar
                    position="fixed"
                    elevation={0}
                    sx={{
                        zIndex: theme.zIndex.drawer + 1,
                        bgcolor: "background.paper",
                        borderBottom: "1px solid",
                        borderColor: "divider",
                    }}
                >
                    <Toolbar sx={{ justifyContent: "space-between" }}>
                        <IconButton onClick={() => setMobileOpen(!mobileOpen)} sx={{ color: "text.primary" }}>
                            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                        <Typography variant="h6" fontWeight={700} sx={{ color: "primary.main" }}>
                            ShopSphere
                        </Typography>
                        <Avatar sx={{ width: 32, height: 32, bgcolor: "primary.main", fontSize: 13 }}>A</Avatar>
                    </Toolbar>
                </AppBar>
            )}

            {/* ✅ Sidebar — permanent on desktop, temporary drawer on mobile */}
            <Drawer
                variant={isMobile ? "temporary" : "permanent"}
                open={isMobile ? mobileOpen : true}
                onClose={() => setMobileOpen(false)}
                ModalProps={{ keepMounted: true }}
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
                    mt: isMobile ? 8 : 0, // ✅ offset for mobile AppBar
                    width: isMobile ? "100%" : `calc(100% - ${DRAWER_WIDTH}px)`,
                }}
            >
                <Routes>
                    <Route path='/'               element={<Dashboard />} />
                    <Route path='/product/create' element={<Createproductform />} />
                    <Route path='/customers'      element={<Customertable />} />
                    <Route path='/orders'         element={<Ordertable />} />
                    <Route path='/products'       element={<Producttable />} />
                    <Route path='/account'        element={<Profile />} />
                </Routes>
            </Box>
        </Box>
    );
}

export default Admin;




// import Box from '@mui/material/Box';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import React, { useState } from 'react'
// import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import PortraitIcon from '@mui/icons-material/Portrait';
// import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
// import ReorderIcon from '@mui/icons-material/Reorder';
// import AddBoxIcon from '@mui/icons-material/AddBox';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { useTheme, useMediaQuery, List, Drawer, ListItemText, CssBaseline, Typography, Avatar, Divider } from "@mui/material";
// import Dashboard from './Dashboard';
// import Producttable from './Producttable';
// import Ordertable from './Ordertable';
// import Customertable from './Customertable';
// import Createproductform from './Createproductform.jsx';
// import Profile from './Profile.jsx';

// const DRAWER_WIDTH = 220;

// const menu = [
//     { name: "Dashboard",   path: "/admin",                 icon: <DashboardIcon /> },
//     { name: "Products",    path: "/admin/products",         icon: <ProductionQuantityLimitsIcon /> },
//     { name: "Customer",    path: "/admin/customers",        icon: <PortraitIcon /> },
//     { name: "Order",       path: "/admin/orders",           icon: <ReorderIcon /> },
//     { name: "Addproduct",  path: "/admin/product/create",   icon: <AddBoxIcon /> },
// ]

// const Admin = () => {
//     const theme = useTheme();
//     const navigate = useNavigate();
//     const location = useLocation();

//     const handleclick=()=>{
//         navigate(`/profile`)
//     }

//     const drawer = (
//         <Box sx={{
//             display: "flex",
//             flexDirection: "column",
//             height: "100%",
//             py: 2,
//         }}>
//             {/* Brand / Logo */}
//             <Box sx={{ px: 2.5, mb: 3 }}>
//                 <Typography
//                     variant="h6"
//                     fontWeight={700}
//                     sx={{ color: "primary.main", letterSpacing: 0.5 }}
//                 >
//                     ShopSphere
//                 </Typography>
//                 <Typography variant="caption" color="text.secondary">
//                     Admin Panel
//                 </Typography>
//             </Box>

//             <Divider sx={{ mb: 1 }} />

//             {/* Nav items */}
//             <List disablePadding sx={{ flex: 1 }}>
//                 {menu.map((item) => {
//                     const isActive = location.pathname === item.path;
//                     return (
//                         <ListItem
//                             key={item.name}
//                             disablePadding
//                             onClick={() => navigate(item.path)}
//                             sx={{ mb: 0.5, px: 1 }}
//                         >
//                             <ListItemButton
//                                 sx={{
//                                     borderRadius: 2,
//                                     px: 1.5,
//                                     py: 1,
//                                     backgroundColor: isActive ? "primary.main" : "transparent",
//                                     color: isActive ? "#fff" : "text.primary",
//                                     "&:hover": {
//                                         backgroundColor: isActive ? "primary.dark" : "action.hover",
//                                     },
//                                     transition: "all 0.15s ease",
//                                 }}
//                             >
//                                 <ListItemIcon
//                                     sx={{
//                                         minWidth: 36,
//                                         color: isActive ? "#fff" : "text.secondary",
//                                     }}
//                                 >
//                                     {item.icon}
//                                 </ListItemIcon>
//                                 <ListItemText
//                                     primary={item.name}
//                                     primaryTypographyProps={{
//                                         fontSize: 14,
//                                         fontWeight: isActive ? 600 : 400,
//                                     }}
//                                 />
//                             </ListItemButton>
//                         </ListItem>
//                     );
//                 })}
//             </List>

//             <Divider sx={{ my: 1 }} />

//             {/* Account — fixed at bottom */}
//             <ListItem
//                 disablePadding
//                 onClick={() => navigate("/admin/account")}
//                 sx={{ px: 1 }}
//             >
//                 <ListItemButton
//                     sx={{
//                         borderRadius: 2,
//                         px: 1.5,
//                         py: 1,
//                         "&:hover": { backgroundColor: "action.hover" },
//                     }}
//                 >
//                     <ListItemIcon sx={{ minWidth: 36 }}>
//                         <Avatar
//                             sx={{
//                                 width: 28,
//                                 height: 28,
//                                 bgcolor: "primary.main",
//                                 fontSize: 13,
//                             }}
//                         >
//                             A
//                         </Avatar>
//                     </ListItemIcon>
//                     <ListItemText
//                         primary="Account"
//                         primaryTypographyProps={{ fontSize: 14 }}
//                     />
//                 </ListItemButton>
//             </ListItem>
//         </Box>
//     );

//     return (
//         <Box sx={{ display: "flex", height: "100vh" }}>
//             <CssBaseline />

//             {/* Sidebar */}
//             <Drawer
//                 variant="permanent"
//                 sx={{
//                     width: DRAWER_WIDTH,
//                     flexShrink: 0,
//                     "& .MuiDrawer-paper": {
//                         width: DRAWER_WIDTH,
//                         boxSizing: "border-box",
//                         borderRight: "1px solid",
//                         borderColor: "divider",
//                     },
//                 }}
//             >
//                 {drawer}
//             </Drawer>

//             {/* Main content */}
//             <Box
//                 component="main"
//                 sx={{
//                     flexGrow: 1,
//                     overflow: "auto",
//                     bgcolor: "grey.50",
//                     minHeight: "100vh",
//                 }}
//             >
//                 <Routes>
//                     <Route path='/'                element={<Dashboard />} />
//                     <Route path='/product/create'  element={<Createproductform />} />
//                     <Route path='/customers'        element={<Customertable />} />
//                     <Route path='/orders'           element={<Ordertable />} />
//                     <Route path='/products'         element={<Producttable />} />
//                     <Route path='/account'         element={<Profile/>} />
//                 </Routes>
//             </Box>
//         </Box>
//     );
// }

// export default Admin;