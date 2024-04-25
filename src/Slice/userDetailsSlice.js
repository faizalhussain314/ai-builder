import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  businessName: '',
  description: '',
  images: [],
  designs: {},
  templateid: "",
  templatename: "",
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setBusinessName: (state, action) => {
      state.businessName = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    addImage: (state, action) => {
      state.images.push(action.payload);
    },
    removeImage: (state, action) => {
      state.images = state.images.filter(img => img !== action.payload);
    },
    setTemplateId: (state, action) => {
      state.templateid = action.payload;
    },
    setTemplatename: (state, action) => {
      state.templatename = action.payload;
    },
    addDesign: (state, action) => {
      state.designs.push(action.payload);
    },
    removeDesign: (state, action) => {
      state.designs = state.designs.filter(design => design.templateId !== action.payload.templateId);
    },
    clearUserData: (state) => {
      state.businessName = '';
      state.description = '';
      state.images = [];
      state.designs = [];
    },
  },
});

export const {
  setBusinessName,
  setDescription,
  addImage,
  removeImage,
  addDesign,
  removeDesign,
  clearUserData,
  setTemplatename,
  setTemplateId
} = userDataSlice.actions;

export default userDataSlice.reducer;
