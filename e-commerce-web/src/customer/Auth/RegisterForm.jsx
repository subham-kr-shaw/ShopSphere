

import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getuser, register } from '../../state/Auth/Action'
import { store } from '../../state/store'

const RegisterForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const {auth}=useSelector(store=>store);

  useEffect(()=>{
    if(jwt){
      dispatch(getuser());
    }
  },[jwt,auth.jwt])

  const handleSubmit = (e) => {
    e.preventDefault()
    const data=new FormData(e.currentTarget);
    const user={
      firstname:data.get("firstname"),
      lastname:data.get("lastname"),
      email:data.get("email"),
      password:data.get("password"),
    }
    dispatch(register)
    console.log(user);
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-md bg-white border border-gray-100 rounded-2xl shadow-sm p-8 sm:p-10">

        <Typography
          variant="overline"
          className="text-blue-600 font-semibold tracking-widest text-xs"
        >
          Get started
        </Typography>

        <Typography
          variant="h5"
          className="text-gray-900 font-semibold mt-1 mb-1"
        >
          Create your account
        </Typography>

        <Typography
          variant="body2"
          className="text-gray-400 mb-7 block"
        >
          Join us — it only takes a minute.
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          className="mt-6"
        >
          {/* Name row — 2 cols on sm+, stacked on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <TextField
              required
              id="firstname"
              label="First name"
              name="firstname"
              fullWidth
              size="small"
              autoComplete="given-name"
            />
            <TextField
              required
              id="lastname"
              label="Last name"
              name="lastname"
              fullWidth
              size="small"
              autoComplete="family-name"
            />
          </div>

          <div className="mb-4">
            <TextField
              required
              id="email"
              label="Email address"
              name="email"
              type="email"
              fullWidth
              size="small"
              autoComplete="email"
            />
          </div>

          <div className="mb-1">
            <TextField
              required
              id="password"
              label="Password"
              name="password"
              type="password"
              fullWidth
              size="small"
              autoComplete="new-password"
              helperText="Use at least 8 characters with letters and numbers."
            />
          </div>

          <div className="my-6 border-t border-gray-100" />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disableElevation
            className={`h-11 rounded-lg text-sm font-semibold normal-case tracking-wide shadow-none transition-colors ${
              submitted
                ? '!bg-green-600 hover:!bg-green-700'
                : '!bg-blue-600 hover:!bg-blue-700'
            }`}
          >
            {submitted ? '✓ Account created!' : 'Create account'}
          </Button>

          <p className="text-center text-sm text-gray-400 mt-4">
            Already have an account?{' '}
            <Link to="/signin" className="text-blue-600 font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </Box>
      </div>
    </div>
  )
}

export default RegisterForm