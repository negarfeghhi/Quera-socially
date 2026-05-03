type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  type = "button",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`py-2 px-4 rounded-md text-white bg-black disabled:opacity-50 disabled:cursor-not-allowed${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
