import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <ul
      className={"flex flex-wrap justify-between gap-8 gap-y-12"}
      aria-description={"Features of Klack"}
    >
      {children}
    </ul>
  );
};
