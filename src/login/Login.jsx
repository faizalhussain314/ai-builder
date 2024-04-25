import React from 'react'
import { Link } from 'react-router-dom'
import GoogleButton from 'react-google-button'


function Login() {
  return (
    <>
      <div className="flex flex-col justify-center flex-1 min-h-full h-screen gap-10 px-6 pt-20 pb-12 tracking-tight lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="w-auto h-8 mx-auto"
          src="https://app.gravitywrite.com//storage/17/6414225450e31_PNG---GW-horizontal-logo-dual-dark.png"
          alt="Your Company"
        />
      </div>
      <div className="flex flex-col gap-8 sm:mx-auto sm:w-full sm:max-w-sm ">
        <h2 className="text-2xl font-bold text-center text-neutral-800 ">
          Sign in to your account
        </h2>
        <div className='flex justify-center '>
        <GoogleButton
  onClick={() => { console.log('Google button clicked') }}
/>
</div>
        <form
          className="flex flex-col gap-6"
        //   onSubmit={handlers.signInFormSubmit}
        >
          <div className="flex flex-wrap items-center justify-center pb-4 space-y-8">
            {/* Or Divider */}
            {/* <GoogleSignInButton onLogin={handlers.googleLoginSucceded} /> */}
            <svg
              width="274"
              height="10"
              viewBox="0 0 274 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0801758 4.8225V3.72H6.38018V4.8225H0.0801758ZM8.18076 4.8225V3.72H14.4808V4.8225H8.18076ZM16.2813 4.8225V3.72H22.5813V4.8225H16.2813ZM24.3819 4.8225V3.72H30.6819V4.8225H24.3819ZM32.4825 4.8225V3.72H38.7825V4.8225H32.4825ZM40.5831 4.8225V3.72H46.8831V4.8225H40.5831ZM48.6837 4.8225V3.72H54.9837V4.8225H48.6837ZM56.7843 4.8225V3.72H63.0843V4.8225H56.7843ZM64.8849 4.8225V3.72H71.1849V4.8225H64.8849ZM72.9854 4.8225V3.72H79.2854V4.8225H72.9854ZM81.086 4.8225V3.72H87.386V4.8225H81.086ZM89.1866 4.8225V3.72H95.4866V4.8225H89.1866ZM97.2872 4.8225V3.72H103.587V4.8225H97.2872ZM105.388 4.8225V3.72H111.688V4.8225H105.388ZM113.488 4.8225V3.72H119.788V4.8225H113.488ZM134.198 9.225C133.393 9.225 132.698 9.0425 132.113 8.6775C131.533 8.3125 131.085 7.8075 130.77 7.1625C130.455 6.5175 130.298 5.7775 130.298 4.9425C130.298 4.0925 130.458 3.3475 130.778 2.7075C131.098 2.0675 131.55 1.57 132.135 1.215C132.72 0.855 133.408 0.675 134.198 0.675C135.008 0.675 135.705 0.8575 136.29 1.2225C136.875 1.5825 137.323 2.085 137.633 2.73C137.948 3.37 138.105 4.1075 138.105 4.9425C138.105 5.7875 137.948 6.5325 137.633 7.1775C137.318 7.8175 136.868 8.32 136.283 8.685C135.698 9.045 135.003 9.225 134.198 9.225ZM134.198 7.9575C135.038 7.9575 135.663 7.6775 136.073 7.1175C136.483 6.5575 136.688 5.8325 136.688 4.9425C136.688 4.0275 136.48 3.3 136.065 2.76C135.65 2.215 135.028 1.9425 134.198 1.9425C133.633 1.9425 133.168 2.07 132.803 2.325C132.438 2.58 132.165 2.9325 131.985 3.3825C131.805 3.8325 131.715 4.3525 131.715 4.9425C131.715 5.8525 131.925 6.5825 132.345 7.1325C132.765 7.6825 133.383 7.9575 134.198 7.9575ZM139.757 9V0.9H140.949V2.8575L140.754 2.6025C140.849 2.3525 140.972 2.1225 141.122 1.9125C141.277 1.7025 141.449 1.53 141.639 1.395C141.849 1.225 142.087 1.095 142.352 1.005C142.617 0.914999 142.887 0.862499 143.162 0.8475C143.437 0.8275 143.694 0.844999 143.934 0.9V2.1525C143.654 2.0775 143.347 2.0575 143.012 2.0925C142.677 2.1275 142.367 2.25 142.082 2.46C141.822 2.645 141.619 2.87 141.474 3.135C141.334 3.4 141.237 3.6875 141.182 3.9975C141.127 4.3025 141.099 4.615 141.099 4.935V9H139.757ZM154.211 4.8225V3.72H160.511V4.8225H154.211ZM162.312 4.8225V3.72H168.612V4.8225H162.312ZM170.412 4.8225V3.72H176.712V4.8225H170.412ZM178.513 4.8225V3.72H184.813V4.8225H178.513ZM186.613 4.8225V3.72H192.913V4.8225H186.613ZM194.714 4.8225V3.72H201.014V4.8225H194.714ZM202.815 4.8225V3.72H209.115V4.8225H202.815ZM210.915 4.8225V3.72H217.215V4.8225H210.915ZM219.016 4.8225V3.72H225.316V4.8225H219.016ZM227.116 4.8225V3.72H233.416V4.8225H227.116ZM235.217 4.8225V3.72H241.517V4.8225H235.217ZM243.317 4.8225V3.72H249.617V4.8225H243.317ZM251.418 4.8225V3.72H257.718V4.8225H251.418ZM259.519 4.8225V3.72H265.819V4.8225H259.519ZM267.619 4.8225V3.72H273.919V4.8225H267.619Z"
                fill="#9DA6B0"
              />
            </svg>
          </div>
          
          <div className='relative'>
     <label className='block text-sm font-medium leading-6 text-gray-900'>Email</label>
          
          <input
            type="password"
            className='block w-full rounded-md border-0 px-4 pr-6 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none focus:ring-palatinate-blue-600 hover:ring-palatinate-blue-600   transition-all' 
          />
          </div>
           <div className='relative'>
     <label className='block text-sm font-medium leading-6 text-gray-900'>Password</label>
          
          <div className='relative mt-1'>
          <input
            type="password"
           className='block w-full rounded-md border-0 px-4 pr-6 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 outline-none focus:ring-palatinate-blue-600 hover:ring-palatinate-blue-600   transition-all'
          />
          </div>
          <div className='flex items-center justify-between mt-2 text-sm leading-6 absolute top-[-8px] right-0'>
             <Link className='font-semibold text-palatinate-blue-600 hover:text-palatinate-blue-500'>Forgot Password?</Link>
          </div>
          </div>
          {/* Error Messages from server will be shown here. */}
          <div className="text-xs text-center text-red-500">
            {/* {'Err'} */}
          </div>
          <div>
         <Link to={"/name"}>  <button
              type="submit"
              className="flex justify-center w-full px-3 py-2 text-sm font-semibold leading-6 tracking-tight text-white rounded-md shadow-sm bg-palatinate-blue-600 hover:bg-palatinate-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-palatinate-blue-600"
            >
              Sign in
            </button>
            </Link> 
          </div>
        </form>
        {/* Link to Signup */}
        <p className="text-sm text-center text-gray-500">
          Not a member?
          
          <Link
            to={"/signup"}
            className="ml-2 font-semibold leading-6 text-palatinate-blue-600 hover:text-palatinate-blue-500"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
    </>
  )
}

export default Login