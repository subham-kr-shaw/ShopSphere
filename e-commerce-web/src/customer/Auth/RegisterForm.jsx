
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register, clearerror } from '../../state/Auth/Action'

const RegisterForm = ({ handleClose }) => {
  const dispatch = useDispatch();
  const auth = useSelector(store => store.auth);
  const navigate = useNavigate();

  // ✅ Clear stale errors when this form mounts
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
    dispatch(register({
      firstname: data.get("firstname"),
      lastname: data.get("lastname"),
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
            Get started
          </span>
          <h2 className="text-2xl font-bold text-gray-900 leading-tight">
            Create your account
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Join us — it only takes a minute.
          </p>
        </div>

        {/* ✅ Error */}
        {auth.error && !auth.isLoading && (
          <div className="flex items-start gap-2 bg-red-50 border border-red-100 rounded-lg px-4 py-3 mb-6">
            <span className="text-red-500 text-xs mt-0.5">⚠</span>
            <p className="text-red-600 text-sm">{auth.error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Name row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
                First name
              </label>
              <input
                required
                name="firstname"
                type="text"
                autoComplete="given-name"
                placeholder="John"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
                Last name
              </label>
              <input
                required
                name="lastname"
                type="text"
                autoComplete="family-name"
                placeholder="Doe"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
              />
            </div>
          </div>

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
              autoComplete="new-password"
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
                  Creating...
                </span>
              ) : 'Create account'}
            </button>
          </div>

          <p className="text-center text-sm text-gray-400 pt-1">
            Already have an account?{' '}
            <Link to="/signin" className="text-indigo-600 font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm