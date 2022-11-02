import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const contactSlice = createSlice({
  name: 'pohonebook',
  initialState,
  reducers: {
    setContact(state, action) {
      state.contacts.items.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.contacts.items.findIndex(
        contact => contact.id !== action.payload
      );
      state.contacts.items.splice(index, 1);
    },
    setFilter(state, action){
      state.contacts.filter = action.payload;
  },
}
});

const persistConfig = {
  key: 'pohonebook',
  storage,
};

export const persistedReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);
export const { setContact, deleteContact, setFilter } = contactSlice.actions;
// export const contactReducer = contactSlice.reducer;
