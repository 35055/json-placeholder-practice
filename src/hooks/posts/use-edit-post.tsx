import { useState } from "react";
import postsApi from "../../api/posts-api";

export const useEditPosts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleEditPost = async (title: string, name: string, id: string) => {
    setIsLoading(true);
    const responce = await postsApi.editPost(title, name, id);
    console.log(responce);
    setIsLoading(false);
  };

  return {
    isLoading,
    handleEditPost,
  };
};
