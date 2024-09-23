import { FC, ReactNode } from "react";
import { Swift } from "./icons/Swift.tsx";

interface SuperProps {
  children: ReactNode;
}

export const Super: FC<SuperProps> = ({ children }) => {
  return <span className="align-super text-sm">{children}</span>;
};

export const CreatedWithSwift: FC = () => {
  return (
    <section className={"group flex cursor-default flex-col items-center"}>
      <div
        className={
          "relative mb-4 self-center overflow-hidden rounded-lg bg-orange-300 p-2 transition-colors duration-200 group-hover:bg-orange-400"
        }
      >
        <Swift
          className={"group-hover:translate-x-6 group-hover:translate-y-6"}
        />
        <Swift
          className={
            "absolute -translate-x-8 -translate-y-14 group-hover:-translate-x-0 group-hover:-translate-y-6 group-hover:delay-75"
          }
        />
      </div>
      <h3 className="relative pr-2 text-center text-xl font-bold text-stone-500 dark:text-orange-50 dark:text-opacity-50">
        Crafted with Swift<Super>5</Super>
        <p className="text-center font-bold text-stone-400 dark:text-orange-50 dark:text-opacity-30">
          Built exclusively for your Mac
        </p>
      </h3>
    </section>
  );
};
