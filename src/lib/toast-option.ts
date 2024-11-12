import { ToastOptions } from "react-toastify";

export const toastOptions: ToastOptions = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  draggable: true,
  pauseOnHover: true,
  style: {
    backgroundColor: "#1e1e1e",
    color: "#00ff00",
    borderRadius: "8px",
    fontFamily: "'Press Start 2P', cursive",
    textAlign: "center",
    border: "2px solid #00ff00",
    boxShadow: "0 0 10px #00ff00",
  },
};
