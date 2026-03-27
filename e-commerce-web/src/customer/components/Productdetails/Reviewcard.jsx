import Avatar from '@mui/material/Avatar'
import Rating from '@mui/material/Rating';

const Reviewcard = () => {
    return (
        <div className='flex flex-col shadow-[15px_15px_40px_-10px_rgba(0,0,0,0.12)] m-2 rounded-lg p-4 gap-3 w-full max-w-full bg-white flex-1 min-w-0 sm:max-w-md'>
            <div className='flex items-center gap-3'>
                <Avatar sx={{ bgcolor: 'primary.main', width: 48, height: 48, fontSize: 18 }}>
                    S
                </Avatar>
                <div className='flex flex-col'>
                  <span className='font-semibold text-sm text-gray-800'>Subham Kr Shaw</span>
                  <span className='text-xs text-gray-500'>2 days ago</span>
                </div>
            </div>
            <div className='mt-1'>
                <div className='mb-2'><Rating value={4.2} precision={0.5} readOnly size="small" /></div>
                <div className='text-sm text-gray-700'>Love the color — fits well and looks premium.</div>
            </div>
        </div>
    )
}

export default Reviewcard