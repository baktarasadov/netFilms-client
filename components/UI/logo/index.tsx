import { ILogoProps } from "@/types/ui/ILogo";
import Link from "next/link";
import React, { memo } from "react";

const Logo: React.FC<ILogoProps> = ({ children, href, className }) => {
  return (
    <>
      <Link className={className} href={href}>
        {children}
      </Link>
    </>
  );
};

export default memo(Logo);
