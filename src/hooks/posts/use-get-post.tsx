import { useEffect, useState } from "react";
import { TPost } from "./use-get-posts";
import postsApi from "../../api/posts-api";

export const useGetPost = (id: string) => {
  const [post, setPost] = useState<TPost>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleFetch = async (id: string) => {
      setIsLoading(true);
      const data = await postsApi.getPost(id);
      setPost(data);
      setIsLoading(false);
    };

    if (id) handleFetch(id);
  }, [id]);

  return {
    post,
    isLoading,
  };
};
