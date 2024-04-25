<Box sx={{ flexGrow: 1 }} className="h-screen">
    <Grid container spacing={2}>
      <Grid item xs={3} sx={{  height: '100vh' }} className='sticky top-0 left-0 bg-palatinate-blue-50'>
        <SideBar />
      </Grid>
      <Grid item xs={8}>
        <div>
          <div className='h-screen overflow-y-auto ' style={{scrollbarWidth: 'none'}}>
            <div className='space-y-5 px-10 lg:px-16  mt-12'>
              <h1 className='text-3xl font-bold leading-9'> Preview Of Your Website</h1>
              <p className="text-base font-normal leading-6 text-app-text">Preview your website to explore its structure, content, and features before its official launch</p>
            </div>
            <div className='pb-2 px-10 lg:px-16 xl:pr-36 xl:pl:24 h-52 custom-confirmation-modal-scrollbar relative'>
              <div className=' flex-row flex-wrap items-start gap-10 mb-10'>

              
              <div>
      
        <div className='form-control'>
          <div className='mt-8 h-[42px] w-full'>
            <div className='flex relative items-center'>
              <div className='w-full'>
              
                <div className="w-full pt-[calc(19_/_15_*_100%)] relative shadow-md overflow-hidden origin-top-left bg-neutral-300">
                {/* {load ? (
        <Stack spacing={8} className='top-0 left-0 absolute p-4'>
        {/* For variant="text", adjust the height via font-size */}
        
        {/* For other variants, adjust the size with `width` and `height` 
      
        <Skeleton variant="rectangular" width={800} height={60} />
        <div className='flex p-2 flex-row pt-2 gap-6' spacing={5} >
        <div className='flex flex-col gap-5'> 
        <Skeleton variant="rectangular"  width={350} height={10} />
        <Skeleton variant="rectangular"  width={350} height={110} />
        <div className='flex flex-col gap-2'>
        <Skeleton variant="rectangular"  width={280} height={20} />
        <Skeleton variant="rectangular"  width={280} height={20} />
        <Skeleton variant="rectangular"  width={280} height={20} />
        </div>
        <Skeleton variant="rectangular"  width={150} height={40} />
        </div>
        <div>
        <Skeleton variant="rectangular" width={410} height={440} />
        </div>
        </div>

        
       
        
      </Stack>
      ) : ( */}
                  <iframe id="myIframe" title="Child iFrame" className="scale-[0.72] w-[1200px] h-[1600px] absolute left-0 top-0 origin-top-left " src="http://localhost:8080/template1.html" />
                 {/* )}  */}
                  <div className="absolute bottom-0 w-full h-14 flex items-center justify-between bg-white px-5 shadow-template-info">
                    <div className="zw-base-semibold text-app-heading capitalize">Preview</div>
                    {/* Display tick mark if activeIndex matches */}
                
                  </div>
              

                </div>
      
              
              
              
              
              
              
              </div>
            </div>
            <div className='mt-2 flex items-center gap-2 text-app-secondary hover:text-app-accent-hover cursor-pointer'>
              <div className='flex justify-between w-full'>
                {/* Other content */}
              </div>
            </div>
          </div>
        </div>
     
    </div>

           


              </div>

            </div>
           

          </div>
          <div className='sticky bottom-0 pb-8 bg-app-light-background pt-3 px-10 lg:px-16 xl:px-36 z-50 bg-white'>
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
            </div>
        </div>
      </Grid>


    </Grid >

  </Box>