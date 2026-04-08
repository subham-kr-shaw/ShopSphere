// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import RegisterForm from './RegisterForm';
// import { useLocation } from 'react-router-dom';
// import LoginForm from './LoginForm';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   outline:'none',
//   boxShadow: 24,
//   p: 4,
// };

// export default function AuthModal({handleClose,open,mode}) {
//    const location=useLocation();
//   return (
//     <div>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography> */}
//           {location.pathname==='/login'?<LoginForm/>:<RegisterForm/>}
//         </Box>
//       </Modal>
//     </div>
//   );
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { useLocation } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: 'none',
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ handleClose, open, mode }) {
   const location=useLocation();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          {mode==='/signin'||location.pathname==='/signin'? <LoginForm />:<RegisterForm /> }
        </Box>
      </Modal>
    </div>
  );
}