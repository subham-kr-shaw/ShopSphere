import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <Grid container className="bg-black text-white text-center p-11 w-full" justifyContent="center" spacing={4} padding={4}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" gutterBottom>
                        Customer Service
                    </Typography>

                    <div>
                        <h1>Home</h1>
                    </div>

                    <div>
                        <h1>About</h1>
                    </div>

                    <div>
                        <h1>Contact</h1>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" gutterBottom>
                        Customer Service
                    </Typography>

                    <div>
                        <h1>Home</h1>
                    </div>

                    <div>
                        <h1>About</h1>
                    </div>

                    <div>
                        <h1>Contact</h1>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" gutterBottom>
                        Customer Service
                    </Typography>

                    <div>
                        <h1>Home</h1>
                    </div>

                    <div>
                        <h1>About</h1>
                    </div>

                    <div>
                        <h1>Contact</h1>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" gutterBottom>
                        Customer Service
                    </Typography>

                    <div>
                        <h1>Home</h1>
                    </div>

                    <div>
                        <h1>About</h1>
                    </div>

                    <div>
                        <h1>Contact</h1>
                    </div>

                </Grid>
            </Grid>
            <div>
                <Grid item xs={12} className=" bg-black text-white text-center p-4 w-full">
                    <Typography variant="body2" color="white">
                        © 2023 Your Company. All rights reserved.
                    </Typography>
                </Grid></div>
        </div>
    );
};

export default Footer;