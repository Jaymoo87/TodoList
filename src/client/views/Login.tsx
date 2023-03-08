import { SwalError } from "jaymooalertmodule";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { POST, TOKEN_KEY } from "../services/fetcher";

const Login = () => {
  const nav = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleUpdateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    POST(isLogin ? "/auth/login" : "/auth/register", form)
      .then((data) => {
        if (data.token) {
          localStorage.setItem(TOKEN_KEY, data.token);
        }
        alert(data.message || "Nice");
        nav("/");
      })
      .catch((error) => SwalError(error, { title: "fucked it up" }));
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-9 col-lg-7 rounded-md">
        <h3>
          {isLogin ? <span className="badge">Log In</span> : <span className="badge">Register</span>}
          <span className="btn btn-primary btn-outline-danger my-2 mx-5 px-3" onClick={() => setIsLogin(!isLogin)}>
            Toggle
          </span>
        </h3>
        <form className="bg-warning p-3 shadow rounded">
          <label>Name:</label>
          <input
            name="name"
            value={form["email"]}
            type="email"
            className="form-control my-1 mb-2"
            onChange={handleUpdateForm}
          />
          <label>Email:</label>
          <input
            name="email"
            value={form["email"]}
            type="email"
            className="form-control my-1 mb-2"
            onChange={handleUpdateForm}
          />
          <label>Password:</label>
          <input
            name="password"
            value={form["password"]}
            type="password"
            className="form-control my-1"
            onChange={handleUpdateForm}
          />

          {form["email"] && form["password"] && (
            <div className="justify-content-center d-flex">
              <div onClick={handleLogin} className="btn btn-primary btn-outline-danger mt-3 mx-5 px-5">
                {isLogin ? "Log in " : "Register"}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
