import React from 'react'

import Grid from '@mui/material/Grid';
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';








function SideBar() {
  const steps = [
    {
      label: 'Name',
      description: `What is the name?`,
    },
    {
      label: 'Describe',
      description:
        'Some details pleas',
    },
    {
      label: 'Design',
      description: `Choose a structure for your website`,
    },
    {
      label: 'Preview',
      description: `Preview your website to explore it`,
    },
    {
      label: 'Done',
      description: `Your website is ready!`,
    },
  ];


  const activeStep = useSelector(state => state.activeStep.value)













  return (
    <>

      <Grid className="bg-palatinate-blue-50"  >
        <Box >
          <div className='w-full '>
            <img className='w-60 m-6 max-w-80' src="https://react-dev.gravitywrite.com/assets/gravityWrite-d8fa8d1d.svg" alt="" srcset="" />
          </div>
        </Box>
        <Box sx={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', margin: 'auto', width: '100%' }}>
          <Stepper activeStep={activeStep} orientation="vertical" StepIconProps={{ classes: { root: 'bg-palatinate-blue-600 text-palatinate-blue-600' } }}>
            {steps.map((step, index) => (
              <Step key={step.label} className='text-sm text-black font-bold'>
                <StepLabel
                  optional={
                    index === 5 ? (
                      <Typography variant="caption">Your Website Is Ready</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      { /* <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1,backgroundColor:'#f97316','&:hover': {
                      backgroundColor: '#c2410c',
                    } }}
                    
                    
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1, color:'#f97316' }}

                  >
                    Back
                  </Button>

                  {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button  sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
                  */ }
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>

        </Box>
      </Grid >

    </>
  )
}

export default SideBar