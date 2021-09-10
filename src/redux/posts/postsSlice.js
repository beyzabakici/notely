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
    addPost: {
      isLoading: false,
      error: null,
    },
    updatePost: {
      isLoading: false,
      error: null,
    },
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
      state.addPost.isLoading = true;
    },
    [addPostAsync.fulfilled]: (state, action) => {
      state.addPost.isLoading = false;
      state.items.push(action.payload);
    },
    [addPostAsync.rejected]: (state, action) => {
      state.addPost.isLoading = false;
      state.addPost.error = action.error.message;
    },
    // update post
    [updatePostAsync.pending]: (state, action) => {
      state.updatePost.isLoading = true;
    },
    [updatePostAsync.fulfilled]: (state, action) => {
      state.updatePost.isLoading = false;
      state.items.map(
        item => item.id === action.payload.id,
        ...state.items,
        action.payload,
      );
    },
    [updatePostAsync.rejected]: (state, action) => {
      state.updatePost.isLoading = true;
      state.deletePost.error = action.error.message;
    },
  },
});

export const selectPosts = state => state.posts.items;
export default postsSlice.reducer;
