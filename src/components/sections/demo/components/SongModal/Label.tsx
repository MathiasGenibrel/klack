import { FC } from "react";

interface LabelProps {
  children: string;
}

export const Label: FC<LabelProps> = ({ children }) => {
  return (
    <span className={"px-2 text-sm text-amber-50 opacity-35"}>{children}</span>
  );
};
