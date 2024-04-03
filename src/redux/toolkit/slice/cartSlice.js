import { createSlice } from '@reduxjs/toolkit';
import { CART } from '../../action';

const initialState = {
	cartItems: [],
	itemCount: 0,
	totalPrice: 0,
	isLoading: true,
};

const cartSlice = createSlice({
	initialState,
	name: CART,
});
// console.log(cartSlice);
export default cartSlice.reducer;
