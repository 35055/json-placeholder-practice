import { useEffect, useState } from "react";
import postsApi from "../../api/posts-api";

export type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const useGetPosts = () => {
  const [posts, setPosts] = useState<TPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await postsApi.getPosts();
      setPosts(data);
      setIsLoading(true);
    };

    fetchData();
  }, []);

  return {
    posts,
    isLoading,
  };
};
