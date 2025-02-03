import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  anchorElNav: null,
  anchorElUser: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setAnchorElNav: (state, action) => {
      state.anchorElNav = action.payload;
    },
    setAnchorElUser: (state, action) => {
      state.anchorElUser = action.payload;
    },
  },
});

export const { setAnchorElNav, setAnchorElUser } = uiSlice.actions;

export default uiSlice.reducer;