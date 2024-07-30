import { FC, ReactNode } from "react";

interface MarkProps {
  children: ReactNode;
}

export const Mark: FC<MarkProps> = ({ children }) => {
  return (
    <mark
      className={
        "bg-transparent font-extrabold text-stone-800 shadow-[inset_0_-0.5em_0_0_rgb(240,171,252)]"
      }
    >
      {children}
    </mark>
  );
};
