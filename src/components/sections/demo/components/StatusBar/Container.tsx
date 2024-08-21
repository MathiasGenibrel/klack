import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className={
        "right-8 top-8 flex items-center justify-end rounded-2xl bg-stone-400 bg-opacity-90 px-5 py-3 text-white backdrop-blur-lg sm:absolute sm:rounded-[1.25rem] sm:bg-opacity-50"
      }
    >
      {children}
    </div>
  );
};
