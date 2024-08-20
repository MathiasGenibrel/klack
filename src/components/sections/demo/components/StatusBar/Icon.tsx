import { FC, ReactNode } from "react";

interface IconProps {
  path: ReactNode;
}

export const Icon: FC<IconProps> = ({ path }) => {
  return (
    <div
      className={
        "-mx-[2px] rounded px-3.5 py-1 transition hover:bg-orange-50 hover:bg-opacity-20"
      }
    >
      <svg
        className="h-5 w-5 fill-current text-orange-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 28 28"
        aria-hidden="true"
      >
        {path}
      </svg>
    </div>
  );
};
