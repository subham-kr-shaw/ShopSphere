import { Grid } from '@mui/material'
import React from 'react'
import Achivement from './Achivement'
import Monthlyoverview from './Monthlyoverview'
import Producttable from './Producttable'

const Dashboard = () => {
  return (
    <div className='p-10'>
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Achivement/>
            </Grid>
            <Grid item xs={12} md={8}>
                <Monthlyoverview/>
            </Grid>
            <Grid item xs={12} md={6}>
                {/* <Producttable/> */}
            </Grid>
        </Grid>
    </div>
  )
}

export default Dashboard