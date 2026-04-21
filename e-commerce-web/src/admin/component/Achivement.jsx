// import { Button, Card, CardContent, Typography } from '@mui/material'
// import { styled } from "@mui/material/styles";
// import React from 'react'

// const   Starimage = styled("img")({
//     right: 36,
//     bottom: 20,
//     height: 98,
//     position: 'absolute'
// })

// const Achivement = () => {
//     return (
//         <Card sx={{ position: "relative" }}>
//             <CardContent>
//                 <Typography variant='h6' sx={{ letterSpacing: '.25px' }}>Shopshpere</Typography>
//                 <Typography variant='body2'>congratulations 🥳</Typography>
//                 <Typography variant='h5' sx={{my:3.1}}>420.8k</Typography>
//                 <Button size='small' variant='contained'>view sales</Button>
//                 <Starimage src='https://img.freepik.com/free-vector/3d-metal-star-isolated_1308-117760.jpg?semt=ais_hybrid&w=740&q=80' />
//             </CardContent>
//         </Card>
//     )
// }

// export default Achivementimport { Button, Card, CardContent, Typography } from "@mui/material";
import { Button, Card, CardContent, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const StarImage = styled("img")({
  position: "absolute",
  right: 16,
  bottom: 10,
  height: 70,
//   opacity: 0.3,        // 🔥 subtle background feel
  pointerEvents: "none"
});

const Achievement = () => {
  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: 4,
        boxShadow: 4,
        overflow: "hidden",
      }}
    >
      <CardContent
        sx={{
          p: 3,
          pr: 10, // 🔥 reserve space for star
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          ShopSphere
        </Typography>

        <Typography variant="body2" >
          Congratulations 🥳
        </Typography>

        <Typography variant="h4" sx={{ fontWeight: "bold", my: 2 }}>
          420.8k
        </Typography>

        <Button
          size="small"
          variant="contained"
          sx={{ textTransform: "none", borderRadius: 2 }}
        >
          View Sales
        </Button>
      </CardContent>

      <StarImage src="https://img.freepik.com/free-vector/3d-metal-star-isolated_1308-117760.jpg?semt=ais_hybrid&w=740&q=80" />
    </Card>
  );
};

export default Achievement;