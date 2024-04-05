import { createSlice } from '@reduxjs/toolkit';
import { MODAL } from '../../action';
const initialState = {
	isOpen: false,
};

const modalSlice = createSlice({
	initialState,
	name: MODAL,
	reducers: {
		openModal: (state, action) => {
			state.isOpen = true;
		},
		closeModal: (state, action) => {
			state.isOpen = false;
		},
	},
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
