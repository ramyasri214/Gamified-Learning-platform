import React, { useState } from "react";
import axios from "axios";

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);

    const register = async () => {
        await axios.post("http://localhost:5000/register", { username, password });
        alert("User Registered");
    };

    const login = async () => {
        const res = await axios.post("http://localhost:5000/login", { username, password });
        setUser(res.data.user);
    };

    return (
        <div>
            <h1>Gamified Learning</h1>
            {!user ? (
                <div>
                    <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={register}>Register</button>
                    <button onClick={login}>Login</button>
                </div>
            ) : (
                <div>
                    <h2>Welcome, {user.username}</h2>
                    <p>Points: {user.points}</p>
                    <p>Badges: {user.badges.join(", ")}</p>
                </div>
            )}
        </div>
    );
}

export default App;
