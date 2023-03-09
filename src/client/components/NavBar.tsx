import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-navcolor d-flex justify-content-center p-4 ">
      <Link className="btn btn-btncolor m-2 mx-5  px-5" to="/">
        Home
      </Link>
      <Link className="btn btn-btncolor  m-2 mx-5 px-5" to="/login">
        Login
      </Link>
    </div>
  );
};

export default NavBar;
