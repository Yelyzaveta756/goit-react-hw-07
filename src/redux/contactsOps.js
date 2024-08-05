import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

axios.defaults.baseURL = 'https://66b0ae2e6a693a95b539c148.mockapi.io'

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    // Використовуємо символ підкреслення як ім'я першого параметра,
    // тому що в цій операції він нам не потрібен
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts");
        // При успішному запиті повертаємо проміс із даними
        return response.data;
      } catch (error) {
        // При помилці запиту повертаємо проміс
        // який буде відхилений з текстом помилки
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContacts, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", newContacts);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
  )

  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
  )