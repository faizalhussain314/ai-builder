import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: 0
};

export const activeStepSlice = createSlice({
  name: 'activeStep',
  initialState,
  reducers: {
    incrementStep: (state) => {
      state.value += 1;
    },
    decrementStep: (state) => {
      state.value -= 1;
    }
  }
});

export const { incrementStep, decrementStep } = activeStepSlice.actions;


export default activeStepSlice.reducer;
