import { ReactNode, CSSProperties, MouseEvent } from "react";
import "../scss/Button.scss";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
  disabled?: boolean;
}

function Button({
  children,
  className,
  onClick,
  style,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={`btn ${className || ""}`}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;

