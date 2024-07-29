import { FC, useState } from "react";
import { CompanyLogo } from "./CompanyLogo.tsx";

export const HomeButton: FC = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <a
      href={"/"}
      className={"flex items-center gap-4"}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <CompanyLogo isHover={isHover} />
      <span className={"font-sans text-2xl font-bold"}>Klack</span>
    </a>
  );
};
