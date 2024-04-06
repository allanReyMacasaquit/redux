import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CART } from '../../action';
import cartItems from '../../../data';
import axios from 'axios';

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
	cartItems: [],
	itemCount: 1,
	totalPrice: 0,
	isLoading: false,
};

export const getCartItems = createAsyncThunk(
	'cart/getCartItems',
	async (_, thunkAPI) => {
		try {
			const res = await axios(url);
			const data = res.data;
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue('something went wrong');
		}
	}
);

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
		increaseItem: (state, { payload }) => {
			const plusItem = state.cartItems.find((item) => item.id === payload);
			plusItem.amount = plusItem.amount + 1;
		},
		decreaseItem: (state, { payload }) => {
			const itemIndex = state.cartItems.findIndex(
				(item) => item.id === payload
			);
			if (itemIndex !== -1) {
				const currentItem = state.cartItems[itemIndex];
				const updatedAmount = currentItem.amount - 1;
				if (updatedAmount === 0) {
					state.cartItems.splice(itemIndex, 1);
				} else {
					state.cartItems[itemIndex].amount = updatedAmount;
				}
			}
		},
		calculateTotals: (state) => {
			let itemCount = 0;
			let totalPrice = 0;

			state.cartItems.forEach((item) => {
				itemCount += item.amount;
				totalPrice += item.amount * item.price;
			});
			state.itemCount = itemCount;
			state.totalPrice = totalPrice.toFixed(2);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCartItems.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getCartItems.fulfilled, (state, action) => {
				state.isLoading = false;
				state.cartItems = action.payload;
				state.error = null;
			})
			.addCase(getCartItems.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message;
			});
	},
});
export const {
	clearCart,
	removeItem,
	increaseItem,
	decreaseItem,
	calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
