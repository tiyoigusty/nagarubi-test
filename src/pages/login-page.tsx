import ParticleBackground from "@/components/particles-background";
import { useLogin } from "@/hooks/use-login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const { register, handleLogin, handleSubmit, showErrorMessages } = useLogin();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center relative">
      <ParticleBackground />
      <ToastContainer />

      <div className="bg-gray-900 bg-opacity-80 rounded-lg shadow-lg p-8 max-w-sm w-full text-center z-10 relative">
        <h1 className="text-4xl font-bold text-neon mb-4">Game Portal</h1>
        <p className="text-gray-400 mb-6">Login to start your adventure</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            showErrorMessages();
            handleSubmit(handleLogin)();
          }}
        >
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              {...register("username")}
              className="w-full px-4 py-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-neon focus:bg-gray-800 transition"
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
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
  );
}

export default Login;
