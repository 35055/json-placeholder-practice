import { useEffect, useState } from "react";
import { useCreatePost } from "../hooks/posts/use-create-post";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPost } from "../hooks/posts/use-get-post";
import { useEditPosts } from "../hooks/posts/use-edit-post";

export const CreatePostComponent = () => {
  const { id = "" } = useParams<{ id: string }>();
  const navigate = useNavigate();
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
          navigate("/");
        }}
      >
        SEND
      </button>
    </div>
  );
};
