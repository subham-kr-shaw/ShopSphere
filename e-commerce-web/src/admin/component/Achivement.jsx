import React from "react";
import { Button } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BarChartIcon from "@mui/icons-material/BarChart";

const miniBarData = [40, 65, 50, 80, 70, 90, 85];

const Achievement = () => {
  return (
    <div style={{
      position: "relative",
      borderRadius: "20px",
      overflow: "hidden",
      background: "#ffffff",
      border: "1px solid #e2e8f0",
      boxShadow: "0 4px 24px rgba(25, 118, 210, 0.08)",
      height: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
    }}>

      {/* Top accent bar — gradient */}
      <div style={{ height: "5px", background: "linear-gradient(90deg, #1976d2 0%, #42a5f5 60%, #67e8f9 100%)" }} />

      {/* Decorative circles */}
      <div style={{
        position: "absolute", top: "-30px", right: "-30px",
        width: "100px", height: "100px", borderRadius: "50%",
        background: "rgba(25,118,210,0.06)", pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", top: "20px", right: "-10px",
        width: "60px", height: "60px", borderRadius: "50%",
        background: "rgba(25,118,210,0.04)", pointerEvents: "none"
      }} />

      {/* Main content */}
      <div style={{ padding: "22px 24px", flex: 1, display: "flex", flexDirection: "column" }}>

        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{
              width: "32px", height: "32px", borderRadius: "10px",
              background: "linear-gradient(135deg, #1976d2, #42a5f5)",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <EmojiEventsIcon sx={{ fontSize: 16, color: "#fff" }} />
            </div>
            <span style={{ fontWeight: 800, fontSize: "16px", color: "#1976d2", letterSpacing: "-0.3px" }}>
              ShopSphere
            </span>
          </div>
          <span style={{
            fontSize: "10px", fontWeight: 700,
            backgroundColor: "#dcfce7", color: "#15803d",
            padding: "3px 10px", borderRadius: "20px", letterSpacing: "0.5px"
          }}>
            LIVE
          </span>
        </div>

        <p style={{ margin: "0 0 6px", fontSize: "13px", color: "#64748b" }}>
          Congratulations 🥳 — great month!
        </p>

        {/* Big stat */}
        <div style={{ fontWeight: 800, fontSize: "40px", color: "#0f172a", letterSpacing: "-2px", lineHeight: 1, marginBottom: "8px" }}>
          420.8k
        </div>

        {/* Growth badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "18px" }}>
          <div style={{
            display: "flex", alignItems: "center", gap: "4px",
            background: "#f0fdf4", border: "1px solid #bbf7d0",
            borderRadius: "20px", padding: "3px 10px"
          }}>
            <TrendingUpIcon sx={{ fontSize: 13, color: "#16a34a" }} />
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#16a34a" }}>+48.5% vs last month</span>
          </div>
        </div>

        {/* Mini sparkline bars */}
        <div style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", height: "36px" }}>
            {miniBarData.map((h, i) => (
              <div key={i} style={{
                flex: 1,
                height: `${h}%`,
                borderRadius: "3px 3px 0 0",
                background: i === miniBarData.length - 1
                  ? "linear-gradient(180deg, #1976d2, #42a5f5)"
                  : "#e2e8f0",
                transition: "height 0.3s ease"
              }} />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <span key={i} style={{ flex: 1, textAlign: "center", fontSize: "9px", color: "#94a3b8", fontWeight: 500 }}>{d}</span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #f1f5f9", marginBottom: "16px" }} />

        {/* Bottom row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Button
            size="small"
            variant="contained"
            disableElevation
            sx={{ textTransform: "none", borderRadius: 2, px: 2.5, fontWeight: 600, fontSize: 13 }}
          >
            View Sales
          </Button>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "#94a3b8" }}>
            <BarChartIcon sx={{ fontSize: 14 }} />
            <span>Weekly report</span>
          </div>
        </div>
      </div>

      {/* Star — decorative */}
      <img
        src="https://img.freepik.com/free-vector/3d-metal-star-isolated_1308-117760.jpg?semt=ais_hybrid&w=740&q=80"
        alt="star"
        style={{
          position: "absolute", right: "16px", bottom: "70px",
          height: "70px", pointerEvents: "none", userSelect: "none", opacity: 0.85
        }}
      />
    </div>
  );
};

export default Achievement;


// import { Button, Card, CardContent, Typography, Box } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import React from "react";

// const StarImage = styled("img")({
//   position: "absolute",
//   right: 16,
//   bottom: 10,
//   height: 70,
// //   opacity: 0.3,        // 🔥 subtle background feel
//   pointerEvents: "none"
// });

// const Achievement = () => {
//   return (
//     <Card
//       sx={{
//         position: "relative",
//         borderRadius: 4,
//         boxShadow: 4,
//         overflow: "hidden",
//       }}
//     >
//       <CardContent
//         sx={{
//           p: 3,
//           pr: 10, // 🔥 reserve space for star
//         }}
//       >
//         <Typography variant="h6" sx={{ fontWeight: 600 }}>
//           ShopSphere
//         </Typography>

//         <Typography variant="body2" >
//           Congratulations 🥳
//         </Typography>

//         <Typography variant="h4" sx={{ fontWeight: "bold", my: 2 }}>
//           420.8k
//         </Typography>

//         <Button
//           size="small"
//           variant="contained"
//           sx={{ textTransform: "none", borderRadius: 2 }}
//         >
//           View Sales
//         </Button>
//       </CardContent>

//       <StarImage src="https://img.freepik.com/free-vector/3d-metal-star-isolated_1308-117760.jpg?semt=ais_hybrid&w=740&q=80" />
//     </Card>
//   );
// };

// export default Achievement;