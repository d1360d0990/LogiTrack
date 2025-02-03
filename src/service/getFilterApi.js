import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL, booksURL, filters } from "../App";

export const getFilteredBooks = createAsyncThunk(
  "filteredBooks/getFilteredBooks",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const paramFilter = payload.filterType;
      const response = await axios.get(`${baseURL}${booksURL}${filters}`, {
        params: {
          [paramFilter]: payload.searchQuery,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);