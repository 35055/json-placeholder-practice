import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "30px",
          }}
        >
          <li>
            <Link to="/">Posts</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
