// src/pages/Login.tsx
import ParticleBackground from "@/components/particles-background";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  username: string;
  password: string;
}

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/users");
    const users = await response.json();
    const user = users.find(
      (user: User) => user.username === username && user.password === password
    );
    localStorage.setItem("user", users.username);

    if (user) {
      alert("Login successful");
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center relative">
        {/* Particle background */}
        <ParticleBackground />

        {/* Konten login di atas particles */}
        <div className="bg-gray-900 bg-opacity-80 rounded-lg shadow-lg p-8 max-w-sm w-full text-center z-10 relative">
          <h1 className="text-4xl font-bold text-neon mb-4">Game Portal</h1>
          <p className="text-gray-400 mb-6">Login to start your adventure</p>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-neon focus:bg-gray-800 transition"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-neon focus:bg-gray-800 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-neon text-black font-bold py-2 rounded hover:bg-green-400 transition"
            >
              Login
            </button>
          </form>

          <p className="text-gray-400 mt-4">
            New player?{" "}
            <a href="/register" className="text-neon hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
