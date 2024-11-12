import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RegisterFormData, registerSchema } from "@/validation/register-schema";
import { toastOptions } from "@/lib/toast-option";

export const useRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const navigate = useNavigate();

  const showErrorMessages = async () => {
    const fields = ["username", "email", "password", "confirmPassword"];
    for (const field of fields) {
      await trigger(field as keyof RegisterFormData);
      const error = errors[field as keyof RegisterFormData];
      if (error) {
        toast.error(error.message, toastOptions);
        break;
      }
    }
  };

  const handleRegister = async (data: RegisterFormData) => {
    try {
      await axios.post("http://localhost:5000/users", data);
      toast.success("Registration successful", toastOptions);
      navigate("/login");
    } catch (error) {
      if (error) {
        toast.error("Registration failed", toastOptions);
      }
    }
  };

  return { register, handleSubmit, showErrorMessages, handleRegister };
};
