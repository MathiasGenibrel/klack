import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className={
        "absolute right-8 top-8 flex items-center rounded-[1.25rem] bg-stone-400 bg-opacity-50 px-5 py-3 text-white backdrop-blur-lg"
      }
    >
      {children}
    </div>
  );
};
