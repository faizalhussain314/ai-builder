import React, { useState, useEffect } from 'react'
import { Box, Grid } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useDispatch, useSelector } from 'react-redux'
import { incrementStep } from '../Slice/activeStepSlice'
import { decrementStep } from '../Slice/activeStepSlice'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { setData } from '../Slice/Templatedetails';
import SwipeableEdgeDrawer from '../sidebar/SwipeableEdgeDrawer'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DeleteIcon from '@mui/icons-material/Delete';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';




function Preview() {


  const dispatch = useDispatch();

  const content = useSelector(state => state.templatedetails.data);
  const iframeurl = useSelector(state => state.templatedetails.iframeurl);
  const navigate = useNavigate();

  console.log(iframeurl)




  const nextStep = () => {
    // dispatch(incrementStep());
    navigate('/preview')

  }

  const previousStep = () => {
    dispatch(decrementStep());
    navigate('/design')

  }
  const [load, setLoad] = useState(true);

  // Simulate changing load value to false after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const sendMessageToChild = () => {
    const iframe = document.getElementById("myIframe");
    iframe.contentWindow.postMessage(content, "*");
  };

  useEffect(() => {
    const iframe = document.getElementById("myIframe");
    iframe.onload = () => {
      sendMessageToChild(); // Call sendMessageToChild function when the iframe has finished loading
      console.log("function excuted successfully")
    }

    // sendMessageToChild(); 
    // console.log("hello")
  }, []);

  const [Showmodel, setShowmodal] = useState(false);

  const handleChange = () => {



  }

  const [selectedDivs, setSelectedDivs] = useState([]);

  // Function to handle the selection of a div
  const handleDivSelection = (id) => {
    // Toggle the selected state of the clicked div
    if (selectedDivs.includes(id)) {
      setSelectedDivs(selectedDivs.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedDivs([...selectedDivs, id]);
    }
  };

  // Data for rendering divs
  const divData = [
    { id: 1, text: 'Home Page' },
    { id: 2, text: 'About Us' },
    { id: 3, text: 'services' },
    { id: 4, text: 'contact us' },


    // Add more div data as needed
  ];
  const [selectedSpanId, setSelectedSpanId] = useState(null);

  const handleSpanSelection = (id) => {
    setSelectedSpanId(id === selectedSpanId ? null : id);
  };


  return (
    <Box sx={{ flexGrow: 1 }} className="h-screen">
      <Grid container spacing={2}>
        <Grid item xs={3} sx={{ height: '100vh' }} className={`sticky top-0 left-0 bg-palatinate-blue-50 ${Showmodel ? 'hidden' : ''}`}>
          <div>
            <div className='space-y-5 px-10 lg:px-16 mt-12'>
              <h1 className='text-3xl font-bold leading-9'> Website Preview</h1>
              <p className="text-base font-normal leading-6 text-app-text">Preview your website's potential with our interactive demonstration. Explore various layouts and features to visualize your online presence</p>
            </div>
            <div>

            </div>
          </div>
          <div className='space-y-5 px-10 lg:px-16 mt-12 mb-4'>
            <h1 className='text-xl font-bold leading-9'> Select Pages</h1>
          </div>
          <div className='flex justify-center items-center flex-col gap-4'>
            {divData.map((item) => (
              <div
                key={item.id}
                className={`${selectedDivs.includes(item.id) ? 'bg-palatinate-blue-600 text-white' : 'bg-white'} flex rounded p-3 justify-evenly w-48 gap-4 px-6 text-palatinate-blue-600 cursor-pointer`}
                onClick={() => handleDivSelection(item.id)}
              >
                {selectedDivs.includes(item.id) ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />} <span>{item.text}</span>
              </div>
            ))}
          </div>
          <div className='absolute bottom-0 left-0 pb-8 bg-app-light-background pt-3 px-10 lg:px-16 xl:px-36 z-50 '>
            <div className='flex xs:items-center items-start justify-between'>
              <div className='flex flex-row xs:flex-row xs:items-center items-start gap-x-10 gap-y-6 xs:gap-y-0 flex-wrap'>
                <button onClick={nextStep} className='hover:opacity-70  min-w-[200px]  inline-flex items-center justify-center    bg-palatinate-blue-600 hover:bg-accent-hover  text-white pl-[25px] pr-[23px] py-[13px]  h-[50px]  rounded-md zw-btn-base shadow-sm  focus:outline-none disabled:opacity-25 transition ease-in-out duration-150'>
                  <div className='flex justify-center items-center gap-x-2'>
                    <div>Start Build</div>
                    <RocketLaunchIcon />
                  </div>

                </button>

                <button onClick={previousStep} className='group min-w-[200px] bg-white flex items-center justify-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition duration-150 ease-in-out disabled:opacity-25 disabled:cursor-not-allowed text-app-secondary bg-app-light-background border border-app-secondary shadow-sm py-2.5 text-sm font-semibold leading-5 h-[50px] px-6'>
                  Previous Step
                </button>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={`${Showmodel ? '12' : '9'}`}>

          <div className='h-screen overflow-y-auto ' style={{ scrollbarWidth: 'none' }}>
            <button className='absolute  p-4 top-1/2 z-10 bg-palatinate-blue-600 text-white rounded-full ml-[-25px]' onClick={() => setShowmodal((open) => !open)}>
              <NavigateNextIcon />
            </button>

            <div className='w-full h-fit bg-palatinate-blue-50 border-red-100  p-2  gap-2 flex justify-center'>
              {divData.map((website) => (
                <span
                  className={`p-3 rounded bg-white cursor-pointer gap-4 px-8 ${website.id === selectedSpanId
                    ? 'border-palatinate-blue-600 text-palatinate-blue-500 border-2'
                    : 'border-none text-palatinate-blue-600'
                    }`}
                  key={website.id}
                  onClick={() => handleSpanSelection(website.id)}
                >
                  {website.text}
                </span>
              ))}

            </div>
            <iframe id="myIframe" title="Child iFrame" className=" w-full h-[1600px] relative left-0 top-0 origin-top-left " src={iframeurl} />
          </div>



          {/* <div className='sticky bottom-0 pb-8 bg-app-light-background pt-3 px-10 lg:px-16 xl:px-36 z-50 bg-white'>
              <div className='flex xs:items-center items-start justify-between'>
                <div className='flex flex-row xs:flex-row xs:items-center items-start gap-x-10 gap-y-10 xs:gap-y-0 flex-wrap'>
                  <button onClick={nextStep} className='hover:opacity-70  min-w-[142px]  inline-flex items-center justify-center    bg-palatinate-blue-600 hover:bg-palatinate-blue-600  text-white pl-[25px] pr-[23px] py-[13px]  h-[50px]  rounded-md zw-btn-base shadow-sm  focus:outline-none disabled:opacity-25 transition ease-in-out duration-150'>
                    <div className='flex justify-center items-center gap-x-2'>
                      <div>Start Build</div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>

                    </div>

                  </button>




                  <button onClick={previousStep} className='group  flex items-center justify-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition duration-150 ease-in-out disabled:opacity-25 disabled:cursor-not-allowed text-app-secondary bg-app-light-background border border-app-secondary shadow-sm py-2.5 text-sm font-semibold leading-5 h-[50px] px-6'>
                    Previous Step
                  </button>
                </div>
              </div>
            </div> */}

        </Grid>


      </Grid >

    </Box >
  )
}

export default Preview


