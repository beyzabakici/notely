import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import api from '../../api/api';

export const getPostsAsync = createAsyncThunk(
  'posts/getPostsAsync/',
  async () => {
    const res = await api.get('/posts');
    return res.data;
  },
);

export const addPostAsync = createAsyncThunk(
  'posts/addPostAsync',
  async data => {
    const res = await api.post('/posts', data);
    return res.data;
  },
);

export const updatePostAsync = createAsyncThunk(
  'posts/updatePostAsync',
  async data => {
    const res = await api.put(`/posts/${data.id}`, data);
    return res.data;
  },
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    addNewPostLoading: false,
    addNewPostError: null,
  },
  reducers: {},
  extraReducers: {
    // get posts
    [getPostsAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getPostsAsync.fulfilled]: (state, action) => {
      (state.isLoading = false), (state.items = action.payload);
    },
    [getPostsAsync.rejected]: (state, action) => {
      (state.isLoading = false), (state.error = action.error.message);
    },
    // add post
    [addPostAsync.pending]: (state, action) => {
      state.addNewPostLoading = true;
    },
    [addPostAsync.fulfilled]: (state, action) => {
      (state.addNewPostLoading = false), state.items.push(action.payload);
    },
    [addPostAsync.rejected]: (state, action) => {
      (state.addNewPostLoading = false),
        (state.addNewPostError = action.error.message);
    },
    // update post
    [updatePostAsync.fulfilled]: (state, action) => {
      const {id, title, change_date, content} = action.payload;
      const index = state.items.findIndex(item => item.id == id);
      state.items[index] = {
        change_date: change_date,
        content: content,
        id: id,
        title: title,
      };
    },
  },
});

export const selectPosts = state => state.posts.items;
export default postsSlice.reducer;
