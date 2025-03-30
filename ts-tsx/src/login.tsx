import React, { useState } from "react";
import { login } from "./auth"; // Import the function

export const Login: React.FC = () => {
  const [userId, setUserId] = useState<number>(0);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const isAuthenticated = login(userId, password);
    
    if (isAuthenticated) {
      alert("Login Successful!");
      // Redirect or update state here
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="User Id"
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};