import React, { useState } from 'react';
import { logIn } from "../../utilities/users-service";

export default function LogInForm({ setUser }) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const formData = { name, password };

            const user = await logIn(formData);
            if (user) {
                setUser(user.name);
            } else {
                setError('Login Failed - Check Credentials');
            }
        } catch (error) {
            console.log(error);
            setError('Login Failed - Try Again');
        }
    };

    return (
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>UserName</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                        required 
                    />
                    <label>Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        required 
                    />
                    <button type="submit">LOG IN</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    );
}