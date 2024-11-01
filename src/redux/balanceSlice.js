// balanceSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balanceHidden: true,
  balance: 50000, // example balance
  user: 'Kristanto Wibowo',
};

export const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    toggleBalance: (state) => {
      state.balanceHidden = !state.balanceHidden;
    },
  },
});

export const { toggleBalance } = balanceSlice.actions;
export default balanceSlice.reducer;
