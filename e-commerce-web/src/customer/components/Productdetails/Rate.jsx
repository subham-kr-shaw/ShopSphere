import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import StarIcon from '@mui/icons-material/Star';

const bars = [
  { stars: 5, value: 78, color: '#22C55E' },
  { stars: 4, value: 60, color: '#60A5FA' },
  { stars: 3, value: 35, color: '#FBBF24' },
  { stars: 2, value: 12, color: '#EF4444' },
];

const Rate = () => {
  return (
    <div className="w-full max-w-xl flex flex-col gap-3 px-4">
      {bars.map((bar, idx) => (
        <Box
          key={idx}
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Box sx={{ minWidth: 60, display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <StarIcon sx={{ color: bar.color, fontSize: 16 }} />
            <Box component="span" sx={{ fontSize: 13 }}>{bar.stars}</Box>
          </Box>

          <LinearProgress
            variant="determinate"
            value={bar.value}
            sx={{
              flexGrow: 1,
              height: 8,
              borderRadius: 6,
              bgcolor: 'grey.300',
              '& .MuiLinearProgress-bar': { backgroundColor: bar.color },
            }}
          />

          <Box sx={{ minWidth: 40, textAlign: 'right', fontSize: 13, color: 'text.secondary' }}>
            {bar.value}%
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default Rate;



    // <div className="w-full max-w-xl flex flex-col gap-3 justify-center items-center px-4">
    //   {bars.map((bar, idx) => (
    //     <Box key={idx} sx={{ width: '100%' }}>
    //       <LinearProgress
    //         variant="determinate"
    //         value={bar.value}
    //         sx={{
    //           height: 5,
    //           borderRadius: 7,
    //           bgcolor: 'grey.300',
    //           '& .MuiLinearProgress-bar': { backgroundColor: bar.color },
    //         }}
    //       />
    //     </Box>
    //   ))}
    // </div>