import { FC } from "react";
import { Mouse } from "./icons/Mouse.tsx";
import { PlayIcon } from "./SongModal/icon/PlayIcon.tsx";
import clsx from "clsx";

export const Hint: FC = () => {
  return (
    <span
      className={clsx(
        "group mb-12 mt-4 flex items-center gap-2 self-center font-medium text-stone-600 opacity-65 sm:mb-0 sm:mt-0",
        "md:mr-10 md:flex md:self-end",
      )}
    >
      <Mouse /> Psssst ... Click on <PlayIcon size={"sm"} withLightBackground />{" "}
      to listen this melodic sound
    </span>
  );
};
