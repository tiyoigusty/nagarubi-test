import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginFormData, loginSchema } from "@/validation/login-schema";
import { toastOptions } from "@/lib/toast-option";

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();

  const showErrorMessages = async () => {
    const fields = ["username", "password"];
    for (const field of fields) {
      await trigger(field as keyof LoginFormData);
      const error = errors[field as keyof LoginFormData];
      if (error) {
        toast.error(error.message, toastOptions);
        break;
      }
    }
  };

  const handleLogin = async (data: LoginFormData) => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      const user = response.data.find(
        (user: { username: string; password: string }) =>
          user.username === data.username && user.password === data.password
      );

      if (user) {
        localStorage.setItem("user", user.username);
        toast.success("Login successful", toastOptions);
        navigate("/");
      } else {
        toast.error("Invalid username or password", toastOptions);
      }
    } catch (error) {
      if (error) {
        toast.error("Failed to login", toastOptions);
      }
    }
  };

  return { register, handleSubmit, handleLogin, showErrorMessages };
};
