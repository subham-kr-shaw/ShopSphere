import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../state/Auth/Action';
import axios from 'axios';
// import { API_BASE_URL } from '../../../config/apiConfig';
import {
    Box, Typography, Avatar, Button, Divider,
    Chip, Card, CardContent, CircularProgress
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmailIcon from '@mui/icons-material/Email';
import StoreIcon from '@mui/icons-material/Store';
import { API_BASE_URL } from '../../config/apiConfig';

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { role } = useSelector(store => store.auth);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     // ✅ take token from localStorage and pass to backend
    //     const token = localStorage.getItem("jwt");
    //     if (!token) { navigate('/signin'); return; }

    //     axios.get(`${API_BASE_URL}/api/user/profile`, {
    //         headers: { Authorization: `Bearer ${token}` }
    //     })
    //     .then(res => setUser(res.data.user))
    //     .catch(err => console.log(err))
    //     .finally(() => setLoading(false));
    // }, []);

    const handlelogout = () => {
        dispatch(logout());
        navigate('/');
    };

    useEffect(() => {
    const token = localStorage.getItem("jwt");
    console.log("token:", token); // ✅ check if token exists
    
    if (!token) { navigate('/signin'); return; }

    axios.get(`${API_BASE_URL}/api/user/profile`, {
        headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => {
        console.log("user data:", res.data); // ✅ check response
        setUser(res.data.user);
    })
    .catch(err => {
        console.log("error:", err.response?.data); // ✅ check error
    })
    .finally(() => setLoading(false));
}, []);

    const formatdate = (datestring) => {
        if (!datestring) return 'N/A';
        return new Date(datestring).toLocaleDateString('en-IN', {
            year: 'numeric', month: 'long', day: 'numeric'
        });
    };

    const initial = user
        ? `${user.firstname?.[0] || ''}${user.lastname?.[0] || ''}`.toUpperCase()
        : 'A';

    if (loading) {
        return (
            <Box className="flex justify-center items-center h-screen">
                <CircularProgress />
            </Box>
        );
    }

    if (!user) {
        return (
            <Box className="flex justify-center items-center h-screen">
                <Typography color="error">Failed to load profile.</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ maxWidth: 680, mx: 'auto', py: 6, px: 3 }}>

            {/* ─── Header card ─── */}
            <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 3, mb: 3 }}>
                <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
                        <Avatar sx={{
                            width: 72, height: 72,
                            bgcolor: role === 'admin' ? 'primary.main' : 'secondary.main',
                            fontSize: 26, fontWeight: 700
                        }}>
                            {initial}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="h5" fontWeight={700}>
                                {user.firstname} {user.lastname}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                {user.email}
                            </Typography>
                            <Chip
                                icon={role === 'admin' ? <AdminPanelSettingsIcon /> : <PersonIcon />}
                                label={role === 'admin' ? 'Administrator' : 'Customer'}
                                color={role === 'admin' ? 'primary' : 'default'}
                                size="small"
                                sx={{ fontWeight: 600 }}
                            />
                        </Box>
                    </Box>

                    <Divider sx={{ mb: 3 }} />

                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2.5 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                            <EmailIcon sx={{ fontSize: 20, color: 'text.secondary', mt: 0.3 }} />
                            <Box>
                                <Typography variant="caption" color="text.secondary" fontWeight={600} sx={{ textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                    Email
                                </Typography>
                                <Typography variant="body2" fontWeight={500}>{user.email}</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                            <AdminPanelSettingsIcon sx={{ fontSize: 20, color: 'text.secondary', mt: 0.3 }} />
                            <Box>
                                <Typography variant="caption" color="text.secondary" fontWeight={600} sx={{ textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                    Role
                                </Typography>
                                <Typography variant="body2" fontWeight={500} sx={{ textTransform: 'capitalize' }}>
                                    {user.role}
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                            <CalendarTodayIcon sx={{ fontSize: 20, color: 'text.secondary', mt: 0.3 }} />
                            <Box>
                                <Typography variant="caption" color="text.secondary" fontWeight={600} sx={{ textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                    Member Since
                                </Typography>
                                <Typography variant="body2" fontWeight={500}>
                                    {formatdate(user.createdAt)}
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                            <PersonIcon sx={{ fontSize: 20, color: 'text.secondary', mt: 0.3 }} />
                            <Box>
                                <Typography variant="caption" color="text.secondary" fontWeight={600} sx={{ textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                    Phone
                                </Typography>
                                <Typography variant="body2" fontWeight={500}>
                                    {user.phonenumber || 'Not provided'}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </CardContent>
            </Card>

            {/* ─── Role description ─── */}
            <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 3, mb: 3 }}>
                <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                        <AdminPanelSettingsIcon color="primary" />
                        <Typography variant="subtitle1" fontWeight={700}>
                            {role === 'admin' ? 'Admin Privileges' : 'Account Access'}
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                        {role === 'admin'
                            ? 'As an administrator of ShopSphere, you have full access to manage products, orders, customers, and platform settings. You can create and delete products, update order statuses, and oversee all user activity.'
                            : 'As a ShopSphere customer, you can browse our full catalogue, add items to your cart, place orders, and track your delivery. You can also leave reviews and ratings on products you have purchased.'
                        }
                    </Typography>
                </CardContent>
            </Card>

            {/* ─── About ShopSphere ─── */}
            <Card elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 3, mb: 4 }}>
                <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                        <StoreIcon color="primary" />
                        <Typography variant="subtitle1" fontWeight={700}>About ShopSphere</Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                        ShopSphere is a full-stack e-commerce platform offering a wide range of fashion and lifestyle products for men and women. From traditional ethnic wear to modern activewear and accessories — we bring the best of style to your doorstep. Built with React, Node.js, and MongoDB.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, mt: 2, flexWrap: 'wrap' }}>
                        {['Fashion', 'Accessories', 'Activewear', 'Traditional Wear', 'Fast Delivery'].map(tag => (
                            <Chip key={tag} label={tag} size="small" variant="outlined" />
                        ))}
                    </Box>
                </CardContent>
            </Card>

            {/* ─── Action buttons ─── */}
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                    fullWidth variant="outlined"
                    startIcon={<HomeIcon />}
                    onClick={() => navigate('/')}
                    sx={{ borderRadius: 2, py: 1.2, fontWeight: 600 }}
                >
                    Go to Homepage
                </Button>
                <Button
                    fullWidth variant="contained" color="error"
                    startIcon={<LogoutIcon />}
                    onClick={handlelogout}
                    sx={{ borderRadius: 2, py: 1.2, fontWeight: 600 }}
                >
                    Logout
                </Button>
            </Box>
        </Box>
    );
};

export default Profile;