import React, { useState } from 'react';
import { loginUser } from "../../utility/api";
const Common = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      setIsPending(true);
      setUser(null);
      setError(null);
  
      try {
        const response = await loginUser(username, password);
        setUser(response.data);
      } catch (error) {
        setError(error.error);
      } finally {
        setIsPending(false);
      }
    };
  
    return (
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '200px', margin: 'auto' }}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ marginBottom: '10px', padding: '8px' }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ marginBottom: '10px', padding: '8px' }}
          />
        </div>
        <button type="submit" disabled={isPending} style={{ padding: '8px' }}>
          {isPending ? "Logging in..." : "Login"}
        </button>
  
        {user && <p style={{ color: "green" }}>Logged in: {user.email}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    );
  };
export default Common