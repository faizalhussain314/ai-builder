import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  templateid: 0,
  iframeurl: ""
}

export const templateSlice = createSlice({
  name: 'templateDetails',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setTemplateid: (state, action) => {
      state.templateid = action.payload
    },
    setIframeUrl: (state, action) => {
      state.iframeurl = action.payload
      console.log(state, action)
    }
  }
})

export const { setData, setTemplateid, setIframeUrl } = templateSlice.actions

export default templateSlice.reducer