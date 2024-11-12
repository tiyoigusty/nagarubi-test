import ParticleBackground from "@/components/particles-background";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRegister } from "@/hooks/use-register";

function Register() {
  const { register, handleSubmit, handleRegister, showErrorMessages } =
    useRegister();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
      <ParticleBackground />
      <ToastContainer />

      <div className="bg-gray-900 bg-opacity-80 rounded-lg shadow-lg p-8 max-w-md w-full text-center z-10">
        <h1 className="text-4xl font-bold text-neon mb-4">Join the Game</h1>
        <p className="text-gray-400 mb-6">
          Create an account to start your adventure
        </p>

        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Username"
              {...register("username")}
              className="w-full px-4 py-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-neon focus:bg-gray-800 transition"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full px-4 py-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-neon focus:bg-gray-800 transition"
            />
          </div>
          <div className="mb-6 relative">
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="w-full px-4 py-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-neon focus:bg-gray-800 transition"
            />
          </div>
          <div className="mb-6 relative">
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
              className="w-full px-4 py-2 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-neon focus:bg-gray-800 transition"
            />
          </div>

          <button
            type="submit"
            onClick={showErrorMessages}
            className="w-full bg-neon text-black font-bold py-2 rounded hover:bg-green-400 transition"
          >
            Register
          </button>
        </form>

        <p className="text-gray-400 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-neon hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
