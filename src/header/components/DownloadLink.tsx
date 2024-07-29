import { FC } from "react";
import clsx from "clsx";
import { Apple } from "../../assets/icon/Apple.tsx";

interface ButtonProps {}

export const DownloadLink: FC<ButtonProps> = () => {
  return (
    <a
      href={"#"}
      className={clsx(
        "hidden items-center justify-center gap-2 overflow-hidden rounded-2xl bg-stone-800 bg-opacity-5 px-5 py-4 text-lg font-bold outline-none transition duration-300",
        "focus:ring-2 focus:ring-purple-400",
        "sm:flex",
      )}
    >
      <Apple />
      Download for Mac
    </a>
  );
};
