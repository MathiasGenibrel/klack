import React, { useMemo } from "react";
import { useIsHover } from "../hooks/useIsHover.ts";
import clsx from "clsx";
import { motion, Transition } from "framer-motion";
import { Apple } from "../assets/icon/Apple.tsx";
import { ArrowRight } from "../assets/icon/ArrowRight.tsx";

interface DownloadButtonProps {
  type?: "primary" | "secondary";
}

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

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  type = "primary",
}) => {
  const hover = useIsHover();

  const style = useMemo(() => {
    switch (type) {
      case "primary":
        return "bg-stone-800 text-white";
      case "secondary":
        return "bg-stone-800 bg-opacity-5";
    }
  }, [type]);

  return (
    <a
      onMouseEnter={hover.set}
      onMouseLeave={hover.unset}
      href={"/"}
      className={clsx(
        "relative hidden items-center justify-center gap-2 overflow-hidden rounded-2xl px-5 py-4 text-lg font-bold outline-none",
        "focus:ring-2 focus:ring-purple-400",
        style,
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
