import { Link } from "react-router-dom";
import { useGetPosts } from "../hooks/use-get-posts";

export const Posts = () => {
  const { posts, isLoading } = useGetPosts();

  if (!isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <div
        style={{
          border: "1px solid black",
        }}
      >
        {posts.map((post) => (
          <Link
            to={`post/${post.id}`}
            key={post.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              border: "1px solid black",
              cursor: "pointer",
            }}
          >
            <div>{post.id}</div>
            <div>{post.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};
