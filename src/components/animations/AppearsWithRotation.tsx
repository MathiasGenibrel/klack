import { motion, Transition, Variants } from "framer-motion";
import { FC, ReactNode } from "react";

interface AppearsWithRotationProps {
  children: ReactNode;
}

const variants: Variants = {
  initial: {
    scale: 0.5,
    translateY: 10,
    rotateZ: 10,
    opacity: 0,
  },
  animate: {
    scale: 1,
    translateY: 0,
    rotateZ: 0,
    opacity: 1,
  },
};

const transitionConfig: Transition = {
  duration: 0.4,
  bounce: false,
};

export const AppearsWithRotation: FC<AppearsWithRotationProps> = ({
  children,
}) => {
  return (
    <motion.div
      initial={"initial"}
      animate={"animate"}
      variants={variants}
      transition={transitionConfig}
    >
      {children}
    </motion.div>
  );
};
