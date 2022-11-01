import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
	name: 'contacts',
	initialState: [],
	reducers: {
		setStatusContact(state, action) {
			state.push(action.payload);
		},
		deleteContact(state, action) {
			const index = state.findIndex(contact => contact.id !== action.payload);
			state.splice(index, 1);
		},
	},
});

export const { setStatusContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
