import { useState } from "react";
import postsApi from "../api/posts-api";

export const useCreatePost = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleCreatePost = (title: string, name: string) => {
    const response = postsApi.createPost(title, name);
    console.log(response);
    setIsLoading(true);
  };

  return {
    isLoading,
    handleCreatePost,
  };
};
