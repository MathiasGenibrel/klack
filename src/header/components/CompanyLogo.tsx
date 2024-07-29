import { FC } from "react";
import { motion, Transition, Variants } from "framer-motion";

interface CompanyLogoProps {
  isHover: boolean;
}

enum Position {
  CENTER = 0,
  FULL = 25,
}

enum Opacity {
  VISIBLE = 1,
  TRANSPARENT = 0,
}

const transitionConfig: Transition = {
  bounce: false,
  duration: 0.125,
};

const variantsLetterK: Variants = {
  initial: {
    x: Position.CENTER,
    opacity: Opacity.VISIBLE,
  },
  animate: (isHover: boolean) => ({
    x: isHover ? -Position.FULL : Position.CENTER,
    opacity: isHover ? Opacity.TRANSPARENT : Opacity.VISIBLE,
  }),
};

const variantsArrowRight: Variants = {
  initial: {
    x: Position.FULL,
    opacity: Opacity.TRANSPARENT,
  },
  animate: (isHover: boolean) => ({
    x: isHover ? Position.CENTER : Position.FULL,
    opacity: isHover ? Opacity.VISIBLE : Opacity.TRANSPARENT,
  }),
};

export const CompanyLogo: FC<CompanyLogoProps> = ({ isHover }) => {
  return (
    <div className={"overflow-hidden rounded-xl"}>
      <svg
        className="relative h-10 w-10 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
        aria-hidden="true"
      >
        <path d="M0 0h36v36H0z"></path>
        <motion.path
          key={"letter-k"}
          transition={transitionConfig}
          variants={variantsLetterK}
          custom={isHover}
          initial={"initial"}
          animate={"animate"}
          className="ease absolute translate-x-0 text-orange-50"
          d="M11.5 26.91h3.969a.5.5 0 0 0 .5-.5v-3.765a.5.5 0 0 1 .098-.297l1.047-1.418a.2.2 0 0 1 .333.017l3.392 5.718a.5.5 0 0 0 .43.245h4.595a.5.5 0 0 0 .425-.763l-5.173-8.358a.5.5 0 0 1 .024-.562l4.772-6.429A.5.5 0 0 0 25.51 10h-3.967a.5.5 0 0 0-.404.206l-5.049 6.928a.092.092 0 0 1-.074.038.047.047 0 0 1-.047-.047V10.5a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0-.5.5v15.91a.5.5 0 0 0 .5.5Z"
        ></motion.path>
        <motion.path
          key={"arrow-right"}
          transition={transitionConfig}
          variants={variantsArrowRight}
          custom={isHover}
          initial={"initial"}
          animate={"animate"}
          className="ease absolute translate-x-full text-orange-50"
          d="M18.032 11.218a1 1 0 0 0-1.414 0l-6.075 6.075a1 1 0 0 0 0 1.414l6.075 6.075a1 1 0 0 0 1.414-1.414L13.664 19H24.75a1 1 0 1 0 0-2H13.664l4.368-4.368a1 1 0 0 0 0-1.414Z"
        ></motion.path>
      </svg>
    </div>
  );
};
