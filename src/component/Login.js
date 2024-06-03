import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import loaderGIF from "../Images/load.gif"; // Import your loader GIF file

const Login = ({ users }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setTimeout(() => {
        setSuccess("Login successful!");
        setIsLoading(false);
        navigate("/home"); // Redirect to homepage if login is successful
        setTimeout(() => {
          setSuccess(""); // Clear success message after 2 seconds
        }, 2000);
      }, 2000);
    } else {
      setError("Invalid credentials");
      setTimeout(() => {
        setError(""); // Clear error message after 3 seconds
      }, 3000);
      setIsLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        {isLoading && <img src={loaderGIF} alt="Loading..." />}{" "}
        {/* Loader GIF */}
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
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
