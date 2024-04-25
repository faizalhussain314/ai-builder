import React from 'react'
import { Box , Grid } from '@mui/material'
import SideBar from '../sidebar/SideBar'
import NextButtons from '../nextbtn/NextButtons'
import { setBusinessName  } from '../Slice/userDetailsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { incrementStep } from '../Slice/activeStepSlice'
import { decrementStep } from '../Slice/activeStepSlice'
import { useNavigate } from 'react-router-dom'


function BussinessName() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const businessName = useSelector(state=>state.userData.businessName)

    const handleInputChange = (event) => {
      dispatch(setBusinessName(event.target.value));
     
    };
    const nextStep = () =>
    {
      dispatch(incrementStep());
      navigate('/description');
       
    }
  
    const previousStep =() =>
    {
      dispatch  (decrementStep());
}

  return (
    <>
    <Box sx={{ flexGrow: 1 }}   className="h-screen">
    <Grid container spacing={2}>
    <Grid item xs={3} sx={{height:'100vh'}} className='sticky top-0 left-0 bg-palatinate-blue-50'>
      <SideBar />
      </Grid>
      <Grid item xs={8}>
      <div>
          <div className='h-screen'> 
            <div className='space-y-5 px-10 lg:px-16  mt-12'>
          <h1 className='text-3xl font-bold leading-9'> What is the name of your business?</h1> 
          <p className="text-base font-normal leading-6 text-app-text">Please enter what you would like the website to be called.</p>
            </div>
            <div className='pb-2 px-10 lg:px-16 xl:pr-36 xl:pl:24  custom-confirmation-modal-scrollbar relative'>
             <div className=' flex-row flex-wrap items-start gap-10 mb-10'>

            <form>
                <div className='form-control'>
              <div className='mt-8 h-[42px] w-full'>
                <div className='flex relative items-center'>
                    <div className='w-full'>
                        <input onChange={handleInputChange} value={businessName} className=' w-full h-[42px]  placeholder:zw-placeholder zw-input rounded-md px-3 border focus:shadow-input-focus  outline-none  shadow-sm  border-app-border focus:border-palatinate-blue-600 undefined false ' name="" id="" />

                    </div>

                </div>

              </div>
                </div>
            </form>
              

             </div>

            </div>
            
            <div className='sticky bottom-0 pb-8 bg-app-light-background pt-3 px-10 lg:px-16 xl:px-36 z-50 bg-white'>
             <div className='flex xs:items-center items-start justify-between'>
             <div className='flex flex-row xs:flex-row xs:items-center items-start gap-x-10 gap-y-10 xs:gap-y-0 flex-wrap'>
              <button onClick={nextStep}  className='hover:opacity-70  min-w-[142px]  inline-flex items-center justify-center    bg-palatinate-blue-600 hover:bg-accent-hover  text-white pl-[25px] pr-[23px] py-[13px]  h-[50px]  rounded-md zw-btn-base shadow-sm  focus:outline-none disabled:opacity-25 transition ease-in-out duration-150'>
             <div  className='flex justify-center items-center gap-x-2'>
                <div>Continue</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>
                
               </div>
               
              </button>
              
             
             

              <button  className='group flex items-center justify-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition duration-150 ease-in-out disabled:opacity-25 disabled:cursor-not-allowed text-app-secondary bg-app-light-background border border-app-secondary shadow-sm py-2.5 text-sm font-semibold leading-5 h-[50px] px-6'>
            Previous Step
              </button>
             </div>
             </div>
            </div>
          </div>
          </div>
        </Grid>


    </Grid >

      </Box>
    </>
  )
}

export default BussinessName