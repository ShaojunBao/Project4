import React, { useState } from 'react';
import { logIn } from "../../utilities/users-service";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LogInForm({ setUser }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { name, password };
      const user = await logIn(formData);
      if (user) {
        setUser(user);
        navigate('/')
      } else {
        setError('Login Failed - Check Credentials');
      }
    } catch (error) {
      console.log(error);
      setError('Login Failed - Try Again');
    }
  };

 

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">UserName</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">LOG IN</button>
        </form>
      </div>
      {error && <div className="alert alert-danger mt-3" role="alert">{error}</div>}
    </div>
  );
}