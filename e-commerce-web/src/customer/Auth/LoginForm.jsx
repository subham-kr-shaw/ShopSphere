

// import { useState } from 'react'
// import TextField from '@mui/material/TextField'
// import Button from '@mui/material/Button'
// import Typography from '@mui/material/Typography'
// import Box from '@mui/material/Box'
// import { Link } from 'react-router-dom'
// import { login } from '../../state/Auth/Action'
// import { useDispatch } from 'react-redux'

// const LoginForm = () => {
//   const [submitted, setSubmitted] = useState(false)
//   const dispatch=useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const data=new FormData(e.currentTarget);
//     const user={
//       email:data.get("email"),
//       password:data.get("password"),
//     }
//     dispatch(login(user))
//     console.log(user);
//     setSubmitted(true)
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
//       <div className="w-full max-w-md bg-white border border-gray-100 rounded-2xl shadow-sm p-8 sm:p-10">

//         <Typography
//           variant="overline"
//           className="text-blue-600 font-semibold tracking-widest text-xs"
//         >
//           Get started
//         </Typography>

//         <Typography
//           variant="h5"
//           className="text-gray-900 font-semibold mt-1 mb-1"
//         >
//           Create your account
//         </Typography>

//         <Typography
//           variant="body2"
//           className="text-gray-400 mb-7 block"
//         >
//           Join us — it only takes a minute.
//         </Typography>

//         <Box
//           component="form"
//           onSubmit={handleSubmit}
//           noValidate
//           className="mt-6"
//         >
//           {/* Name row — 2 cols on sm+, stacked on mobile */}


//           <div className="mb-4">
//             <TextField
//               required
//               id="email"
//               label="Email address"
//               name="email"
//               type="email"
//               fullWidth
//               size="small"
//               autoComplete="email"
//             />
//           </div>

//           <div className="mb-1">
//             <TextField
//               required
//               id="password"
//               label="Password"
//               name="password"
//               type="password"
//               fullWidth
//               size="small"
//               autoComplete="new-password"
//               helperText="Use at least 8 characters with letters and numbers."
//             />
//           </div>

//           <div className="my-6 border-t border-gray-100" />

//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             disableElevation
//             className={`h-11 rounded-lg text-sm font-semibold normal-case tracking-wide shadow-none transition-colors ${
//               submitted
//                 ? '!bg-green-600 hover:!bg-green-700'
//                 : '!bg-blue-600 hover:!bg-blue-700'
//             }`}
//           >
//             {submitted ? '✓ Sign!' : 'Sign in'}
//           </Button>

//           <p className="text-center text-sm text-gray-400 mt-4">
//             Don't have an account?{' '}
//             <Link to="/signup" className="text-blue-600 font-medium hover:underline">
//               REGISTER
//             </Link>
//           </p>
//         </Box>
//       </div>
//     </div>
//   )
// }

// export default LoginForm;
// import { useState } from 'react'
// import TextField from '@mui/material/TextField'
// import Button from '@mui/material/Button'
// import Typography from '@mui/material/Typography'
// import Box from '@mui/material/Box'
// import { Link } from 'react-router-dom'
// import { login } from '../../state/Auth/Action'
// import { useDispatch, useSelector } from 'react-redux'

// const LoginForm = () => {
//   const [submitted, setSubmitted] = useState(false)
//   const dispatch = useDispatch();
//   const auth = useSelector(store => store.auth);
//   const jwt = localStorage.getItem("jwt");

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const data = new FormData(e.currentTarget);
//     const user = {
//       email: data.get("email"),
//       password: data.get("password"),
//     }
//     dispatch(login(user))
//     setSubmitted(true)
//   }

//   // ✅ Already logged in — show message instead of form
//   if (jwt || auth.jwt) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
//         <div className="w-full max-w-md bg-white border border-gray-100 rounded-2xl shadow-sm p-8 sm:p-10 text-center">
//           <Typography variant="h5" className="text-gray-900 font-semibold mb-2">
//             You're already logged in!
//           </Typography>
//           <Typography variant="body2" className="text-gray-400 mb-6">
//             {auth.user?.email || ""}
//           </Typography>
//           <Link to="/" className="text-blue-600 font-medium hover:underline text-sm">
//             Go to Home →
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
//       <div className="w-full max-w-md bg-white border border-gray-100 rounded-2xl shadow-sm p-8 sm:p-10">

//         <Typography variant="overline" className="text-blue-600 font-semibold tracking-widest text-xs">
//           Welcome back
//         </Typography>

//         <Typography variant="h5" className="text-gray-900 font-semibold mt-1 mb-1">
//           Sign in to your account
//         </Typography>

//         <Typography variant="body2" className="text-gray-400 mb-7 block">
//           Good to see you again.
//         </Typography>

//         {/* ✅ Show backend error message */}
//         {auth.error && (
//           <Typography variant="body2" className="text-red-500 mb-4">
//             {auth.error}
//           </Typography>
//         )}

//         <Box component="form" onSubmit={handleSubmit} noValidate className="mt-6">
//           <div className="mb-4">
//             <TextField
//               required
//               id="email"
//               label="Email address"
//               name="email"
//               type="email"
//               fullWidth
//               size="small"
//               autoComplete="email"
//             />
//           </div>

//           <div className="mb-1">
//             <TextField
//               required
//               id="password"
//               label="Password"
//               name="password"
//               type="password"
//               fullWidth
//               size="small"
//               autoComplete="current-password"
//               helperText="Use at least 8 characters with letters and numbers."
//             />
//           </div>

//           <div className="my-6 border-t border-gray-100" />

//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             disableElevation
//             disabled={auth.isLoading}
//             className={`h-11 rounded-lg text-sm font-semibold normal-case tracking-wide shadow-none transition-colors ${
//               submitted && !auth.error
//                 ? '!bg-green-600 hover:!bg-green-700'
//                 : '!bg-blue-600 hover:!bg-blue-700'
//             }`}
//           >
//             {auth.isLoading ? 'Signing in...' : submitted && !auth.error ? '✓ Signed in!' : 'Sign in'}
//           </Button>

//           <p className="text-center text-sm text-gray-400 mt-4">
//             Don't have an account?{' '}
//             <Link to="/signup" className="text-blue-600 font-medium hover:underline">
//               Register
//             </Link>
//           </p>
//         </Box>
//       </div>
//     </div>
//   )
// }

// export default LoginForm;
// import { useState, useEffect } from 'react'
// import TextField from '@mui/material/TextField'
// import Button from '@mui/material/Button'
// import Typography from '@mui/material/Typography'
// import Box from '@mui/material/Box'
// import { Link, useNavigate } from 'react-router-dom'
// import { login, clearerror } from '../../state/Auth/Action'
// import { useDispatch, useSelector } from 'react-redux'

// const LoginForm = () => {
//   const [submitted, setSubmitted] = useState(false)
//   const dispatch = useDispatch();
//   const auth = useSelector(store => store.auth);
//   const jwt = localStorage.getItem("jwt");
//   const navigate = useNavigate();

//   // ✅ Clear stale errors from previous pages on mount
//   useEffect(() => {
//     dispatch(clearerror())
//   }, [])

//   // ✅ Auto redirect if already logged in
//   useEffect(() => {
//     if (jwt || auth.jwt) {
//       navigate("/")
//     }
//   }, [auth.jwt, jwt])

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const data = new FormData(e.currentTarget);
//     const user = {
//       email: data.get("email"),
//       password: data.get("password"),
//     }
//     dispatch(login(user))
//     setSubmitted(true)
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
//       <div className="w-full max-w-md bg-white border border-gray-100 rounded-2xl shadow-sm p-8 sm:p-10">

//         <Typography variant="overline" className="text-blue-600 font-semibold tracking-widest text-xs">
//           Welcome back
//         </Typography>

//         <Typography variant="h5" className="text-gray-900 font-semibold mt-1 mb-1">
//           Sign in to your account
//         </Typography>

//         <Typography variant="body2" className="text-gray-400 mb-7 block">
//           Good to see you again.
//         </Typography>

//         {/* ✅ Show backend error message */}
//         {auth.error && (
//           <Typography variant="body2" className="text-red-500 mb-4">
//             {auth.error}
//           </Typography>
//         )}

//         <Box component="form" onSubmit={handleSubmit} noValidate className="mt-6">
//           <div className="mb-4">
//             <TextField
//               required
//               id="email"
//               label="Email address"
//               name="email"
//               type="email"
//               fullWidth
//               size="small"
//               autoComplete="email"
//             />
//           </div>

//           <div className="mb-1">
//             <TextField
//               required
//               id="password"
//               label="Password"
//               name="password"
//               type="password"
//               fullWidth
//               size="small"
//               autoComplete="current-password"
//               helperText="Use at least 8 characters with letters and numbers."
//             />
//           </div>

//           <div className="my-6 border-t border-gray-100" />

//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             disableElevation
//             disabled={auth.isLoading}
//             className={`h-11 rounded-lg text-sm font-semibold normal-case tracking-wide shadow-none transition-colors ${
//               submitted && !auth.error
//                 ? '!bg-green-600 hover:!bg-green-700'
//                 : '!bg-blue-600 hover:!bg-blue-700'
//             }`}
//           >
//             {auth.isLoading ? 'Signing in...' : submitted && !auth.error ? '✓ Signed in!' : 'Sign in'}
//           </Button>

//           <p className="text-center text-sm text-gray-400 mt-4">
//             Don't have an account?{' '}
//             <Link to="/signup" className="text-blue-600 font-medium hover:underline">
//               Register
//             </Link>
//           </p>
//         </Box>
//       </div>
//     </div>
//   )
// }

// // export default LoginForm;
// import { useState, useEffect } from 'react'
// import TextField from '@mui/material/TextField'
// import Button from '@mui/material/Button'
// import Typography from '@mui/material/Typography'
// import Box from '@mui/material/Box'
// import { Link, useNavigate } from 'react-router-dom'
// import { login, clearerror } from '../../state/Auth/Action'
// import { useDispatch, useSelector } from 'react-redux'

// const LoginForm = ({ handleClose }) => {
//   const dispatch = useDispatch();
//   const auth = useSelector(store => store.auth);
//   const navigate = useNavigate();

//   // ✅ Clear stale errors when modal opens
//   useEffect(() => {
//     dispatch(clearerror())
//   }, [])

//   // ✅ Close modal and redirect home on successful login
//   useEffect(() => {
//     if (auth.jwt) {
//       if (handleClose) handleClose();
//       navigate("/")
//     }
//   }, [auth.jwt])

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const data = new FormData(e.currentTarget);
//     const user = {
//       email: data.get("email"),
//       password: data.get("password"),
//     }
//     dispatch(login(user))
//   }

//   return (
//     <div className="w-full">
//       <div className="p-8">

//         <Typography variant="overline" className="text-blue-600 font-semibold tracking-widest text-xs">
//           Welcome back
//         </Typography>

//         <Typography variant="h5" className="text-gray-900 font-semibold mt-1 mb-1">
//           Sign in to your account
//         </Typography>

//         <Typography variant="body2" className="text-gray-400 mb-4 block">
//           Good to see you again.
//         </Typography>

//         {/* ✅ Show error only when not loading */}
//         {auth.error && !auth.isLoading && (
//           <Typography variant="body2" className="text-red-500 mb-4">
//             {auth.error}
//           </Typography>
//         )}

//         <Box component="form" onSubmit={handleSubmit} noValidate>
//           <div className="mb-4">
//             <TextField
//               required
//               id="email"
//               label="Email address"
//               name="email"
//               type="email"
//               fullWidth
//               size="small"
//               autoComplete="email"
//             />
//           </div>

//           <div className="mb-1">
//             <TextField
//               required
//               id="password"
//               label="Password"
//               name="password"
//               type="password"
//               fullWidth
//               size="small"
//               autoComplete="current-password"
//               helperText="Use at least 8 characters with letters and numbers."
//             />
//           </div>

//           <div className="my-5 border-t border-gray-100" />

//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             disableElevation
//             disabled={auth.isLoading}
//             className="h-11 rounded-lg text-sm font-semibold normal-case tracking-wide shadow-none !bg-blue-600 hover:!bg-blue-700"
//           >
//             {auth.isLoading ? 'Signing in...' : 'Sign in'}
//           </Button>

//           <p className="text-center text-sm text-gray-400 mt-4">
//             Don't have an account?{' '}
//             <Link to="/signup" className="text-blue-600 font-medium hover:underline">
//               Register
//             </Link>
//           </p>
//         </Box>
//       </div>
//     </div>
//   )
// }

// export default LoginForm;
// import { useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { login, clearerror } from '../../state/Auth/Action'
// import { useDispatch, useSelector } from 'react-redux'

// const LoginForm = ({ handleClose }) => {
//   const dispatch = useDispatch();
//   const auth = useSelector(store => store.auth);
//   const navigate = useNavigate();

//   // ✅ Always clear error when this form mounts — prevents register errors showing here
//   useEffect(() => {
//     dispatch(clearerror())
//   }, [])

//   useEffect(() => {
//     if (auth.jwt) {
//       if (handleClose) handleClose();
//       navigate("/")
//     }
//   }, [auth.jwt])

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const data = new FormData(e.currentTarget);
//     dispatch(login({
//       email: data.get("email"),
//       password: data.get("password"),
//     }))
//   }

//   return (
//     <div className="w-full bg-white rounded-2xl overflow-hidden">
//       {/* Top accent bar */}
//       <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

//       <div className="px-8 pt-8 pb-10">
//         {/* Header */}
//         <div className="mb-8">
//           <span className="inline-block text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase mb-2">
//             Welcome back
//           </span>
//           <h2 className="text-2xl font-bold text-gray-900 leading-tight">
//             Sign in to your account
//           </h2>
//           <p className="text-sm text-gray-400 mt-1">
//             Good to see you again.
//           </p>
//         </div>

//         {/* ✅ Error — only shows login errors, never register errors */}
//         {auth.error && !auth.isLoading && (
//           <div className="flex items-start gap-2 bg-red-50 border border-red-100 rounded-lg px-4 py-3 mb-6">
//             <span className="text-red-500 text-xs mt-0.5">⚠</span>
//             <p className="text-red-600 text-sm">{auth.error}</p>
//           </div>
//         )}

//         <form onSubmit={handleSubmit} noValidate className="space-y-4">
//           {/* Email */}
//           <div>
//             <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
//               Email address
//             </label>
//             <input
//               required
//               name="email"
//               type="email"
//               autoComplete="email"
//               placeholder="you@example.com"
//               className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
//               Password
//             </label>
//             <input
//               required
//               name="password"
//               type="password"
//               autoComplete="current-password"
//               placeholder="••••••••"
//               className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
//             />
//             <p className="text-xs text-gray-400 mt-1.5">
//               Use at least 8 characters with letters and numbers.
//             </p>
//           </div>

//           <div className="pt-2">
//             <button
//               type="submit"
//               disabled={auth.isLoading}
//               className="w-full h-11 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white text-sm font-semibold tracking-wide transition-colors duration-200 shadow-sm shadow-indigo-200"
//             >
//               {auth.isLoading ? (
//                 <span className="flex items-center justify-center gap-2">
//                   <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
//                   </svg>
//                   Signing in...
//                 </span>
//               ) : 'Sign in'}
//             </button>
//           </div>

//           <p className="text-center text-sm text-gray-400 pt-1">
//             Don't have an account?{' '}
//             <Link to="/signup" className="text-indigo-600 font-semibold hover:underline">
//               Register
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default LoginForm;

import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login, clearerror } from '../../state/Auth/Action'
import { useDispatch, useSelector } from 'react-redux'

const LoginForm = ({ handleClose }) => {
  const dispatch = useDispatch();
  const auth = useSelector(store => store.auth);
  const navigate = useNavigate();

  // ✅ Always clear error when this form mounts — prevents register errors showing here
  useEffect(() => {
    dispatch(clearerror())
  }, [])

  useEffect(() => {
    if (auth.jwt) {
      if (handleClose) handleClose();
      navigate("/")
    }
  }, [auth.jwt])

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget);
    dispatch(login({
      email: data.get("email"),
      password: data.get("password"),
    }))
  }

  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

      <div className="px-8 pt-8 pb-10">
        {/* Header */}
        <div className="mb-8">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase mb-2">
            Welcome back
          </span>
          <h2 className="text-2xl font-bold text-gray-900 leading-tight">
            Sign in to your account
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Good to see you again.
          </p>
        </div>

        {/* ✅ Error — only shows login errors, never register errors */}
        {auth.error && !auth.isLoading && (
          <div className="flex items-start gap-2 bg-red-50 border border-red-100 rounded-lg px-4 py-3 mb-6">
            <span className="text-red-500 text-xs mt-0.5">⚠</span>
            <p className="text-red-600 text-sm">{auth.error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
              Email address
            </label>
            <input
              required
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
              Password
            </label>
            <input
              required
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
            />
            <p className="text-xs text-gray-400 mt-1.5">
              Use at least 8 characters with letters and numbers.
            </p>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={auth.isLoading}
              className="w-full h-11 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white text-sm font-semibold tracking-wide transition-colors duration-200 shadow-sm shadow-indigo-200"
            >
              {auth.isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Signing in...
                </span>
              ) : 'Sign in'}
            </button>
          </div>

          <p className="text-center text-sm text-gray-400 pt-1">
            Don't have an account?{' '}
            <Link to="/signup" className="text-indigo-600 font-semibold hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default LoginForm;