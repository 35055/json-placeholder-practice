import { Link, useParams } from "react-router-dom";
import { useGetPost } from "../hooks/use-get-post";
import { useDeletePost } from "../hooks/use-delete-post";

export const Post = () => {
  const { id = "" } = useParams<{ id: string }>();
  const { post } = useGetPost(id);
  const { handleDelete } = useDeletePost();

  if (!post) return <h1>Loading...</h1>;

  return (
    <div>
      <h2>
        {post.id} {"  "} {post.title}
      </h2>
      <p>{post.body}</p>
      <div
        style={{
          display: "grid",
          gap: "30px",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <button onClick={() => handleDelete(post.id)}>Delete</button>
        <button>
          <Link to={`/edit/${post.id}`}>Edit</Link>
        </button>
      </div>
    </div>
  );
};
