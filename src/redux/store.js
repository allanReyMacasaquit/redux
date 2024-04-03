import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './toolkit/slice/cartSlice';

export const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});
