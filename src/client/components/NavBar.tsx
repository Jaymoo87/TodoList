import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-info d-flex justify-content-center ">
      <Link className="btn btn-primary my-2 mx-5 btn-outline-danger px-5" to="/">
        Home
      </Link>
      <Link className="btn btn-primary btn-outline-danger my-2 mx-5 px-5" to="/login">
        Login
      </Link>
    </div>
  );
};

export default NavBar;
