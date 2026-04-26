
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deletereview } from '../../../state/Reviews/Action';
// ✅ deleterating import removed — ratings are permanent once recorded

const Reviewcard = ({ review, userrating }) => {
    const dispatch = useDispatch();
    const { user } = useSelector(store => store.auth);

    const firstname = review?.user?.firstname || '';
    const lastname = review?.user?.lastname || '';
    const username = (firstname + ' ' + lastname).trim() || 'Unknown User';
    const initial = username.charAt(0).toUpperCase();

    const timeago = (datestring) => {
        if (!datestring) return '';
        const diff = Date.now() - new Date(datestring).getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        if (days === 0) return 'Today';
        if (days === 1) return '1 day ago';
        if (days < 30) return `${days} days ago`;
        if (days < 365) return `${Math.floor(days / 30)} months ago`;
        return `${Math.floor(days / 365)} years ago`;
    };

    const isowner = user?._id === review?.user?._id;

    const handledelete = () => {
        if (window.confirm("Delete this review? Your rating will remain.")) {
            // ✅ only delete the review — rating stays permanently
            dispatch(deletereview(review._id));
        }
    };

    return (
        <div className='flex flex-col shadow-[15px_15px_40px_-10px_rgba(0,0,0,0.12)] m-2 rounded-lg p-4 gap-3 w-full bg-white'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <Avatar sx={{ bgcolor: 'primary.main', width: 48, height: 48, fontSize: 18 }}>
                        {initial}
                    </Avatar>
                    <div className='flex flex-col'>
                        <span className='font-semibold text-sm text-gray-800'>{username}</span>
                        <span className='text-xs text-gray-500'>{timeago(review?.createdat)}</span>
                    </div>
                </div>

                {/* ✅ only owner sees delete */}
                {isowner && (
                    <IconButton onClick={handledelete} size="small" color="error">
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                )}
            </div>

            <div className='mt-1'>
                {/* ✅ shows the matched rating value for this user */}
                <div className='mb-2'>
                    <Rating value={userrating || 0} precision={0.5} readOnly size="small" />
                </div>
                <div className='text-sm text-gray-700'>
                    {review?.reviews || 'No review text.'}
                </div>
            </div>
        </div>
    );
};

export default Reviewcard;