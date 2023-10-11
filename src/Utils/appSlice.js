import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleHamburgerMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeHamburgerMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleHamburgerMenu, closeHamburgerMenu } = appSlice.actions;
export default appSlice.reducer;
