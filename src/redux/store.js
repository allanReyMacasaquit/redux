import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './toolkit/slice/cartSlice';
import modalReducer from './toolkit/slice/modalSlice';

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		modal: modalReducer,
	},
});
