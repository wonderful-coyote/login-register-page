import React, { useState } from "react";

export const SignIn = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit({ username, email });
  };

  return (
    <>
      <div className="auth-form-container">
        <h2>Sign In</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="youremail@email.com"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="********"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="signup-btn" type="submit">Sign In</button>
        </form>
        <a className="link-btn" onClick={() => props.onFormSwitch("register")}>Don't have an account? Register here.</a>
      </div>
    </>
  );
};
