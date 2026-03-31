// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { useLocation } from "react-router-dom";
// import Deliveryaddress from './Deliveryaddress';
// import Ordersummary from './Ordersummary';

// const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment '];

// export default function Webstepper() {
//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };
//   const location = useLocation();
//   const querysearch = new URLSearchParams(location.search);
//   const step = querysearch.get("step");

//   return (
//     <div className='px-10 lg:px-20'>
//       <Box sx={{ width: '100%' }}>
//         <Stepper activeStep={step}>
//           {steps.map((label, index) => {
//             const stepProps = {};
//             const labelProps = {};
//             return (
//               <Step key={label} {...stepProps}>
//                 <StepLabel {...labelProps}>{label}</StepLabel>
//               </Step>
//             );
//           })}
//         </Stepper>
//         {activeStep === steps.length ? (
//           <React.Fragment>
//             <Typography sx={{ mt: 2, mb: 1 }}>
//               All steps completed - you&apos;re finished
//             </Typography>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//               <Button
//                 color="inherit"
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 sx={{ mr: 1 }}
//               >
//                 Back
//               </Button>
//               {/* // <Box sx={{ flex: '1 1 auto' }} />
//             // <Button onClick={handleNext}>
//             //   {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//             // </Button>  */}
//             </Box>
//             <div>
//               {step == 2 ? <Deliveryaddress /> : <Ordersummary />}
//             </div>
//           </React.Fragment>
//         )}
//       </Box>
//     </div>
//   );
// }
import * as React from 'react';
import { useLocation } from "react-router-dom";
import Deliveryaddress from './Deliveryaddress';
import Ordersummary from './Ordersummary';
import Payment from './Payment';



export default function Webstepper() {
  const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];
  const location = useLocation();
  const querysearch = new URLSearchParams(location.search);
  const step = Number(querysearch.get("step"));

  // step=1 → Login active (0 completed)
  // step=2 → Delivery Address active (1 completed)
  // step=3 → Order Summary active (2 completed)
  // step=4 → Payment active (3 completed)
  const activeIndex = step - 1;

  return (
    <div className='px-4 sm:px-10 lg:px-20 py-4'>

      {/* Stepper */}
      <div className='flex flex-col w-full'>

        {/* Top row: circles + lines only */}
        <div className='flex items-center w-full'>
          {steps.map((label, index) => {
            const isCompleted = index < activeIndex;
            const isActive = index === activeIndex;

            return (
              <div key={label} className='flex items-center flex-1 last:flex-none'>

                {/* Circle */}
                <div
                  className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0
                    ${isCompleted || isActive
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                    }`}
                >
                  {isCompleted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-[2px] mx-1 sm:mx-2 
                    ${isCompleted ? 'bg-indigo-600' : 'bg-gray-200'}`}
                  />
                )}

              </div>
            );
          })}
        </div>

        {/* Bottom row: labels only */}
        <div className='flex items-start w-full mt-1'>
          {steps.map((label, index) => {
            const isCompleted = index < activeIndex;
            const isActive = index === activeIndex;

            return (
              <div key={label} className='flex-1 last:flex-none flex justify-center'>
                <span className={`hidden sm:block text-xs text-center w-full leading-tight px-1
                  ${isCompleted || isActive ? 'text-indigo-600 font-semibold' : 'text-gray-400'}`}>
                  {label}
                </span>
                {isActive && (
                  <span className='block sm:hidden text-xs text-indigo-600 font-semibold text-center leading-tight'>
                    {label}
                  </span>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* Step Content */}
      <div className='mt-4 sm:mt-6'>
        {step == 2 && <Deliveryaddress />}
        {step == 3 && <Ordersummary />}
        {step == 4 && < Payment/>}
      </div>

    </div>
  );
}


