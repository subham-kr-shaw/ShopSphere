
// import { useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { register, clearerror } from '../../state/Auth/Action'

// const RegisterForm = ({ handleClose }) => {
//   const dispatch = useDispatch();
//   const auth = useSelector(store => store.auth);
//   const navigate = useNavigate();

//   // ✅ Clear stale errors when this form mounts
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
//     dispatch(register({
//       firstname: data.get("firstname"),
//       lastname: data.get("lastname"),
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
//             Get started
//           </span>
//           <h2 className="text-2xl font-bold text-gray-900 leading-tight">
//             Create your account
//           </h2>
//           <p className="text-sm text-gray-400 mt-1">
//             Join us — it only takes a minute.
//           </p>
//         </div>

//         {/* ✅ Error */}
//         {auth.error && !auth.isLoading && (
//           <div className="flex items-start gap-2 bg-red-50 border border-red-100 rounded-lg px-4 py-3 mb-6">
//             <span className="text-red-500 text-xs mt-0.5">⚠</span>
//             <p className="text-red-600 text-sm">{auth.error}</p>
//           </div>
//         )}

//         <form onSubmit={handleSubmit} noValidate className="space-y-4">
//           {/* Name row */}
//           <div className="grid grid-cols-2 gap-3">
//             <div>
//               <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
//                 First name
//               </label>
//               <input
//                 required
//                 name="firstname"
//                 type="text"
//                 autoComplete="given-name"
//                 placeholder="John"
//                 className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
//               />
//             </div>
//             <div>
//               <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
//                 Last name
//               </label>
//               <input
//                 required
//                 name="lastname"
//                 type="text"
//                 autoComplete="family-name"
//                 placeholder="Doe"
//                 className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
//               />
//             </div>
//           </div>

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
//               autoComplete="new-password"
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
//                   Creating...
//                 </span>
//               ) : 'Create account'}
//             </button>
//           </div>

//           <p className="text-center text-sm text-gray-400 pt-1">
//             Already have an account?{' '}
//             <Link to="/signin" className="text-indigo-600 font-semibold hover:underline">
//               Sign in
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default RegisterForm

import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register, clearerror } from '../../state/Auth/Action'

const RegisterForm = ({ handleClose }) => {
    const dispatch = useDispatch();
    const auth = useSelector(store => store.auth);
    const navigate = useNavigate();

    // ✅ multi-step state
    const [step, setStep] = useState(1);          // 1 = form, 2 = role picker (admin only)
    const [formdata, setFormdata] = useState(null); // hold form data between steps
    const [entrymode, setEntrymode] = useState('customer');

    useEffect(() => { dispatch(clearerror()) }, []);

    useEffect(() => {
        if (auth.jwt) {
            if (handleClose) handleClose();
            // ✅ after register, redirect based on chosen entry mode
            if (entrymode === 'admin' && auth.role === 'admin') {
                navigate("/admin");
            } else {
                navigate("/");
            }
        }
    }, [auth.jwt]);

    // ✅ Step 1 — collect form data and check email against known admin pattern
    const handlestep1 = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const collected = {
            firstname: data.get("firstname"),
            lastname: data.get("lastname"),
            email: data.get("email"),
            password: data.get("password"),
        };
        setFormdata(collected);

        // ✅ We can't know if they're admin before registering
        // So we always show role picker — backend will validate
        setStep(2);
    };

    // ✅ Step 2 — final submit with chosen entry mode
    const handlefinalsubmit = () => {
        dispatch(register({ ...formdata, entrymode }));
    };

    return (
        <div className="w-full bg-white rounded-2xl overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

            <div className="px-8 pt-8 pb-10">

                {step === 1 ? (
                    <>
                        <div className="mb-8">
                            <span className="inline-block text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase mb-2">
                                Get started
                            </span>
                            <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                                Create your account
                            </h2>
                            <p className="text-sm text-gray-400 mt-1">Join us — it only takes a minute.</p>
                        </div>

                        {auth.error && !auth.isLoading && (
                            <div className="flex items-start gap-2 bg-red-50 border border-red-100 rounded-lg px-4 py-3 mb-6">
                                <span className="text-red-500 text-xs mt-0.5">⚠</span>
                                <p className="text-red-600 text-sm">{auth.error}</p>
                            </div>
                        )}

                        <form onSubmit={handlestep1} noValidate className="space-y-4">
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">First name</label>
                                    <input required name="firstname" type="text" autoComplete="given-name" placeholder="John"
                                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">Last name</label>
                                    <input required name="lastname" type="text" autoComplete="family-name" placeholder="Doe"
                                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">Email address</label>
                                <input required name="email" type="email" autoComplete="email" placeholder="you@example.com"
                                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">Password</label>
                                <input required name="password" type="password" autoComplete="new-password" placeholder="••••••••"
                                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
                                />
                                <p className="text-xs text-gray-400 mt-1.5">At least 8 characters.</p>
                            </div>

                            <div className="pt-2">
                                <button type="submit"
                                    className="w-full h-11 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold tracking-wide transition-colors"
                                >
                                    Continue →
                                </button>
                            </div>

                            <p className="text-center text-sm text-gray-400 pt-1">
                                Already have an account?{' '}
                                <Link to="/signin" className="text-indigo-600 font-semibold hover:underline">Sign in</Link>
                            </p>
                        </form>
                    </>
                ) : (
                    <>
                        {/* ✅ Step 2 — role picker */}
                        <div className="mb-8">
                            <span className="inline-block text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase mb-2">
                                Almost there
                            </span>
                            <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                                How will you use this account?
                            </h2>
                            <p className="text-sm text-gray-400 mt-1">
                                Choose your entry mode. Admin access requires an admin account.
                            </p>
                        </div>

                        {auth.error && !auth.isLoading && (
                            <div className="flex items-start gap-2 bg-red-50 border border-red-100 rounded-lg px-4 py-3 mb-6">
                                <span className="text-red-500 text-xs mt-0.5">⚠</span>
                                <p className="text-red-600 text-sm">{auth.error}</p>
                            </div>
                        )}

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <button
                                type="button"
                                onClick={() => setEntrymode('customer')}
                                className={`flex flex-col items-center gap-2 p-5 rounded-xl border-2 transition-all ${
                                    entrymode === 'customer'
                                        ? 'border-indigo-600 bg-indigo-50'
                                        : 'border-gray-200 hover:border-gray-300'
                                }`}
                            >
                                <span className="text-3xl">🛍️</span>
                                <span className="text-sm font-semibold text-gray-800">Customer</span>
                                <span className="text-xs text-gray-400 text-center">Browse and shop products</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setEntrymode('admin')}
                                className={`flex flex-col items-center gap-2 p-5 rounded-xl border-2 transition-all ${
                                    entrymode === 'admin'
                                        ? 'border-indigo-600 bg-indigo-50'
                                        : 'border-gray-200 hover:border-gray-300'
                                }`}
                            >
                                <span className="text-3xl">⚙️</span>
                                <span className="text-sm font-semibold text-gray-800">Admin</span>
                                <span className="text-xs text-gray-400 text-center">Manage products & orders</span>
                            </button>
                        </div>

                        {entrymode === 'admin' && (
                            <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-4">
                                <p className="text-xs text-amber-700">
                                    ⚠ Admin access requires your account to have admin privileges. If not, you'll be signed in as a customer.
                                </p>
                            </div>
                        )}

                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={() => setStep(1)}
                                className="flex-1 h-11 rounded-lg border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition-colors"
                            >
                                ← Back
                            </button>
                            <button
                                type="button"
                                onClick={handlefinalsubmit}
                                disabled={auth.isLoading}
                                className="flex-1 h-11 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white text-sm font-semibold tracking-wide transition-colors"
                            >
                                {auth.isLoading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                                        </svg>
                                        Creating...
                                    </span>
                                ) : `Create as ${entrymode}`}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default RegisterForm;