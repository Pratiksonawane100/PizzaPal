import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

const Login = ({ users }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      navigate("/home"); // Redirect to homepage if login is successful
    } else {
      setTimeout(() => {
        setError("Invalid credentials");
      });
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        {error && <div className="error-message">{error}</div>}
        <h2 className="login-title">Sign In</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="login-button" type="submit">
            Sign In
          </button>
        </form>
        <div className="signup-link">
          New to PizzaPal? <a href="/">Sign up now</a>.
        </div>
      </div>
    </div>
  );
};

export default Login;
