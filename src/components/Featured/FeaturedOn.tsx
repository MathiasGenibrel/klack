import { FC } from "react";
import { TriumphalCrown } from "../TriumphalCrown/TriumphalCrown.tsx";
import { Title, TitleType } from "./Title.tsx";
import { FeaturedGenericProps } from "./featured.types.ts";
import { motion } from "framer-motion";

interface FeaturedOnProps extends FeaturedGenericProps {
  label: string;
}

export const FeaturedOn: FC<FeaturedOnProps> = ({ label, hover }) => {
  return (
    <section
      className={"flex cursor-default items-center"}
      onMouseEnter={hover.set}
      onMouseLeave={hover.unset}
    >
      <TriumphalCrown isHover={hover.enabled}>
        <div className={"flex-col items-center"}>
          <Title type={TitleType.ON} isHover={hover.enabled} />
          <motion.span
            className={"text-center text-lg font-bold"}
            animate={{ color: hover.enabled ? "#292524BF" : "#78716CD8" }}
          >
            {label}
          </motion.span>
        </div>
      </TriumphalCrown>
    </section>
  );
};
