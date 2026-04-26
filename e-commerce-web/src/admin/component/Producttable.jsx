import React, { useEffect, useState, useMemo } from 'react';
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Avatar, Button,
    Card, CardHeader, Box, Typography, Chip, Pagination
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import { deleteproduct, findproducts } from '../../state/product/Action';
import { useDispatch, useSelector } from 'react-redux';
import nav from '../../customer/components/navigation/nav';
// import nav from '../../customer/pages/navbar/nav'; // ✅ import nav data

// ✅ Flatten all categories from nav into a list of { label, levelone, leveltwo, levelthree }
const buildcategorylist = () => {
    const list = [];
    nav.categories.forEach(cat => {
        cat.sections.forEach(section => {
            section.items.forEach(item => {
                if (item.id === 'all') return; // skip "Browse All"
                // parse route: e.g. /Men/clothing/t-shirts
                const parts = item.to.replace(/^\//, '').split('/');
                list.push({
                    label: `${cat.name} / ${section.name} / ${item.name}`,
                    levelone: parts[0] || '',
                    leveltwo: parts[1] || '',
                    levelthree: parts[2] || '',
                });
            });
        });
    });
    return list;
};

const CATEGORYLIST = buildcategorylist();

const Producttable = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector(store => store.product);
    const [categorypage, setCategorypage] = useState(1); // ✅ which category page we're on

    const currentcategory = CATEGORYLIST[categorypage - 1];

    // ✅ fetch products whenever category page changes
    useEffect(() => {
        if (!currentcategory) return;
        dispatch(findproducts({
            levelone: currentcategory.levelone,
            leveltwo: currentcategory.leveltwo,
            levelthree: currentcategory.levelthree,
            colors: [],
            sizes: [],
            minprice: 0,
            maxprice: 100000,
            mindiscount: 0,
            sort: "price_low",
            pagenumber: 1,
            pagesize: 50,
            stock: ""
        }));
    }, [categorypage]);

    const handleDelete = (id) => {
        dispatch(deleteproduct(id, {
            levelone: currentcategory.levelone,
            leveltwo: currentcategory.leveltwo,
            levelthree: currentcategory.levelthree,
            colors: [], sizes: [],
            minprice: 0, maxprice: 100000,
            mindiscount: 0, sort: "price_low",
            pagenumber: 1, pagesize: 50, stock: ""
        }));
    };

    return (
        <div className='p-5'>
            <Card>
                <CardHeader
                    title="All Products"
                    subheader={
                        currentcategory ? (
                            <Box className="flex items-center gap-2 mt-1">
                                <Typography variant="body2" color="text.secondary">Browsing:</Typography>
                                <Chip
                                    label={currentcategory.label}
                                    size="small"
                                    color="primary"
                                    variant="outlined"
                                />
                            </Box>
                        ) : null
                    }
                />

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Image</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {loading ? (
                                <TableRow>
                                    <TableCell colSpan={6}>
                                        <Box className="flex justify-center items-center py-16">
                                            <Typography color="text.secondary">Loading products...</Typography>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ) : error ? (
                                <TableRow>
                                    <TableCell colSpan={6}>
                                        <Box className="flex justify-center items-center py-16">
                                            <Typography color="error">Error: {error}</Typography>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ) : !products?.contents || products.contents.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6}>
                                        <Box className="flex flex-col items-center justify-center py-16 gap-3">
                                            <InboxIcon sx={{ fontSize: 64, color: 'text.disabled' }} />
                                            <Typography variant="h6" color="text.secondary">
                                                No Products in this Category
                                            </Typography>
                                            <Typography variant="body2" color="text.disabled">
                                                {currentcategory?.label}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                products.contents.map((item) => (
                                    <TableRow key={item._id}>
                                        <TableCell>
                                            <Avatar src={item.imageurl} variant="rounded" sx={{ width: 48, height: 48 }} />
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="body2" fontWeight={500} sx={{ maxWidth: 200 }} noWrap>
                                                {item.title}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Chip label={item.category?.name} size="small" />
                                        </TableCell>
                                        <TableCell>₹{item.price}</TableCell>
                                        <TableCell>{item.quantity}</TableCell>
                                        <TableCell>
                                            <Button
                                                color="error"
                                                variant="outlined"
                                                size="small"
                                                onClick={() => handleDelete(item._id)}
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

                {/* ✅ Category pagination — each page = one category */}
                <Box className="flex flex-col items-center py-4 gap-1">
                    <Pagination
                        count={CATEGORYLIST.length}
                        page={categorypage}
                        onChange={(e, val) => setCategorypage(val)}
                        color="primary"
                        showFirstButton
                        showLastButton
                    />
                    <Typography variant="caption" color="text.secondary">
                        Category {categorypage} of {CATEGORYLIST.length}
                    </Typography>
                </Box>
            </Card>
        </div>
    );
};

export default Producttable;
// import React, { useEffect } from 'react';
// import {
//     Table, TableBody, TableCell, TableContainer,
//     TableHead, TableRow, Paper, Avatar, Button,
//     Card, CardHeader, Box, Typography
// } from '@mui/material';
// import InboxIcon from '@mui/icons-material/Inbox';
// import { deleteproduct, findproducts } from '../../state/product/Action';
// import { useDispatch, useSelector } from 'react-redux';

// const Producttable = () => {
//     const dispatch = useDispatch();
//     const { products, loading, error } = useSelector(store => store.product);

//     // ✅ No category filter — fetch ALL products
//     const data = {
//         category: "t-shirts",
//         colors: [],
//         sizes: [],
//         minprice: 0,
//         maxprice: 100000,
//         mindiscount: 0,
//         sort: "price_low",
//         pagenumber: 1,
//         pagesize: 50,  // ✅ increase to show more products
//         stock: ""
//     };

//     useEffect(() => {
//         dispatch(findproducts(data));
//     }, []);

//     const handleDelete = (id) => {
//         dispatch(deleteproduct(id, data));
//     };

//     if (loading) {
//         return (
//             <Box className="flex justify-center items-center h-64">
//                 <Typography variant="h6" color="text.secondary">
//                     Loading products...
//                 </Typography>
//             </Box>
//         );
//     }

//     if (error) {
//         return (
//             <Box className="flex justify-center items-center h-64">
//                 <Typography variant="h6" color="error">
//                     Error: {error}
//                 </Typography>
//             </Box>
//         );
//     }

//     return (
//         <div className='p-5'>
//             <Card>
//                 <CardHeader title="All Products" />
//                 <TableContainer component={Paper}>
//                     <Table>
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell>Image</TableCell>
//                                 <TableCell>Title</TableCell>
//                                 <TableCell>Category</TableCell>
//                                 <TableCell>Price</TableCell>
//                                 <TableCell>Quantity</TableCell>
//                                 <TableCell>Action</TableCell>
//                             </TableRow>
//                         </TableHead>

//                         <TableBody>
//                             {!products?.contents || products.contents.length === 0 ? (
//                                 <TableRow>
//                                     <TableCell colSpan={6}>
//                                         <Box className="flex flex-col items-center justify-center py-16 gap-3">
//                                             <InboxIcon sx={{ fontSize: 64, color: 'text.disabled' }} />
//                                             <Typography variant="h6" color="text.secondary">
//                                                 No Products Found
//                                             </Typography>
//                                             <Typography variant="body2" color="text.disabled">
//                                                 Add products to see them here.
//                                             </Typography>
//                                         </Box>
//                                     </TableCell>
//                                 </TableRow>
//                             ) : (
//                                 products?.contents?.map((item) => (
//                                     <TableRow key={item._id}>
//                                         <TableCell>
//                                             <Avatar src={item.imageurl} />
//                                         </TableCell>
//                                         <TableCell>{item.title}</TableCell>
//                                         <TableCell>{item.category?.name}</TableCell>
//                                         <TableCell>₹{item.price}</TableCell>
//                                         <TableCell>{item.quantity}</TableCell>
//                                         <TableCell>
//                                             <Button
//                                                 color="error"
//                                                 variant="outlined"
//                                                 onClick={() => handleDelete(item._id)}
//                                             >
//                                                 Delete
//                                             </Button>
//                                         </TableCell>
//                                     </TableRow>
//                                 ))
//                             )}
//                         </TableBody>

//                     </Table>
//                 </TableContainer>
//             </Card>
//         </div>
//     );
// };

// export default Producttable;