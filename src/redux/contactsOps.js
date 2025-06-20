import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// https://685427ab5470323abe94ec60.mockapi.io/contacts

const phonebookAPI = axios.create({
  baseURL: "https://685427ab5470323abe94ec60.mockapi.io",
});

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const { data } = await phonebookAPI.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await phonebookAPI.post("/contacts", contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  "contacts/removeContact",
  async (contactID, thunkAPI) => {
    try {
      const { data } = await phonebookAPI.delete(`/contacts/${contactID}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
