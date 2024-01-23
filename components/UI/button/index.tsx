import { IButton } from "@/types/ui/IButton";
import React from "react";

const Button: React.FC<IButton> = ({
  children,
  onClick,
  className,
  disabled,
  type,
}) => {
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        className={className}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
