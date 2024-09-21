import { FC, memo } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { TailwindColors, TailwindsColors } from "./helpers/TailwindsColors.ts";
import { usePreview } from "./hooks/usePreview.ts";

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
        "duration flex items-center justify-between rounded-lg bg-transparent p-2 transition-all",
        "hover:bg-stone-400 hover:bg-opacity-20",
      )}
    >
      <div className={"flex items-center gap-1"}>
        <IconWithColor color={color} />
        <span className={"text-primary"}>{label}</span>
      </div>

      <div className={"flex items-center gap-4"}>
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
              "text-sm text-amber-50 text-opacity-60",
              "sm:text-opacity-0",
            )}
          >
            {isPreview ? "No sound available" : "Preview"}
          </motion.span>
        </AnimatePresence>
        <div
          className={
            "aspect-square rounded-full bg-stone-400 bg-opacity-25 p-1"
          }
        >
          <svg
            className="relative top-[1px] ml-0.5 h-[1.125rem] w-[1.125rem] fill-current text-primary opacity-90 sm:h-4 sm:w-4"
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M6.40625 23.8633C6.875 23.8633 7.27344 23.6758 7.74219 23.4062L21.4062 15.5078C22.3789 14.9336 22.7188 14.5586 22.7188 13.9375C22.7188 13.3164 22.3789 12.9414 21.4062 12.3789L7.74219 4.46875C7.27344 4.19922 6.875 4.02344 6.40625 4.02344C5.53906 4.02344 5 4.67969 5 5.69922V22.1758C5 23.1953 5.53906 23.8633 6.40625 23.8633Z"></path>
          </svg>
        </div>
      </div>
    </button>
  );
};
