import React, { useState } from 'react'
import { Box , Grid } from '@mui/material'
import SideBar from '../sidebar/SideBar'
import { setBusinessName , setDescription } from '../Slice/userDetailsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { incrementStep } from '../Slice/activeStepSlice'
import { decrementStep } from '../Slice/activeStepSlice'
import { useNavigate } from 'react-router-dom'
import '../index.css'


function ImageList() {


    const nextStep = () =>
    {
      dispatch(incrementStep());
      navigate('/design')
       
    }
  
    const previousStep =() =>
    {
      dispatch(decrementStep());
      navigate('/description')
      
}
const dispatch = useDispatch();

  const description = useSelector(state=>state.userData.description);
  const navigate = useNavigate()

  const imageList = [
    {
        src:"https://images.pexels.com/photos/1036396/pexels-photo-1036396.jpeg?auto=compress&cs=tinysrgb&h=350 1x, https://images.pexels.com/photos/1036396/pexels-photo-1036396.jpeg?auto=compress&cs=tinysrgb&h=350 2x"
    },
    {
        src:"https://images.pexels.com/photos/1036396/pexels-photo-1036396.jpeg?auto=compress&cs=tinysrgb&h=350 1x, https://images.pexels.com/photos/1036396/pexels-photo-1036396.jpeg?auto=compress&cs=tinysrgb&h=350 2x"
    }
  ]

  const [activeIndex, setActiveIndex] = useState(null);

  const handleActive = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
    <Box sx={{ flexGrow: 1 }}   className="h-screen">
    <Grid container spacing={2}>
    <Grid item xs={3} sx={{height:'100vh'}} className='sticky top-0 left-0 bg-palatinate-blue-50'>
      <SideBar />
      </Grid>
      <Grid item xs={8}>
      <div className='w-full h-full flex flex-col items-center bg-app-light-background '>
     <div className='w-full max-w-container h-screen max-h-screen flex flex-col mx-auto overflow-y-auto px-10 lg:px-16 xl:px-36 pt-12 hide-scrollbar'>
        <h1 className='text-2xl font-semibold leading-7'>Select relevant images for your website</h1>
       <p className='zw-base-normal text-app-text pt-4 mb-4'>Here are images for your “zgen clothing” business based on your business description. Please choose the ones that best represent your desired outcome.</p>
       <div className='min-h-screen flex flex-col'>

       <div className='sticky -top-1.5 bg-app-light-background z-10'>
         <div>
            <div className='flex relative items-center'>
                <div className='w-full'>
                <input type="text" className=' w-full h-[42px]  placeholder:zw-placeholder zw-input rounded-md px-3 border focus:shadow-input-focus  outline-none  shadow-sm  border-app-border focus:border-app-secondary undefined false ' />
                </div>

            </div>
         </div>
       </div>

       

       <div className='custom-confirmation-modal-scrollbar p-3 md:p-4 xl:p-5 w-full overflow-x-hidden relative flex flex-col grow overflow-y-auto bg-white rounded-lg border-2 mt-8'>
          <div className='flex flex-row justify-center content-stretch  w-full gap-x-6 overflow-y-auto '>
          <div className='grid grid-cols-3 justify-start content-stretch flex-auto gap-y-6 space-y-px'>
      {imageList.map((list, index) => (
        <div key={index}>
          <div className='relative overflow-hidden rounded-lg p-1'>
            <img
              src={list.src}
              className={`max-w-full max-h-fit rounded-lg relative ${
                activeIndex === index ? 'ring-2 border-2 bg-palatinate-blue-100 ring-palatinate-blue-300' : ''
              }`}
              alt=''
              onClick={() => handleActive(index)}
            />
          </div>
        </div>
      ))}
    </div>

    
           
          </div>
       </div>
       
       </div>


       <div className='sticky bottom-0 left-0 pb-8 bg-app-light-background pt-3 px-10 lg:px-16 xl:px-36 z-50 bg-white'>
             <div className='flex xs:items-center items-start justify-between'>
             <div className='flex flex-row xs:flex-row xs:items-center items-start gap-x-10 gap-y-10 xs:gap-y-0 flex-wrap'>
              <button onClick={nextStep}  className='hover:opacity-70  min-w-[142px]  inline-flex items-center justify-center    bg-palatinate-blue-600 hover:bg-accent-hover  text-white pl-[25px] pr-[23px] py-[13px]  h-[50px]  rounded-md zw-btn-base shadow-sm  focus:outline-none disabled:opacity-25 transition ease-in-out duration-150'>
             <div  className='flex justify-center items-center gap-x-2'>
                <div>Continue</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>
                
               </div>
               
              </button>
              
             
             

              <button onClick={previousStep} className='group flex items-center justify-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition duration-150 ease-in-out disabled:opacity-25 disabled:cursor-not-allowed text-app-secondary bg-app-light-background border border-app-secondary shadow-sm py-2.5 text-sm font-semibold leading-5 h-[50px] px-6'>
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

export default ImageList