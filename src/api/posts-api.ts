import { baseApi } from "../base/base-api";
import { TPost } from "../hooks/posts/use-get-posts";

class PostsApi {
  getPost = async (id: string): Promise<TPost> => {
    const response = await fetch(`${baseApi}/posts/${id}`);
    const data: TPost = await response.json();
    return data;
  };

  getPosts = async (): Promise<TPost[]> => {
    const response = await fetch(`${baseApi}/posts`);
    const data: TPost[] = await response.json();
    return data;
  };

  deletePost = async (id: number) => {
    const responce = fetch(`${baseApi}/posts/${id}`, {
      method: "DELETE",
    });
    return responce;
  };

  createPost = async (title: string, name: string) => {
    const response = await fetch(`${baseApi}/posts`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: name,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    return response;
  };

  editPost = async (title: string, name: string, id: string) => {
    const response = await fetch(`${baseApi}/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        title: title,
        body: name,
        userId: 1,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    return response;
  };
}

export default new PostsApi();
