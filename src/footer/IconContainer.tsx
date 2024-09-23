import { FC, ReactNode } from "react";
import clsx from "clsx";

interface IconContainerProps {
  children: ReactNode;
  link: string;
}

export const IconContainer: FC<IconContainerProps> = ({ children, link }) => {
  return (
    <a
      href={link}
      target={"_blank"}
      className={clsx(
        "group flex cursor-pointer rounded-lg bg-stone-800 bg-opacity-10 p-2 text-stone-500 transition-colors duration-200",
        "hover:text-stone-800",
        "focus:text-stone-800",
      )}
    >
      {children}
    </a>
  );
};
