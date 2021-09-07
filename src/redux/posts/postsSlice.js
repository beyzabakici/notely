import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import api from '../../api/api';

export const getPostsAsync = createAsyncThunk(
  'posts/getPostsAsync/',
  async () => {
    const res = await api.get('/posts');
    return res.data;
  },
);

//TODO:id de donduruyo :d
export const getQueryPostAsync = createAsyncThunk(
  'posts/getQueryPostAsync/',
  async val => {
    const res = await api.get(`/posts?q=${val}`);
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

export const detelePostAsync = createAsyncThunk(
  'posts/deletePostAsync',
  async data => {
    const res = await api.delete(`/posts/${data.id}`);
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
    deletePost: {
      isLoading: false,
      error: null,
    },
    queryPost: {
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
    // TODO:pending ve rejected kullan
    [updatePostAsync.pending]: (state, action) => {
      state.updatePost.isLoading = true;
    },
    [updatePostAsync.fulfilled]: (state, action) => {
      state.updatePost.isLoading = false;
      const {id, title, change_date, content} = action.payload;
      const index = state.items.findIndex(item => item.id === id);
      // TODO:spread ile yapılır mıydı?
      state.items[index] = {
        change_date: change_date,
        content: content,
        id: id,
        title: title,
      };
    },
    [updatePostAsync.rejected]: (state, action) => {
      state.updatePost.isLoading = true;
      state.deletePost.error = action.error.message;
    },
    // delete post
    //TODO:pending ve rejected kullan
    [detelePostAsync.pending]: (state, action) => {
      state.deletePost.isLoading = true;
    },
    [detelePostAsync.fulfilled]: (state, action) => {
      state.deletePost.isLoading = false;
      const {id} = action.payload;
      const index = state.items.findIndex(item => item.id === id);
      state.items.splice(index, 1);
    },
    [detelePostAsync.rejected]: (state, action) => {
      state.deletePost.isLoading = false;
      state.deletePost.error = action.error.message;
    },
    //query post
    [getQueryPostAsync.pending]: (state, action) => {
      state.queryPost.isLoading = true;
    },
    [getQueryPostAsync.fulfilled]: (state, action) => {
      state.queryPost.isLoading = false;
      state.items = action.payload;
    },
    [getQueryPostAsync.rejected]: (state, action) => {
      state.queryPost.isLoading = false;
      state.deletePost.error = action.error.message;
    },
  },
});

export const selectPosts = state => state.posts.items;
export default postsSlice.reducer;
