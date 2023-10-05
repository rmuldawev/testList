// postSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const baseService = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = createAsyncThunk("ListSlice/getPosts", async () => {
  const response = await baseService.get("/posts");
  const data = response.data;
  return data;
});

export interface PostsProps {}

const initialState = {
  posts: [],
  currentPage: 1,
  filterText: "",
  sortOrder: "asc",
};

const ListSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFilterText: (state, action) => {
      state.filterText = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
});

export const { setPosts, setCurrentPage, setFilterText, setSortOrder } =
  ListSlice.actions;
export const selectPosts = (state: RootState) => state.data.posts;

export default ListSlice.reducer;
