import { FC, ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className={clsx(
        "right-8 top-8 flex items-center justify-end rounded-2xl bg-stone-500 px-5 py-3 text-white",
        "sm:absolute sm:rounded-[1.25rem] sm:bg-stone-300 sm:bg-opacity-30 sm:backdrop-blur-md",
      )}
    >
      {children}
    </div>
  );
};
