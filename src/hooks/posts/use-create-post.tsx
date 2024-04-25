import { useState } from "react";
import postsApi from "../../api/posts-api";

export const useCreatePost = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleCreatePost = async (title: string, name: string) => {
    setIsLoading(true);
    const response = await postsApi.createPost(title, name);
    console.log(response);
    setIsLoading(false);
  };

  return {
    isLoading,
    handleCreatePost,
  };
};
