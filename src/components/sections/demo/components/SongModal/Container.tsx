import { FC, ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <section
      className={clsx(
        "flex w-full flex-col rounded-3xl bg-stone-800 bg-opacity-70 p-4 shadow-2xl backdrop-blur-2xl",
        "sm:absolute sm:left-7 sm:top-24 sm:w-80",
        "md:top-7",
      )}
    >
      {children}
    </section>
  );
};
