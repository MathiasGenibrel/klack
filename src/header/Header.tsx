import { FC } from "react";
import { ContactLink } from "./components/ContactLink.tsx";
import { HomeButton } from "./components/HomeButton.tsx";
import { motion, Transition, Variants } from "framer-motion";
import { DownloadButton } from "../components/DownloadButton.tsx";

export const HEADER_DURATION = 1;

const transitionConfig: Transition = {
  duration: HEADER_DURATION,
  delay: 0.2,
};

const variants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const Header: FC = () => {
  return (
    <header className={"sticky flex justify-between p-8"}>
      <HomeButton />
      <motion.section
        className={"flex gap-8"}
        initial={"initial"}
        animate={"animate"}
        variants={variants}
        transition={transitionConfig}
      >
        <ContactLink />
        <DownloadButton type={"secondary"} />
      </motion.section>
    </header>
  );
};
