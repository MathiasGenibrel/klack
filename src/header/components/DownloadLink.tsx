import { FC } from "react";
import clsx from "clsx";
import { Apple } from "../../assets/icon/Apple.tsx";
import { useIsHover } from "../../hooks/useIsHover.ts";
import { motion, Transition } from "framer-motion";
import { ArrowRight } from "../../assets/icon/ArrowRight.tsx";

interface ButtonProps {}

const transitionConfig: Transition = {
  duration: 0.175,
};

const variants = {
  leftIcon: {
    initial: { opacity: 1, translateX: 0 },
    animate: (isHover: boolean) =>
      isHover ? { opacity: 0, translateX: -20 } : {},
  },
  text: {
    initial: { translateX: 0 },
    animate: (isHover: boolean) => (isHover ? { translateX: -20 } : {}),
  },
  rightIcon: {
    initial: { opacity: 0, translateX: 10 },
    animate: (isHover: boolean) =>
      isHover ? { opacity: 1, translateX: -10 } : {},
  },
};

export const DownloadLink: FC<ButtonProps> = () => {
  const hover = useIsHover();

  return (
    <a
      onMouseEnter={hover.set}
      onMouseLeave={hover.unset}
      href={"/"}
      className={clsx(
        "relative hidden items-center justify-center gap-2 overflow-hidden rounded-2xl bg-stone-800 bg-opacity-5 px-5 py-4 text-lg font-bold outline-none",
        "focus:ring-2 focus:ring-purple-400",
        "sm:flex",
      )}
    >
      <motion.div
        initial={"initial"}
        animate={"animate"}
        custom={hover.enabled}
        variants={variants.leftIcon}
        transition={transitionConfig}
      >
        <Apple />
      </motion.div>

      <motion.span
        initial={"initial"}
        animate={"animate"}
        custom={hover.enabled}
        variants={variants.text}
        transition={transitionConfig}
      >
        Download for Mac
      </motion.span>

      <motion.div
        className={"absolute right-0"}
        initial={"initial"}
        animate={"animate"}
        custom={hover.enabled}
        variants={variants.rightIcon}
        transition={transitionConfig}
      >
        <ArrowRight />
      </motion.div>
    </a>
  );
};
