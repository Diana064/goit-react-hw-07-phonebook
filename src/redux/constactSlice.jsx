import { createSlice } from '@reduxjs/toolkit';
import { deleteContacts } from './operations';
import { addContacts, getContacts } from './operations';

export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    isLoading: false,
    items: [],
    error: null,
  },
  // reducers: {
  //   addContact(state, action) {
  //     state.items.push(action.payload);
  //   },
  //   deleteContact(state, action) {
  //     state.items = state.items.filter(
  //       contact => contact.id !== action.payload
  //     );
  //   },
  // },
  extraReducers: {
    [getContacts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getContacts.fulfilled]: (state, action) => {
      state.items = action.payload.sort((a, b) => a.name.localeCompare(b.name));
      state.isLoading = false;
    },
    [getContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContacts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addContacts.fulfilled]: (state, action) => {
      state.items.unshift(action.payload);
      state.isLoading = false;
    },
    [addContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContacts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addContact, deleteContact } = ContactsSlice.actions;
