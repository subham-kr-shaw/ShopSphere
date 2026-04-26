import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login, clearerror } from '../../state/Auth/Action'
import { useDispatch, useSelector } from 'react-redux'

const LoginForm = ({ handleClose }) => {
    const dispatch = useDispatch();
    const auth = useSelector(store => store.auth);
    const navigate = useNavigate();
    // ✅ user picks their entry mode before submitting
    const [entrymode, setEntrymode] = useState(null); // null | 'customer' | 'admin'

    useEffect(() => { dispatch(clearerror()) }, []);

    useEffect(() => {
        if (auth.jwt) {
            if (handleClose) handleClose();
            if (auth.role === "admin") {
                navigate("/admin");
            } else {
                navigate("/");
            }
        }
    }, [auth.jwt]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        dispatch(login({
            email: data.get("email"),
            password: data.get("password"),
            // ✅ pass chosen entry mode so backend/frontend can verify
            entrymode,
        }));
    };

    return (
        <div className="w-full bg-white rounded-2xl overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

            <div className="px-8 pt-8 pb-10">
                <div className="mb-8">
                    <span className="inline-block text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase mb-2">
                        Welcome back
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                        Sign in to your account
                    </h2>
                    <p className="text-sm text-gray-400 mt-1">Good to see you again.</p>
                </div>

                {/* ✅ Entry mode selector */}
                <div className="mb-6">
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-3">
                        Sign in as
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            type="button"
                            onClick={() => setEntrymode('customer')}
                            className={`py-2.5 rounded-lg border-2 text-sm font-semibold transition-all ${
                                entrymode === 'customer'
                                    ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                                    : 'border-gray-200 text-gray-500 hover:border-gray-300'
                            }`}
                        >
                            🛍️ Customer
                        </button>
                        <button
                            type="button"
                            onClick={() => setEntrymode('admin')}
                            className={`py-2.5 rounded-lg border-2 text-sm font-semibold transition-all ${
                                entrymode === 'admin'
                                    ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                                    : 'border-gray-200 text-gray-500 hover:border-gray-300'
                            }`}
                        >
                            ⚙️ Admin
                        </button>
                    </div>
                </div>

                {auth.error && !auth.isLoading && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-100 rounded-lg px-4 py-3 mb-6">
                        <span className="text-red-500 text-xs mt-0.5">⚠</span>
                        <p className="text-red-600 text-sm">{auth.error}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
                            Email address
                        </label>
                        <input
                            required name="email" type="email" autoComplete="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
                            Password
                        </label>
                        <input
                            required name="password" type="password" autoComplete="current-password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                        />
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={auth.isLoading || !entrymode}  // ✅ disabled until mode selected
                            className="w-full h-11 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed text-white text-sm font-semibold tracking-wide transition-colors duration-200"
                        >
                            {auth.isLoading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                                    </svg>
                                    Signing in...
                                </span>
                            ) : !entrymode
                                ? 'Select a role above first'
                                : `Sign in as ${entrymode}`
                            }
                        </button>
                    </div>

                    <p className="text-center text-sm text-gray-400 pt-1">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-indigo-600 font-semibold hover:underline">Register</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;

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

//   // useEffect(() => {
//   //   if (auth.jwt) {
//   //     if (handleClose) handleClose();
//   //     navigate("/")
//   //   }
//   // }, [auth.jwt])
//   useEffect(() => {
//     if (auth.jwt) {
//         if (handleClose) handleClose();
//         // ✅ admin goes to admin panel, customer goes to home
//         if (auth.role === "admin") {
//             navigate("/admin");
//         } else {
//             navigate("/");
//         }
//     }
// }, [auth.jwt]);

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