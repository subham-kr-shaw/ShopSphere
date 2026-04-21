// import React from 'react'
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import SettingsCellIcon from '@mui/icons-material/SettingsCell';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { useTheme } from '@mui/material/styles';


// const salesdata = [
//     {
//         stats: '245k',
//         title: 'sales',
//         color: '#FAD02E',
//         icon: <TrendingUpIcon sx={{ fontSize: "1.75rem" }} />
//     },
//     {
//         stats: '12.5k',
//         title: 'customers',
//         color: '#45CE30',
//         icon: <AccountCircleIcon sx={{ fontSize: "1.75rem" }} />
//     },
//     {
//         stats: '15.4k',
//         title: 'products',
//         color: '#E8290B',
//         icon: <SettingsCellIcon sx={{ fontSize: "1.75rem" }} />
//     },
//     {
//         stats: '88k',
//         title: 'products',
//         color: '#0ABDE3',
//         icon: <AttachMoneyIcon sx={{ fontSize: "1.75rem" }} />
//     },
// ]
// const renderstatus = () => {
//     const theme = useTheme();
//     return salesdata.map((item, index) => (
//         <Grid item xs={12} sm={13} key={index}>
//             <Box sx={{
//                 display: "flex", alignItems: 'center'
//             }}>
//                 <Avatar variant='rounded' sx={{
//                     mr: 3,
//                     width: 44,
//                     boxShadow: 3,
//                     color: "white",
//                     backgroundColor: `${item.color}`
//                 }}>
//                     {item.icon}
//                 </Avatar>
//                 <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//                     <Typography variant='caption'>{item.title}</Typography>
//                     <Typography variant='caption'>{item.stats}</Typography>
//                 </Box>
//             </Box>

//         </Grid>
//     ))
// }

// const Monthlyoverview = () => {
//     return (
//         <Card>
//             <CardHeader title='monthly overview'
//                 action={
//                     <IconButton size='small'>
//                         <MoreVertIcon />
//                     </IconButton>
//                 }
//                 subheader={
//                     <Typography variant='body2'>
//                         <Box component="span" sx={{ fontWeight: 600 }}>
//                             Total 48.5% growth 😎 this month
//                         </Box>
//                     </Typography>
//                 }
//                 titleTypographyProps={{
//                     sx:{
//                         mb:2.5,
//                         lineHeight:'2rem !important',
//                         letterSpacing:'.15rem !important'
//                     }
//                 }} 
//                 />
//                 <CardContent sx={{pt:theme=>`${theme.spacing(3)}!important`}}>
//                     <Grid container spacing={[5,0]}>
//                       {renderstatus()}
//                     </Grid>
//                 </CardContent>
//         </Card>
//     )
// }

// export default Monthlyoverview
import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const salesdata = [
  {
    stats: '245k',
    title: 'sales',
    color: '#FAD02E',
    icon: <TrendingUpIcon sx={{ fontSize: "1.5rem" }} />
  },
  {
    stats: '12.5k',
    title: 'customers',
    color: '#45CE30',
    icon: <AccountCircleIcon sx={{ fontSize: "1.5rem" }} />
  },
  {
    stats: '15.4k',
    title: 'products',
    color: '#E8290B',
    icon: <SettingsCellIcon sx={{ fontSize: "1.5rem" }} />
  },
  {
    stats: '88k',
    title: 'revenue',
    color: '#0ABDE3',
    icon: <AttachMoneyIcon sx={{ fontSize: "1.5rem" }} />
  },
];

const Monthlyoverview = () => {

  const renderstatus = () => {
    return salesdata.map((item, index) => (
      <Grid item xs={6} sm={3} key={index}>
        <Box sx={{ display: "flex", alignItems: "center" }}>

          <Avatar
            variant="rounded"
            sx={{
              width: 42,
              height: 42,
              mr: 2.5,
              color: "#fff",
              backgroundColor: item.color,
              boxShadow: 2
            }}
          >
            {item.icon}
          </Avatar>

          <Box>
            <Typography
              variant="body2"
              sx={{ fontWeight: 500, textTransform: 'capitalize' }}
            >
              {item.title}
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {item.stats}
            </Typography>
          </Box>

        </Box>
      </Grid>
    ));
  };

  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardHeader
        title="Monthly Overview"
        action={
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box component="span" sx={{ fontWeight: 600 }}>
              Total 48.5% growth 😎 this month
            </Box>
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 1,
            fontWeight: 600,
            textTransform: 'capitalize'
          }
        }}
      />

      <CardContent sx={{ pt: 3 }}>
        <Grid container spacing={4}>
          {renderstatus()}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Monthlyoverview;