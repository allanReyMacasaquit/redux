import { createSlice } from '@reduxjs/toolkit';
import { CART } from '../../action';
import cartItems from '../../../data';

const initialState = {
	cartItems: cartItems,
	itemCount: 2,
	totalPrice: 0,
	isLoading: true,
};

const cartSlice = createSlice({
	initialState,
	name: CART,
});
// console.log(cartSlice);
export default cartSlice.reducer;
