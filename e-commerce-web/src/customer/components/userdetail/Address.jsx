
import React from 'react'
import { useSelector } from 'react-redux'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';

const Address = () => {
  const { shippingaddress } = useSelector(store => store.order)

  if (!shippingaddress) {
    return (
      <div className="flex flex-col items-center justify-center h-40 text-gray-400">
        <LocationOnIcon sx={{ fontSize: 40, color: '#c7d2fe' }} />
        <p className="text-sm mt-2">Fill the form to see your address here.</p>
      </div>
    )
  }

  return (
    <div className="border-2 border-indigo-500 rounded-xl p-4 bg-indigo-50 shadow-sm">

      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-indigo-700 font-semibold text-sm uppercase tracking-wide">
          Delivering To
        </span>
        {/* ✅ green selected indicator */}
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-green-600 text-xs font-medium">Selected</span>
        </div>
      </div>

      {/* Name */}
      <div className="flex items-center gap-2 mb-2">
        <PersonIcon sx={{ fontSize: 18, color: '#6366f1' }} />
        <p className="font-semibold text-gray-800">
          {shippingaddress.firstname} {shippingaddress.lastname}
        </p>
      </div>

      {/* Address */}
      <div className="flex items-start gap-2 mb-2">
        <LocationOnIcon sx={{ fontSize: 18, color: '#6366f1', marginTop: '2px' }} />
        <div>
          <p className="text-gray-700 text-sm">{shippingaddress.streetaddress}</p>
          <p className="text-gray-700 text-sm">
            {shippingaddress.city}, {shippingaddress.state}
          </p>
          <p className="text-gray-700 text-sm">PIN: {shippingaddress.zipcode}</p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-2">
        <LocalPhoneIcon sx={{ fontSize: 18, color: '#6366f1' }} />
        <p className="text-gray-700 text-sm">{shippingaddress.mobile}</p>
      </div>

    </div>
  )
}

export default Address