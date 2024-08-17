import { FC } from "react";
import { motion } from "framer-motion";

export enum TitleType {
  IN = "in",
  ON = "on",
}

interface TitleProps {
  type: TitleType;
  isHover: boolean;
}

export const Title: FC<TitleProps> = ({ type, isHover }) => {
  return (
    <motion.h4
      className={"text-center text-sm font-medium text-stone-800"}
      animate={{
        color: isHover ? "#57534EBF" : "#A8A29EBF",
      }}
    >
      Featured {type === TitleType.ON ? "on" : "in"}:
    </motion.h4>
  );
};
