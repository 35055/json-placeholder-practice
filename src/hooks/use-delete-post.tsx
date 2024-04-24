import postsApi from "../api/posts-api";

export const useDeletePost = () => {
  const handleDelete = (id: number) => {
    const response = postsApi.deletePost(id);
    console.log(response);
  };

  return {
    handleDelete,
  };
};
