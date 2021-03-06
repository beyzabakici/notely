import api from '../api/api';

export const deletePost = async (item, posts) => {
  await api.delete(`/posts/${item.id}`);
  return posts.filter(post => post.id !== item.id);
};
