// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';

// const steps = [
//   'Placed',
//   'Order confirmed',
//   'Shipped',
//   'Out of delivery',
//   'Delivered',
// ];

// export default function Ordertracker() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <div className='flex' style={{ flexDirection: isMobile ? 'column' : 'row' }}>
//       <Box sx={{ width: '100%', overflowX: isMobile ? 'visible' : { xs: 'auto', sm: 'visible' } }}>
//         <Stepper
//           activeStep={4}
//           alternativeLabel={!isMobile}
//           orientation={isMobile ? 'vertical' : 'horizontal'}
//           sx={{
//             minWidth: isMobile ? '100%' : { xs: '600px', sm: '0' },
//             padding: isMobile ? '8px 0' : '0',
//           }}
//         >
//           {steps.map((label) => (
//             <Step key={label}>
//               <StepLabel
//                 sx={{
//                   color: '#9155FD',
//                   fontSize: { xs: '12px', sm: '44px' },
//                   whiteSpace: 'normal',
//                   wordBreak: 'break-word',
//                   maxWidth: isMobile ? '220px' : 'none',
//                 }}
//               >
//                 {label}
//               </StepLabel>
//             </Step>
//           ))}
//         </Stepper>
//       </Box>
//       <Button sx={{ color: '#9155FD', alignSelf: isMobile ? 'flex-start' : 'center', marginTop: isMobile ? '8px' : 0 }}>
//         cancel order
//       </Button>
//     </div>
//   );
// }
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const steps = ['Placed', 'Confirmed', 'Shipped', 'Out for Delivery', 'Delivered'];

// ✅ Map orderstatus string → stepper active index
const statusToStep = {
    PENDING: 0,
    PLACED: 0,
    CONFIRMED: 1,
    SHIPPED: 2,
    OUT_FOR_DELIVERY: 3,
    DELIVERED: 4,
    CANCELLED: -1,
};

export default function Ordertracker({ orderstatus }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const activestep = statusToStep[orderstatus?.toUpperCase()] ?? 0;
    const iscancelled = orderstatus?.toUpperCase() === 'CANCELLED';

    return (
        <div className='bg-white border border-gray-200 rounded-lg p-4 shadow-sm'>
            <h2 className='text-sm font-semibold text-gray-700 mb-4'>
                Order Status:
                <span className={`ml-2 capitalize font-bold ${iscancelled ? 'text-red-500' : 'text-indigo-600'}`}>
                    {orderstatus?.toLowerCase() || 'pending'}
                </span>
            </h2>

            {iscancelled ? (
                <p className='text-red-500 text-sm font-medium'>This order has been cancelled.</p>
            ) : (
                <Box sx={{ width: '100%' }}>
                    <Stepper
                        activeStep={activestep}
                        alternativeLabel={!isMobile}
                        orientation={isMobile ? 'vertical' : 'horizontal'}
                        sx={{
                            '& .MuiStepLabel-label': { fontSize: { xs: '11px', sm: '13px' } },
                            '& .MuiStepIcon-root.Mui-active': { color: '#9155FD' },
                            '& .MuiStepIcon-root.Mui-completed': { color: '#9155FD' },
                        }}
                    >
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            )}
        </div>
    );
}
