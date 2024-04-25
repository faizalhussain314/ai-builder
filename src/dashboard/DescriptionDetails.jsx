import React, { useState } from 'react'
import { Box, Grid } from '@mui/material'
import SideBar from '../sidebar/SideBar'
import { setBusinessName, setDescription } from '../Slice/userDetailsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { incrementStep } from '../Slice/activeStepSlice'
import { decrementStep } from '../Slice/activeStepSlice'
import { useNavigate } from 'react-router-dom'


function DescriptionDetails() {


  const dispatch = useDispatch();

  const description = useSelector(state => state.userData.description);
  const navigate = useNavigate();
  const bussinessname = useSelector(state => state.userData.businessName)
  const bussiness = bussinessname;


  const [temp, setTemp] = useState("");
  const [Loader, setLoader] = useState(false);

  const handleInputChange = (event) => {
    let text = event.target.value;
    dispatch(setDescription(text));

  };
  const nextStep = () => {
    dispatch(incrementStep());
    navigate('/design')
    dispatch(setDescription(temp));

  }

  const previousStep = () => {
    dispatch(decrementStep());
    navigate('/name')

  }



  const handleType = async () => {
    setLoader(true);
    let dummy = description // Declare dummy variable
    const prompt = `Can you write a description for my name ${bussiness} in 54 words?`;
    try {
      const response = await fetch("http://localhost:8080/get-description", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      dummy = data.response; // Assign the value of data to dummy
      console.log('Response:', data);
    } catch (error) {
      console.log('Error:', error);
    }

    // Proceed with your interval logic using the dummy variable
    let index = dummy.length > 6 ? 6 : dummy.length;
    const interval = setInterval(() => {
      if (index <= dummy.length - 1) {
        setTemp(dummy.substring(0, index += 6));
      } else {
        clearInterval(interval);
        setLoader(false);
      }
    }, 100);
    const desContent = dummy
    dispatch(setDescription(desContent))

  };


  return (
    <>

      <Box sx={{ flexGrow: 1 }} className="h-screen">
        <Grid container spacing={2}>
          <Grid item xs={3} sx={{ height: '100vh' }} className='sticky top-0 left-0 bg-palatinate-blue-50'>
            <SideBar />
          </Grid>
          <Grid item xs={8}>
            <div>
              <div className='h-screen'>
                <div className='space-y-5 px-10 lg:px-16  mt-12'>
                  <h1 className='text-3xl font-bold leading-9'> What is the name of your business?</h1>
                  <p className="text-base font-normal leading-6 text-app-text">Please enter what you would like the website to be called.</p>
                </div>
                <div className='pb-2 px-10 lg:px-16 xl:pr-36 xl:pl:24 h-52 custom-confirmation-modal-scrollbar relative'>
                  <div className=' flex-row flex-wrap items-start gap-10 mb-10'>

                    <form>
                      <div className='form-control'>
                        <div className='mt-8 h-[42px] w-full'>
                          <div className='flex relative items-center'>
                            <div className='w-full'>
                              <textarea type="text" onChange={ev => setTemp(ev.target.value)} value={temp} className='h-36 p-4 w-full placeholder:zw-placeholder zw-input rounded-md border outline-none focus:shadow-input-focus shadow-sm border-app-border focus:border-palatinate-blue-600 ' name="" id="" />

                            </div>

                          </div>
                          <div className='mt-2 flex items-center gap-2 text-app-secondary hover:text-app-accent-hover cursor-pointer'>
                            <div className='flex justify-between w-full'>
                              <div className='flex gap-2  text-palatinate-blue-600 hover:text-palatinate-blue-800 ' onClick={handleType}>
                                <svg class="w-5 h-5 transition duration-150 ease-in-out" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 5L15 7.5M5 17.5L17.5 5L15 2.5L2.5 15L5 17.5ZM7.5 2.5C7.5 2.94203 7.67559 3.36595 7.98816 3.67851C8.30072 3.99107 8.72464 4.16667 9.16667 4.16667C8.72464 4.16667 8.30072 4.34226 7.98816 4.65482C7.67559 4.96738 7.5 5.39131 7.5 5.83333C7.5 5.39131 7.3244 4.96738 7.01184 4.65482C6.69928 4.34226 6.27536 4.16667 5.83333 4.16667C6.27536 4.16667 6.69928 3.99107 7.01184 3.67851C7.3244 3.36595 7.5 2.94203 7.5 2.5ZM15.8333 10.8333C15.8333 11.2754 16.0089 11.6993 16.3215 12.0118C16.634 12.3244 17.058 12.5 17.5 12.5C17.058 12.5 16.634 12.6756 16.3215 12.9882C16.0089 13.3007 15.8333 13.7246 15.8333 14.1667C15.8333 13.7246 15.6577 13.3007 15.3452 12.9882C15.0326 12.6756 14.6087 12.5 14.1667 12.5C14.6087 12.5 15.0326 12.3244 15.3452 12.0118C15.6577 11.6993 15.8333 11.2754 15.8333 10.8333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                <span className='font-semibold text-sm transition duration-150 ease-in-out' >  Write Using AI</span>
                                {Loader && (
                                  <button type="button" class=" " disabled>
                                    <svg class="text-palatinate-blue-600 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                                      width="16" height="16">
                                      <path
                                        d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                                        stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
                                      <path
                                        d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                                        stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-100">
                                      </path>
                                    </svg>
                                  </button>
                                )}
                              </div>
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
                      <button onClick={nextStep} className='hover:opacity-70  min-w-[142px]  inline-flex items-center justify-center    bg-palatinate-blue-600 hover:bg-palatinate-blue-600  text-white pl-[25px] pr-[23px] py-[13px]  h-[50px]  rounded-md zw-btn-base shadow-sm  focus:outline-none disabled:opacity-25 transition ease-in-out duration-150'>
                        <div className='flex justify-center items-center gap-x-2'>
                          <div>Continue</div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>

                        </div>

                      </button>




                      <button onClick={previousStep} className='group  flex items-center justify-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition duration-150 ease-in-out disabled:opacity-25 disabled:cursor-not-allowed text-app-secondary bg-app-light-background border border-app-secondary shadow-sm py-2.5 text-sm font-semibold leading-5 h-[50px] px-6'>
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

export default DescriptionDetails