import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface Dashboard {
  isAsideMenuOpen: boolean;
}

const initialState: Dashboard = {
  isAsideMenuOpen: true,
};

export const dashboardSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleAsideMenu: (state) => {
      state.isAsideMenuOpen = !state.isAsideMenuOpen;
    },
  },
});

export const { toggleAsideMenu } = dashboardSlice.actions;
export default dashboardSlice.reducer;
