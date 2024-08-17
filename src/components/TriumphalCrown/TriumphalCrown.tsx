import React, { FC } from "react";
import { LaurelWreath } from "./LaurelWreath.tsx";

export interface TriumphalCrownProps {
  children: React.ReactNode;
  isHover: boolean;
}

export const TriumphalCrown: FC<TriumphalCrownProps> = ({
  children,
  isHover,
}) => {
  return (
    <>
      <LaurelWreath.Left isHover={isHover} />
      {children}
      <LaurelWreath.Right isHover={isHover} />
    </>
  );
};
