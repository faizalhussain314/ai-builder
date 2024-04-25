import { configureStore } from '@reduxjs/toolkit';
import activeStepReducer from '../Slice/activeStepSlice';
import  userDataReducer  from '../Slice/userDetailsSlice';
import templateSliceReducer from '../Slice/Templatedetails';


const store = configureStore({
  reducer: {
    activeStep: activeStepReducer,
    userData: userDataReducer ,
    templatedetails : templateSliceReducer ,
  },
  devTools:true
});

export default store;