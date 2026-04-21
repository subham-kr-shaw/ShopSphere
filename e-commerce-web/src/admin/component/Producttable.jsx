import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { findproducts } from '../../state/product/Action';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button, Card, CardHeader } from '@mui/material';



const Producttable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(store => store.product);
  console.log("product", products);
  useEffect(() => {
    const data = {
      category: "mens_Kurta",
      colors: [],
      sizes: [],
      minprice: 0,
      maxprice: 100000,
      mindiscount: 50,
      sort: "price_low",
      pagenumber: 1,
      pagesize: 10,
      stock: ""
    }
    dispatch(findproducts(data))
  }, [])
  return (
    <div className='p-5'>
      <Card>
        <CardHeader title="All Products" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>product image</TableCell>
                <TableCell>Product title</TableCell>
                <TableCell align="left">category</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.product?.contents?.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left"><Avatar src={item.imageurl}></Avatar></TableCell>
                  <TableCell component="th" scope="row">
                    {item.title}
                  </TableCell>
                  <TableCell align="left">{item.category.name}</TableCell>
                  <TableCell align="left">{item.price}</TableCell>
                  <TableCell align="left">{item.quantity}</TableCell>
                  <TableCell align="left">
                    <Button variant='outlined'>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

    </div>
  )
}

export default Producttable