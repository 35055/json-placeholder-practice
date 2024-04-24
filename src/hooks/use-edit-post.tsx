import { useState } from "react";
import postsApi from "../api/posts-api";

export const useEditPosts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleEditPost = (title: string, name: string, id: string) => {
    const responce = postsApi.editPost(title, name, id);
    console.log(responce);
    setIsLoading(false);
  };

  return {
    isLoading,
    handleEditPost,
  };
};
