// import React from 'react'
// import Webstepper from './Webstepper'
// import './Userdetails.css'
// import Grid from '@mui/material/Grid'
// import Box from '@mui/material/Box'
// import Address from './Address'

// const Userdetails = () => {
//   return (
//     <div className="userdetails-root">
//       <div className='stepper-wrap p-6'><Webstepper /></div>
//       <div className="userdetails-container">
//         <Grid container spacing={4}>
//           <Grid className="left-panel border rounded shadow-sm" item xs={12} md={5}>
//             <div className='left-inner p-4'>
//               <Address />
//               <button
//                 type="submit"
//                 className="deliver-btn mt-6 w-full rounded-md bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none"
//               >
//                 Deliver here
//               </button>
//             </div>
//           </Grid>
//           <Grid className="right-panel" item xs={12} md={7}>
//             <Box sx={{ width: '100%' }} className="form-card border rounded shadow-sm">
//               <form>
//                 <Grid container spacing={2} className="p-4">
//                   <Grid item xs={12} sm={6}>
//                     <div className="field">
//                       <label className="field-label">First Name</label>
//                       <input className="field-input" id="firstName" name="firstName" />
//                     </div>
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <div className="field">
//                       <label className="field-label">Last Name</label>
//                       <input className="field-input" id="lastName" name="lastName" />
//                     </div>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <div className="field">
//                       <label className="field-label">Address</label>
//                       <textarea className="field-textarea" id="address" name="address" rows={4} />
//                     </div>
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <div className="field">
//                       <label className="field-label">City</label>
//                       <input className="field-input" id="city" name="city" />
//                     </div>
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <div className="field">
//                       <label className="field-label">State</label>
//                       <input className="field-input" id="state" name="state" />
//                     </div>
//                   </Grid>
//                 </Grid>
//               </form>
//             </Box>
//           </Grid>
//         </Grid>
//       </div>
//     </div >
//   )
// }

// export default Userdetails
import React from 'react'
import Webstepper from './Webstepper'
import './Userdetails.css'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Address from './Address'

const Userdetails = () => {
  return (
    <div className="userdetails-root">
      
      {/* Stepper */}
      <div className='stepper-wrap p-6'>
        <Webstepper />
      </div>

      <div className="userdetails-container px-6 pb-10">
        <Grid container spacing={4}>

          {/* LEFT PANEL */}
          <Grid item xs={12} md={5}>
            <div className="left-panel border rounded shadow-sm h-[420px] overflow-y-auto">

              <div className="p-4 space-y-4">

                {/* Address List */}
                <Address />
                <Address />

                {/* Deliver Button */}
                <button
                  type="submit"
                  className="deliver-btn w-full rounded-md bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700"
                >
                  DELIVER HERE
                </button>

              </div>

            </div>
          </Grid>

          {/* RIGHT PANEL */}
          <Grid item xs={12} md={7}>

            <Box className="form-card border rounded shadow-sm p-6">

              <form>

                <Grid container spacing={3}>

                  <Grid item xs={12} sm={6}>
                    <div className="field">
                      <label className="field-label">First Name *</label>
                      <input className="field-input" name="firstName" />
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <div className="field">
                      <label className="field-label">Last Name *</label>
                      <input className="field-input" name="lastName" />
                    </div>
                  </Grid>

                  <Grid item xs={12}>
                    <div className="field">
                      <label className="field-label">Address *</label>
                      <textarea
                        className="field-textarea"
                        rows={4}
                        name="address"
                      />
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <div className="field">
                      <label className="field-label">City *</label>
                      <input className="field-input" name="city" />
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <div className="field">
                      <label className="field-label">State / Province *</label>
                      <input className="field-input" name="state" />
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <div className="field">
                      <label className="field-label">Zip / Postal Code *</label>
                      <input className="field-input" name="zip" />
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <div className="field">
                      <label className="field-label">Phone Number *</label>
                      <input className="field-input" name="phone" />
                    </div>
                  </Grid>

                </Grid>

              </form>

            </Box>

          </Grid>

        </Grid>
      </div>
    </div>
  )
}

export default Userdetails