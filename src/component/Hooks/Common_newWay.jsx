import React, { useActionState } from 'react';
import { loginUser } from "../../utility/api";


const CommonNew = () => {
 const[user, handlesubmit, isPending]=  useActionState(login, {
data: null,
error: null
 })
 async function login(previousState, formData) {
  const username = formData.get("username");
  const password = formData.get("password");
  try {
    const response = await loginUser(username, password);
    return { error: null, data: response.data };
  } catch (error) {
    return { ...previousState, error: error.error };
  }
}
  
    return (
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '200px', margin: 'auto' }}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username" 
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
            name="password" 
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
export default CommonNew