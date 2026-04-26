import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { IconButton, Tooltip } from '@mui/material';

const salesdata = [
  {
    stats: '245k',
    title: 'Sales',
    subtitle: '+12% this week',
    iconBg: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
    shadowColor: 'rgba(245,158,11,0.25)',
    icon: <TrendingUpIcon sx={{ fontSize: "1.2rem", color: "#fff" }} />,
    trend: '+12%',
    trendUp: true,
    sparkline: [30, 45, 38, 60, 55, 75, 70],
    sparkColor: '#f59e0b',
  },
  {
    stats: '12.5k',
    title: 'Customers',
    subtitle: '+8% this week',
    iconBg: 'linear-gradient(135deg, #22c55e, #4ade80)',
    shadowColor: 'rgba(34,197,94,0.25)',
    icon: <AccountCircleIcon sx={{ fontSize: "1.2rem", color: "#fff" }} />,
    trend: '+8%',
    trendUp: true,
    sparkline: [20, 35, 30, 50, 45, 58, 55],
    sparkColor: '#22c55e',
  },
  {
    stats: '15.4k',
    title: 'Products',
    subtitle: '-2% this week',
    iconBg: 'linear-gradient(135deg, #ef4444, #f87171)',
    shadowColor: 'rgba(239,68,68,0.25)',
    icon: <SettingsCellIcon sx={{ fontSize: "1.2rem", color: "#fff" }} />,
    trend: '-2%',
    trendUp: false,
    sparkline: [60, 55, 70, 50, 65, 48, 45],
    sparkColor: '#ef4444',
  },
  {
    stats: '₹88k',
    title: 'Revenue',
    subtitle: '+21% this week',
    iconBg: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
    shadowColor: 'rgba(59,130,246,0.25)',
    icon: <AttachMoneyIcon sx={{ fontSize: "1.2rem", color: "#fff" }} />,
    trend: '+21%',
    trendUp: true,
    sparkline: [40, 55, 50, 70, 65, 85, 88],
    sparkColor: '#3b82f6',
  },
];

const Sparkline = ({ data, color }) => {
  const max = Math.max(...data);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: "2px", height: "28px" }}>
      {data.map((v, i) => (
        <div key={i} style={{
          flex: 1,
          height: `${(v / max) * 100}%`,
          borderRadius: "2px 2px 0 0",
          background: i === data.length - 1 ? color : `${color}40`,
          minHeight: "3px",
        }} />
      ))}
    </div>
  );
};

const Monthlyoverview = () => {
  return (
    <div style={{
      borderRadius: "20px",
      boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
      border: "1px solid #e2e8f0",
      background: "#ffffff",
      height: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    }}>

      {/* Header */}
      <div style={{
        display: "flex", alignItems: "flex-start",
        justifyContent: "space-between", padding: "20px 22px 0",
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
            <h3 style={{ margin: 0, fontWeight: 800, fontSize: "17px", color: "#0f172a", letterSpacing: "-0.3px" }}>
              Monthly Overview
            </h3>
            <span style={{
              fontSize: "10px", fontWeight: 700, background: "#eff6ff",
              color: "#1d4ed8", padding: "2px 8px", borderRadius: "20px", border: "1px solid #bfdbfe"
            }}>
              June 2025
            </span>
          </div>

          {/* Growth pill */}
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <div style={{
              display: "flex", alignItems: "center", gap: "4px",
              background: "#f0fdf4", border: "1px solid #bbf7d0",
              borderRadius: "20px", padding: "3px 10px"
            }}>
              <TrendingUpIcon sx={{ fontSize: 12, color: "#16a34a" }} />
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#16a34a" }}>
                48.5% total growth 😎 this month
              </span>
            </div>
          </div>
        </div>

        {/* Action icons */}
        <div style={{ display: "flex", gap: "4px" }}>
          <Tooltip title="Open full report">
            <IconButton size="small"><OpenInNewIcon sx={{ fontSize: 17 }} /></IconButton>
          </Tooltip>
          <IconButton size="small"><MoreVertIcon sx={{ fontSize: 17 }} /></IconButton>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: "#f1f5f9", margin: "16px 0 0" }} />

      {/* Stats grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: "12px",
        padding: "16px 22px 22px",
      }}>
        {salesdata.map((item, index) => (
          <div key={index} style={{
            borderRadius: "16px",
            border: "1px solid #f1f5f9",
            background: "#fafafa",
            padding: "14px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            transition: "transform 0.15s ease, box-shadow 0.15s ease",
            cursor: "default",
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = `0 8px 24px ${item.shadowColor}`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Icon + trend */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{
                width: "38px", height: "38px", borderRadius: "12px",
                background: item.iconBg,
                boxShadow: `0 4px 12px ${item.shadowColor}`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {item.icon}
              </div>
              <div style={{
                display: "flex", alignItems: "center", gap: "3px",
                fontSize: "11px", fontWeight: 700,
                color: item.trendUp ? "#16a34a" : "#dc2626",
                background: item.trendUp ? "#f0fdf4" : "#fef2f2",
                padding: "2px 7px", borderRadius: "20px",
              }}>
                {item.trendUp
                  ? <TrendingUpIcon sx={{ fontSize: 11 }} />
                  : <TrendingDownIcon sx={{ fontSize: 11 }} />
                }
                {item.trend}
              </div>
            </div>

            {/* Sparkline */}
            <Sparkline data={item.sparkline} color={item.sparkColor} />

            {/* Stat */}
            <div>
              <div style={{ fontWeight: 800, fontSize: "22px", color: "#0f172a", letterSpacing: "-0.5px", lineHeight: 1 }}>
                {item.stats}
              </div>
              <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "3px", textTransform: "capitalize", fontWeight: 500 }}>
                {item.title}
              </div>
            </div>

            {/* Subtitle */}
            <div style={{
              fontSize: "11px", fontWeight: 600,
              color: item.trendUp ? "#16a34a" : "#dc2626",
            }}>
              {item.subtitle}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Monthlyoverview;

// import React from 'react'
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import SettingsCellIcon from '@mui/icons-material/SettingsCell';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import {
//   Avatar,
//   Box,
//   Card,
//   CardContent,
//   CardHeader,
//   Grid,
//   IconButton,
//   Typography
// } from '@mui/material';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// const salesdata = [
//   {
//     stats: '245k',
//     title: 'sales',
//     color: '#FAD02E',
//     icon: <TrendingUpIcon sx={{ fontSize: "1.5rem" }} />
//   },
//   {
//     stats: '12.5k',
//     title: 'customers',
//     color: '#45CE30',
//     icon: <AccountCircleIcon sx={{ fontSize: "1.5rem" }} />
//   },
//   {
//     stats: '15.4k',
//     title: 'products',
//     color: '#E8290B',
//     icon: <SettingsCellIcon sx={{ fontSize: "1.5rem" }} />
//   },
//   {
//     stats: '88k',
//     title: 'revenue',
//     color: '#0ABDE3',
//     icon: <AttachMoneyIcon sx={{ fontSize: "1.5rem" }} />
//   },
// ];

// const Monthlyoverview = () => {

//   const renderstatus = () => {
//     return salesdata.map((item, index) => (
//       <Grid item xs={6} sm={3} key={index}>
//         <Box sx={{ display: "flex", alignItems: "center" }}>

//           <Avatar
//             variant="rounded"
//             sx={{
//               width: 42,
//               height: 42,
//               mr: 2.5,
//               color: "#fff",
//               backgroundColor: item.color,
//               boxShadow: 2
//             }}
//           >
//             {item.icon}
//           </Avatar>

//           <Box>
//             <Typography
//               variant="body2"
//               sx={{ fontWeight: 500, textTransform: 'capitalize' }}
//             >
//               {item.title}
//             </Typography>

//             <Typography variant="h6" sx={{ fontWeight: 600 }}>
//               {item.stats}
//             </Typography>
//           </Box>

//         </Box>
//       </Grid>
//     ));
//   };

//   return (
//     <Card sx={{ borderRadius: 3 }}>
//       <CardHeader
//         title="Monthly Overview"
//         action={
//           <IconButton size="small">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         subheader={
//           <Typography variant="body2">
//             <Box component="span" sx={{ fontWeight: 600 }}>
//               Total 48.5% growth 😎 this month
//             </Box>
//           </Typography>
//         }
//         titleTypographyProps={{
//           sx: {
//             mb: 1,
//             fontWeight: 600,
//             textTransform: 'capitalize'
//           }
//         }}
//       />

//       <CardContent sx={{ pt: 3 }}>
//         <Grid container spacing={4}>
//           {renderstatus()}
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// };

// export default Monthlyoverview;