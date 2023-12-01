import React from "react";
import { Link, Outlet } from "react-router-dom";

const LinkLayout = () => {
  return (
    <div className="header">
      <Link className="link" to={"/"}>
        Home
      </Link>
      {/* <Link to={"/main"}>Main Page</Link> */}
      <Link className="link" to={"/about"}>
        About
      </Link>

      <Outlet />
    </div>
  );
};

export default LinkLayout;
