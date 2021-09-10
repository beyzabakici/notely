import {mutate} from 'swr';
import api from '../api/api';

export const deletePost = async (item, posts) => {
  await api.delete(`/posts/${item.id}`);
  return posts.filter(post => post.id !== item.id);
};

export const queryPost = async (val, posts) => {
  const res = await api.get(`/posts?q=${val}`);
  mutate({data: res.data});
};
