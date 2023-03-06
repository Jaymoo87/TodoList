import React, { useState } from "react";
import { POST, TOKEN_KEY } from "../services/fetcher";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleUpdateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    POST(isLogin ? "/auth/login" : "/auth/register", form).then((data) => {
      if (data.token) {
        localStorage.setItem(TOKEN_KEY, data.token);
      }
      alert(data.message || "Nice");
    });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-9 col-lg-7">
        <h6>
          Currently {isLogin ? "logging in" : "registering"}.{" "}
          <span className="bg-secondary btn" onClick={() => setIsLogin(!isLogin)}>
            Toggle
          </span>
        </h6>
        <form className="bg-light p-3 shadow">
          <label>Email:</label>
          <input name="email" value={form["email"]} type="text" className="form-control" />
          <label>Password:</label>
          <input name="password" value={form["password"]} type="password" className="form-control" />

          {form["email"] && form["password"] && (
            <div onClick={handleLogin} className="btn btn-primary">
              {" "}
              {isLogin ? "logging in " : "registering"}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
