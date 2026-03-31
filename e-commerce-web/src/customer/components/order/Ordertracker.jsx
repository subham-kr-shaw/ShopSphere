import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const steps = [
  'Placed',
  'Order confirmed',
  'Shipped',
  'Out of delivery',
  'Delivered',
];

export default function Ordertracker() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className='flex' style={{ flexDirection: isMobile ? 'column' : 'row' }}>
      <Box sx={{ width: '100%', overflowX: isMobile ? 'visible' : { xs: 'auto', sm: 'visible' } }}>
        <Stepper
          activeStep={4}
          alternativeLabel={!isMobile}
          orientation={isMobile ? 'vertical' : 'horizontal'}
          sx={{
            minWidth: isMobile ? '100%' : { xs: '600px', sm: '0' },
            padding: isMobile ? '8px 0' : '0',
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel
                sx={{
                  color: '#9155FD',
                  fontSize: { xs: '12px', sm: '44px' },
                  whiteSpace: 'normal',
                  wordBreak: 'break-word',
                  maxWidth: isMobile ? '220px' : 'none',
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Button sx={{ color: '#9155FD', alignSelf: isMobile ? 'flex-start' : 'center', marginTop: isMobile ? '8px' : 0 }}>
        cancel order
      </Button>
    </div>
  );
}
