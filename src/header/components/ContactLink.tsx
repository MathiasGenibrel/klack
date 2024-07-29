import { FC } from "react";
import clsx from "clsx";
import { ChatLine } from "../../assets/icon/ChatLine.tsx";

interface ButtonProps {}

export const ContactLink: FC<ButtonProps> = () => {
  return (
    <a
      href={"#"}
      className={clsx(
        "flex items-center gap-4 rounded-2xl bg-stone-800 bg-opacity-5 px-5 py-4 text-lg font-bold outline-none transition duration-300",
        "hover:bg-stone-800/5",
        "focus:ring-2 focus:ring-fuchsia-300",
        "sm:bg-opacity-0",
        "dark:bg-orange-50/5 dark:hover:bg-orange-50/5",
      )}
    >
      <ChatLine />
      <span className={"hidden sm:block"}>Contact</span>
    </a>
  );
};
