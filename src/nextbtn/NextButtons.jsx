import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementStep } from '../Slice/activeStepSlice'
import { decrementStep } from '../Slice/activeStepSlice'
import { Link, useNavigate  } from 'react-router-dom';



function NextButtons() {


   
  
   

   const navigate = useNavigate()
    const dispacth = useDispatch()
    const [previousLink , setPreviousLink] = useState() 
    const [Links , setLinks] = useState({Link:""});

    

    

   
   const  currenturl = window.location.pathname
    


    const nextStep = () =>
    {
      dispacth(incrementStep());
       
    }
  
    const previousStep =() =>
    {
      dispacth(decrementStep());
      navigate('/image')
}
        
       

 

  

  return (
    <div className='sticky bottom-0 pb-8 bg-app-light-background pt-3 px-10 lg:px-16 xl:px-36 z-50 bg-white'>
             <div className='flex xs:items-center items-start justify-between'>
             <div className='flex flex-row xs:flex-row xs:items-center items-start gap-x-10 gap-y-10 xs:gap-y-0 flex-wrap'>
             <Link to={"/preview"}> <button onClick={nextStep}  className='hover:opacity-70  min-w-[142px]  inline-flex items-center justify-center    bg-palatinate-blue-600 hover:bg-accent-hover  text-white pl-[25px] pr-[23px] py-[13px]  h-[50px]  rounded-md zw-btn-base shadow-sm  focus:outline-none disabled:opacity-25 transition ease-in-out duration-150'>
             <div  className='flex justify-center items-center gap-x-2'>
                <div>Continue</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>
                
               </div>
               
              </button>
              </Link>
             
             
<Link to={"/image"} onClick={previousStep} >
               <button  className='group flex items-center justify-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition duration-150 ease-in-out disabled:opacity-25 disabled:cursor-not-allowed text-app-secondary bg-app-light-background border border-app-secondary shadow-sm py-2.5 text-sm font-semibold leading-5 h-[50px] px-6'>
             Previous Step
              </button>
              </Link>
             </div>
             </div>
            </div>
  )
}

export default NextButtons