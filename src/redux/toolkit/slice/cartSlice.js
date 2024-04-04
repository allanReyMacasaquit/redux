import { createSlice } from '@reduxjs/toolkit';
import { CART } from '../../action';
import cartItems from '../../../data';

const initialState = {
	cartItems: cartItems,
	itemCount: 1,
	totalPrice: 0,
	isLoading: true,
};

const cartSlice = createSlice({
	initialState,
	name: CART,
	reducers: {
		clearCart: (state) => {
			state.cartItems = [];
		},
		removeItem: (state, { payload }) => {
			state.cartItems = state.cartItems.filter((item) => item.id !== payload);
		},
	},
});
export const { clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
