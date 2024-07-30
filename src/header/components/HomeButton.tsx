import { FC } from "react";
import { CompanyLogo } from "./CompanyLogo.tsx";
import { useIsHover } from "../../hooks/useIsHover.ts";

export const HomeButton: FC = () => {
  const hover = useIsHover();

  return (
    <a
      href={"/"}
      className={"flex items-center gap-4"}
      onMouseEnter={hover.set}
      onMouseLeave={hover.unset}
    >
      <CompanyLogo isHover={hover.enabled} />
      <span className={"font-sans text-2xl font-bold"}>Klack</span>
    </a>
  );
};
