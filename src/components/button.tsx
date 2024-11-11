interface ButtonProps {
  label: string;
  color: "green" | "orange";
  width: "full" | "default";
  onClick?: () => void;
}

export function MyButton({ label, color, width }: ButtonProps) {
  const baseStyles =
    "px-6 py-3 text-white font-bold rounded-lg shadow-md hover:opacity-90 transition-all";

  const colorStyles =
    color === "green"
      ? "bg-neon shadow-green-200 hover:bg-green-400"
      : "bg-orange-500 shadow-orange-200 hover:bg-orange-600";

  const widthStyles = width === "full" ? "w-full" : "";

  return (
    <button className={`${baseStyles} ${colorStyles} ${widthStyles}`}>
      {label}
    </button>
  );
}
