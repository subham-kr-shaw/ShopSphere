




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

const Admin = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();
    const location = useLocation();

    const drawer = (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%", py: 2 }}>
            <Box sx={{ px: 2.5, mb: 3 }}>
                <Typography variant="h6" fontWeight={700} sx={{ color: "primary.main", letterSpacing: 0.5 }}>
                    ShopSphere
                </Typography>
                <Typography variant="caption" color="text.secondary">Admin Panel</Typography>
            </Box>

            <Divider sx={{ mb: 1 }} />

            <List disablePadding sx={{ flex: 1 }}>
                {menu.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)} sx={{ mb: 0.5, px: 1 }}>
                            <ListItemButton sx={{
                                borderRadius: 2, px: 1.5, py: 1,
                                backgroundColor: isActive ? "primary.main" : "transparent",
                                color: isActive ? "#fff" : "text.primary",
                                "&:hover": { backgroundColor: isActive ? "primary.dark" : "action.hover" },
                                transition: "all 0.15s ease",
                            }}>
                                <ListItemIcon sx={{ minWidth: 36, color: isActive ? "#fff" : "text.secondary" }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name} primaryTypographyProps={{ fontSize: 14, fontWeight: isActive ? 600 : 400 }} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>

            <Divider sx={{ my: 1 }} />

            <ListItem disablePadding onClick={() => navigate("/admin/account")} sx={{ px: 1 }}>
                <ListItemButton sx={{ borderRadius: 2, px: 1.5, py: 1, "&:hover": { backgroundColor: "action.hover" } }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                        <Avatar sx={{ width: 28, height: 28, bgcolor: "primary.main", fontSize: 13 }}>A</Avatar>
                    </ListItemIcon>
                    <ListItemText primary="Account" primaryTypographyProps={{ fontSize: 14 }} />
                </ListItemButton>
            </ListItem>
        </Box>
    );

    // ── Mobile bottom nav items (include Account) ──
    const bottomNav = [...menu, { name: "Account", path: "/admin/account", icon: <AccountCircleIcon /> }];

    return (
        <Box sx={{ display: "flex", height: "100vh" }}>
            <CssBaseline />

            {/* Desktop sidebar — hidden on mobile */}
            {!isMobile && (
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
            )}

            {/* Main content */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    overflow: "auto",
                    bgcolor: "grey.50",
                    minHeight: "100vh",
                    // On mobile, leave room for the bottom nav bar
                    pb: isMobile ? "64px" : 0,
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

            {/* Mobile bottom nav bar */}
            {isMobile && (
                <Box sx={{
                    position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1200,
                    bgcolor: "background.paper",
                    borderTop: "1px solid", borderColor: "divider",
                    display: "flex",
                    height: "64px",
                    boxShadow: "0 -2px 12px rgba(0,0,0,0.08)",
                }}>
                    {bottomNav.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Box
                                key={item.name}
                                onClick={() => navigate(item.path)}
                                sx={{
                                    flex: 1,
                                    display: "flex", flexDirection: "column",
                                    alignItems: "center", justifyContent: "center",
                                    gap: "2px", cursor: "pointer",
                                    color: isActive ? "primary.main" : "text.secondary",
                                    transition: "color 0.15s ease",
                                    "&:hover": { color: "primary.main" },
                                }}
                            >
                                <Box sx={{
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    width: 32, height: 32, borderRadius: "10px",
                                    bgcolor: isActive ? "primary.main" : "transparent",
                                    color: isActive ? "#fff" : "inherit",
                                    transition: "all 0.15s ease",
                                }}>
                                    {item.icon}
                                </Box>
                                <Typography sx={{ fontSize: "9px", fontWeight: isActive ? 700 : 400, lineHeight: 1 }}>
                                    {item.name}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>
            )}
        </Box>
    );
};