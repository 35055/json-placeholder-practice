import { useEffect, useState } from "react";
import { useCreatePost } from "../hooks/use-create-post";
import { useParams } from "react-router-dom";
import { useGetPost } from "../hooks/use-get-post";
import { useEditPosts } from "../hooks/use-edit-post";

export const CreatePostComponent = () => {
  const { id = "" } = useParams<{ id: string }>();
  const { post } = useGetPost(id);
  const { handleCreatePost } = useCreatePost();
  const { handleEditPost } = useEditPosts();
  const [title, setTitle] = useState<string>("");
  const [name, setName] = useState<string>("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setName(post.body);
    }
  }, [post]);

  if (!post) return <h1>Loading...</h1>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
        style={{
          width: "300px",
          height: "30px",
        }}
      />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
        style={{
          width: "300px",
          height: "30px",
        }}
      />
      <button
        onClick={() => {
          id ? handleEditPost(title, name, id) : handleCreatePost(title, name);
          setTitle("");
          setName("");
        }}
      >
        SEND
      </button>
    </div>
  );
};
