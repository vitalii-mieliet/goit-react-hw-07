import { createSlice } from "@reduxjs/toolkit";
import initContacts from "../data/initContacts.json";

const slice = createSlice({
  name: "contacts",
  initialState: {
    contacts: initContacts,
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, removeContact } = slice.actions;
export const contactsReducer = slice.reducer;
