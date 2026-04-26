import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Avatar, Button,
  Card, CardHeader, AvatarGroup, Box, Typography
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import {
  confirmedorder,
  deleteorder,
  deliverorder,
  getorder,
  shiporder
} from '../../state/Admin/order/Action';

const Ordertable = () => {
  const { orders, loading, error } = useSelector((store) => store.adminorder);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    dispatch(getorder());
  }, [dispatch]);

  const handleClick = (event, orderId) => {
    // ✅ Stop propagation so clicking Action button doesn't bubble
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
    setSelectedOrderId(orderId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedOrderId(null);
  };

  const handledelete = (e, orderid) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this order?")) {
      dispatch(deleteorder(orderid));
    }
  };

  // ✅ After each action, refetch orders so status updates in table immediately
  const handleconfirm = () => {
    dispatch(confirmedorder(selectedOrderId)).then(() => dispatch(getorder()));
    handleClose();
  };

  const handleship = () => {
    dispatch(shiporder(selectedOrderId)).then(() => dispatch(getorder()));
    handleClose();
  };

  const handledeliver = () => {
    dispatch(deliverorder(selectedOrderId)).then(() => dispatch(getorder()));
    handleClose();
  };

  const statusColor = {
    CONFIRMED: 'bg-green-600',
    SHIPPED: 'bg-blue-500',
    PLACED: 'bg-teal-500',
    DELIVERED: 'bg-purple-600',
    CANCELLED: 'bg-red-500',
    PENDING: 'bg-gray-400',
  };

  if (loading) {
    return (
      <Box className="flex justify-center items-center h-64">
        <Typography variant="h6" color="text.secondary">Loading orders...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box className="flex justify-center items-center h-64">
        <Typography variant="h6" color="error">Error: {error}</Typography>
      </Box>
    );
  }

  return (
    <div className='p-5'>
      <Card>
        <CardHeader title="All Orders" />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f9fafb' }}>
                <TableCell><strong>Images</strong></TableCell>
                <TableCell><strong>Title</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
                <TableCell><strong>Total Price</strong></TableCell>
                <TableCell><strong>Total Items</strong></TableCell>
                <TableCell><strong>Action</strong></TableCell>
                <TableCell><strong>Delete</strong></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {!orders || orders.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7}>
                    <Box className="flex flex-col items-center justify-center py-16 gap-3">
                      <InboxIcon sx={{ fontSize: 64, color: 'text.disabled' }} />
                      <Typography variant="h6" color="text.secondary">No Orders Found</Typography>
                      <Typography variant="body2" color="text.disabled">
                        When customers place orders, they will appear here.
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ) : (
                orders.map((item) => (
                  <TableRow
                    key={item._id}
                    hover
                    sx={{ '&:last-child td': { border: 0 } }}
                  >
                    {/* Images */}
                    <TableCell>
                      <AvatarGroup max={4}>
                        {item.orderitems?.map((orderitem) => (
                          <Avatar
                            key={orderitem._id}
                            src={orderitem?.product?.imageurl}
                            alt={orderitem?.product?.title}
                          />
                        ))}
                      </AvatarGroup>
                    </TableCell>

                    {/* Titles */}
                    <TableCell>
                      {item.orderitems?.map((orderitem) => (
                        <div key={orderitem._id} className="text-sm">
                          {orderitem?.product?.title}
                        </div>
                      ))}
                    </TableCell>

                    {/* Status badge */}
                    <TableCell>
                      <span className={`text-white text-xs px-3 py-1.5 rounded-full font-medium ${
                        statusColor[item.orderstatus?.toUpperCase()] || 'bg-gray-400'
                      }`}>
                        {item.orderstatus}
                      </span>
                    </TableCell>

                    {/* Price */}
                    <TableCell>₹{item.totaldiscountedprice}</TableCell>

                    {/* Items count */}
                    <TableCell>{item.orderitems?.length}</TableCell>

                    {/* ✅ Action menu — separate anchorEl per row via selectedOrderId check */}
                    <TableCell>
                      <Button
                        variant="text"
                        size="small"
                        onClick={(e) => handleClick(e, item._id)}
                      >
                        Action
                      </Button>

                      <Menu
                        anchorEl={anchorEl}
                        open={open && selectedOrderId === item._id}
                        onClose={handleClose}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                      >
                        <MenuItem onClick={handleconfirm}>✅ Confirm</MenuItem>
                        <MenuItem onClick={handleship}>🚚 Ship</MenuItem>
                        <MenuItem onClick={handledeliver}>📦 Deliver</MenuItem>
                      </Menu>
                    </TableCell>

                    {/* Delete */}
                    <TableCell>
                      <Button
                        color="error"
                        variant="outlined"
                        size="small"
                        onClick={(e) => handledelete(e, item._id)}
                      >
                        Delete
                      </Button>
                    </TableCell>

                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default Ordertable;
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import {
//   Table, TableBody, TableCell, TableContainer,
//   TableHead, TableRow, Paper, Avatar, Button,
//   Card, CardHeader, AvatarGroup, Box, Typography
// } from '@mui/material';
// import InboxIcon from '@mui/icons-material/Inbox';

// import {
//   confirmedorder,
//   deleteorder,
//   deliverorder,
//   getorder,
//   shiporder
// } from '../../state/Admin/order/Action';

// const Ordertable = () => {
//   const { orders, loading, error } = useSelector((store) => store.adminorder);
//   const dispatch = useDispatch();

//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedOrderId, setSelectedOrderId] = useState(null);

//   const open = Boolean(anchorEl);

//   const handleClick = (event, orderId) => {
//     setAnchorEl(event.currentTarget);
//     setSelectedOrderId(orderId);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//     setSelectedOrderId(null);
//   };

//   useEffect(() => {
//     dispatch(getorder());
//   }, [dispatch]);

//   const handledelete = (orderid) => {
//     dispatch(deleteorder(orderid));
//   };

//   const handleconfirm = () => {
//     dispatch(confirmedorder(selectedOrderId));
//     handleClose();
//   };

//   const handleship = () => {
//     dispatch(shiporder(selectedOrderId));
//     handleClose();
//   };

//   const handledeliver = () => {
//     dispatch(deliverorder(selectedOrderId));
//     handleClose();
//   };

//   const statusColor = {
//     CONFIRMED: 'bg-[#369236]',
//     SHIPPED: 'bg-[#4141ff]',
//     PLACED: 'bg-[#02B290]',
//     DELIVERED: 'bg-[#9333ea]',
//     CANCELLED: 'bg-red-500',
//     PENDING: 'bg-gray-500',
//   };

//   if (loading) {
//     return (
//       <Box className="flex justify-center items-center h-64">
//         <Typography variant="h6" color="text.secondary">
//           Loading orders...
//         </Typography>
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box className="flex justify-center items-center h-64">
//         <Typography variant="h6" color="error">
//           Error: {error}
//         </Typography>
//       </Box>
//     );
//   }

//   return (
//     <div className='p-5'>
//       <Card>
//         <CardHeader title="All Orders" />

//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Images</TableCell>
//                 <TableCell>Title</TableCell>
//                 <TableCell>Status</TableCell>
//                 <TableCell>Total Price</TableCell>
//                 <TableCell>Total Items</TableCell>
//                 <TableCell>Action</TableCell>
//                 <TableCell>Delete</TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {/* ✅ Empty state shown inside table body */}
//               {!orders || orders.length === 0 ? (
//                 <TableRow>
//                   <TableCell colSpan={7}>
//                     <Box className="flex flex-col items-center justify-center py-16 gap-3">
//                       <InboxIcon sx={{ fontSize: 64, color: 'text.disabled' }} />
//                       <Typography variant="h6" color="text.secondary">
//                         No Orders Found
//                       </Typography>
//                       <Typography variant="body2" color="text.disabled">
//                         When customers place orders, they will appear here.
//                       </Typography>
//                     </Box>
//                   </TableCell>
//                 </TableRow>
//               ) : (
//                 orders.map((item) => (
//                   <TableRow key={item._id}>

//                     {/* Images */}
//                     <TableCell>
//                       <AvatarGroup max={4}>
//                         {item.orderitems?.map((orderitem) => (
//                           <Avatar
//                             key={orderitem._id}
//                             src={orderitem?.product?.imageurl}
//                             alt={orderitem?.product?.title}
//                           />
//                         ))}
//                       </AvatarGroup>
//                     </TableCell>

//                     {/* Titles */}
//                     <TableCell>
//                       {item.orderitems?.map((orderitem) => (
//                         <div key={orderitem._id}>
//                           {orderitem?.product?.title}
//                         </div>
//                       ))}
//                     </TableCell>

//                     {/* Status */}
//                     <TableCell>
//                       <span
//                         className={`text-white px-5 py-2 rounded-full ${
//                           statusColor[item.orderstatus] || 'bg-gray-400'
//                         }`}
//                       >
//                         {item.orderstatus}
//                       </span>
//                     </TableCell>

//                     {/* Price */}
//                     <TableCell>₹{item.totaldiscountedprice}</TableCell>

//                     {/* Items count */}
//                     <TableCell>{item.orderitems?.length}</TableCell>

//                     {/* Action Menu */}
//                     <TableCell>
//                       <Button onClick={(e) => handleClick(e, item._id)}>
//                         Action
//                       </Button>

//                       <Menu
//                         anchorEl={anchorEl}
//                         open={open && selectedOrderId === item._id}
//                         onClose={handleClose}
//                       >
//                         <MenuItem onClick={handleconfirm}>Confirmed</MenuItem>
//                         <MenuItem onClick={handleship}>Shipped</MenuItem>
//                         <MenuItem onClick={handledeliver}>Deliver</MenuItem>
//                       </Menu>
//                     </TableCell>

//                     {/* Delete */}
//                     <TableCell>
//                       <Button
//                         color="error"
//                         variant="outlined"
//                         onClick={() => handledelete(item._id)}
//                       >
//                         Delete
//                       </Button>
//                     </TableCell>

//                   </TableRow>
//                 ))
//               )}
//             </TableBody>

//           </Table>
//         </TableContainer>
//       </Card>
//     </div>
//   );
// };

// export default Ordertable;