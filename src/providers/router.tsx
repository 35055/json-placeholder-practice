import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout";
import { Posts } from "../components/posts";
import { CreatePostComponent } from "../components/create-post-component";
import { NoPage } from "../components/no-page";
import { Post } from "../components/post";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Posts />} />
        <Route path="create" element={<CreatePostComponent />} />
        <Route path="edit/:id" element={<CreatePostComponent />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};
