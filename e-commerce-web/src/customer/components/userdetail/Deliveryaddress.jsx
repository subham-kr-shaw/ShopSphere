// import Grid from '@mui/material/Grid'
// import React from 'react'
// import Address from './Address'
// import Button from '@mui/material/Button'
// import Box from '@mui/material/Box'
// import TextField from '@mui/material/TextField'

// const Deliveryaddress = () => {
//   return (
//     <div>
//       <Grid container spacing={4}>
//         <Grid lg={5} xs={12} className="border rounded-e-md h-[30.5rem] overflow-y-scroll">
//           <Address />
//           <button
//             type="submit"
//             className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white homesection hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
//           >
//             DELIVERED HERE
//           </button>
//         </Grid>
//         <Grid lg={7} xs={12}>
//           <Box className="border rounded-s-md shadow-md p-5">
//             <form>
//               <Grid container spacing={3}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id='firstname'
//                     name='firstname'
//                     label='firstname'
//                     fullWidth
//                     autoComplete='given-name'
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id='lastname'
//                     name='lastname'
//                     label='lastname'
//                     fullWidth
//                     autoComplete='given-name'
//                   />
//                 </Grid>


//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id='lastname'
//                   name='lastname'
//                   label='lastname'
//                   fullWidth
//                   autoComplete='given-name'
//                   multiline
//                   rows={4}
//                 />
//               </Grid>
//               <Grid spacing={3}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id='lastname'
//                     name='lastname'
//                     label='lastname'
//                     fullWidth
//                     autoComplete='given-name'
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id='lastname'
//                     name='lastname'
//                     label='lastname'
//                     fullWidth
//                     autoComplete='given-name'
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id='lastname'
//                     name='lastname'
//                     label='lastname'
//                     fullWidth
//                     autoComplete='given-name'
//                   />
//                 </Grid>
//               </Grid>
//             </form>
//           </Box>
//         </Grid>
//       </Grid>
//     </div>
//   )
// }

// export default Deliveryaddress
import React from 'react'
import Address from './Address'
import TextField from '@mui/material/TextField'

const Deliveryaddress = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start px-4 py-6">

      {/* Left - Address Card */}
      <div className="w-full md:w-[35%] border border-gray-300 rounded-lg h-[30.5rem] overflow-y-scroll p-4 flex-shrink-0">
        <Address />
        <button
          type="button"
          className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg tracking-widest uppercase cursor-pointer"
        >
          DELIVER HERE
        </button>
      </div>

      {/* Right - Delivery Form */}
      <div className="w-full md:flex-1 border border-gray-300 rounded-lg shadow-md p-6">
        <form className="flex flex-col gap-4">

          {/* Row 1: First Name + Last Name */}
          <div className="flex gap-4">
            <div className="flex-1">
              <TextField
                required
                id="firstname"
                name="firstname"
                label="First Name"
                fullWidth
                autoComplete="given-name"
              />
            </div>
            <div className="flex-1">
              <TextField
                required
                id="lastname"
                name="lastname"
                label="Last Name"
                fullWidth
                autoComplete="family-name"
              />
            </div>
          </div>

          {/* Row 2: Address full width */}
          <div>
            <TextField
              required
              id="address"
              name="address"
              label="Address"
              fullWidth
              autoComplete="street-address"
              multiline
              rows={4}
            />
          </div>

          {/* Row 3: City + State */}
          <div className="flex gap-4">
            <div className="flex-1">
              <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="address-level2"
              />
            </div>
            <div className="flex-1">
              <TextField
                required
                id="state"
                name="state"
                label="State/Province/Region"
                fullWidth
              />
            </div>
          </div>

          {/* Row 4: Zip + Phone */}
          <div className="flex gap-4">
            <div className="flex-1">
              <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Postal Code"
                fullWidth
                autoComplete="postal-code"
              />
            </div>
            <div className="flex-1">
              <TextField
                required
                id="phone"
                name="phone"
                label="Phone Number"
                fullWidth
                autoComplete="tel"
              />
            </div>
          </div>

          {/* Row 5: Deliver Here button */}
          <div>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-10 rounded-lg tracking-widest uppercase cursor-pointer"
            >
              DELIVER HERE
            </button>
          </div>

        </form>
      </div>

    </div>
  )
}

export default Deliveryaddress