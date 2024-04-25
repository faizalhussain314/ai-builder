import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './sidebar/SideBar'
import DashBoard from './dashboard/DashBoard'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';

function App() {


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3} sx={{ height: '100vh' }} className='sticky top-0 left-0 bg-palatinate-blue-50'>
            <SideBar />
          </Grid>
          <Grid item xs={8}>
            <DashBoard />
          </Grid>


        </Grid >

      </Box>
    </>
  )
}

export default App
