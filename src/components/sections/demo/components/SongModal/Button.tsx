import { FC, memo } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { TailwindColors, TailwindsColors } from "./helpers/TailwindsColors.ts";
import { usePreview } from "./hooks/usePreview.ts";
import { PlayIcon } from "./icon/PlayIcon.tsx";

interface ButtonProps {
  label: string;
  color: TailwindColors;
}

const IconWithColor: FC<Pick<ButtonProps, "color">> = memo(({ color }) => {
  const [borderColor, textColor] =
    TailwindsColors.getBorderColorWithTextColor(color);

  return (
    <svg
      className={clsx(
        "mr-2 h-5 w-5 fill-current opacity-90",
        "sm:h-[1.125rem] sm:w-[1.125rem]",
        `border-2 ${borderColor} rounded-lg`,
        textColor,
      )}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        color={"currentColor"}
        d="M13.846 0A4.154 4.154 0 0 1 18 4.154v9.692A4.154 4.154 0 0 1 13.846 18H4.154A4.154 4.154 0 0 1 0 13.846V4.154A4.154 4.154 0 0 1 4.154 0h9.692ZM9 4.846l-.08.005a.692.692 0 0 0-.612.687l-.001 2.769H5.538A.692.692 0 0 0 4.846 9l.005.08c.04.345.332.612.687.612h2.769v2.77c0 .382.31.692.693.692l.08-.005a.692.692 0 0 0 .612-.687v-2.77h2.77c.382 0 .692-.31.692-.692l-.005-.08a.692.692 0 0 0-.687-.612l-2.77-.001V5.538A.692.692 0 0 0 9 4.846Z"
      ></path>
      <path
        className="text-orange-50 text-opacity-15"
        fillRule="nonzero"
        d="M13.846 0A4.154 4.154 0 0 1 18 4.154v9.692A4.154 4.154 0 0 1 13.846 18H4.154A4.154 4.154 0 0 1 0 13.846V4.154A4.154 4.154 0 0 1 4.154 0h9.692Zm0 1H4.154A3.154 3.154 0 0 0 1 4.154v9.692A3.154 3.154 0 0 0 4.154 17h9.692A3.154 3.154 0 0 0 17 13.846V4.154A3.154 3.154 0 0 0 13.846 1Z"
      ></path>
    </svg>
  );
});

export const Button: FC<ButtonProps> = ({ color, label }) => {
  const [isPreview, clickHandler] = usePreview();

  return (
    <button
      onClick={clickHandler}
      className={clsx(
        "flex flex-nowrap justify-between gap-4 rounded-lg bg-transparent p-2 transition-all",
        "hover:bg-stone-400 hover:bg-opacity-20",
      )}
    >
      <div className={"flex flex-grow items-center gap-1"}>
        <IconWithColor color={color} />
        <span className={"text-nowrap text-primary"}>{label}</span>
      </div>

      <div className={"flex min-w-0 flex-shrink items-center gap-2"}>
        <AnimatePresence mode={"popLayout"} initial={false}>
          <motion.span
            transition={{ type: "spring", duration: 0.3, bounce: 0 }}
            initial={{
              opacity: 0,
              x: isPreview ? 35 : -35,
              filter: "blur(1px)",
            }}
            exit={{ opacity: 0, x: isPreview ? 35 : -35, filter: "blur(1px)" }}
            animate={{
              color: isPreview ? "#f87171" : "#FFFBEB",
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            key={isPreview ? "preview" : "not-preview"}
            className={clsx(
              "overflow-hidden text-ellipsis whitespace-nowrap text-sm text-amber-50 text-opacity-60",
              "sm:text-opacity-0",
            )}
          >
            {isPreview ? "No sound available" : "Preview"}
          </motion.span>
        </AnimatePresence>
        <PlayIcon />
      </div>
    </button>
  );
};
