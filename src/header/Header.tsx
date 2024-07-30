import { FC } from "react";
import { ContactLink } from "./components/ContactLink.tsx";
import { DownloadLink } from "./components/DownloadLink.tsx";
import { HomeButton } from "./components/HomeButton.tsx";
import { motion } from "framer-motion";

export const Header: FC = () => {
  return (
    <header className={"sticky flex justify-between p-8"}>
      <HomeButton />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1.2 }}
        className={"flex gap-8"}
      >
        <ContactLink />
        <DownloadLink />
      </motion.section>
    </header>
  );
};
