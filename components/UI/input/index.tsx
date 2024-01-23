import { IInput } from "@/types/ui/IInput";
import React, { memo } from "react";

const Input: React.FC<IInput> = ({
  type,
  id,
  className,
  placeholder,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <>
      <div>
        <input
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          type={type}
          className={`outline-none  ${className}`}
        />
      </div>
    </>
  );
};

export default memo(Input);
