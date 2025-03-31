import React, { useState } from "react";
import { login } from "../../backend-mas/auth"; // Import the function
import { watch } from "fs";

export const Login: React.FC = () => {
  const [userId, setUserId] = useState<number|undefined>();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const handleLogin = async (event: React.FormEvent) => {
  //   event.preventDefault();
    
  //   const isAuthenticated = login(userId, password);
    
  //   if (isAuthenticated) {
  //     alert("Login Successful!");
  //     // Redirect or update state here
  //   } else {
  //     setError("Invalid username or password");
  //   }
  // };

  const handleLogin = ()=> {
    let variableId = document.getElementById('Id-input') as HTMLInputElement;
    let passwordId = document.getElementById('Pw-input') as HTMLInputElement;

    if (!variableId || !passwordId) {
      return;
    }

    setUserId(Number(variableId.value));
    setPassword(String(passwordId.value));
    
    //const isAuthenticated = login(userId, password);
  };

  return (
    <div>
      <h2>Login Page</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input id= 'Id-input'
          type="text"
          placeholder="User Id"
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
        />
        <input id = 'Pw-input'
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