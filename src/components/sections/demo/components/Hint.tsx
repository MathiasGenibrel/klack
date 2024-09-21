import { FC } from "react";
import { Mouse } from "./icons/Mouse.tsx";
import { PlayIcon } from "./SongModal/icon/PlayIcon.tsx";

export const Hint: FC = () => {
  return (
    <span
      className={
        "group flex items-center gap-2 self-center font-medium text-stone-600 opacity-65"
      }
    >
      <Mouse /> Psssst ... Click on <PlayIcon size={"sm"} withLightBackground />{" "}
      to listen this melodic sound
    </span>
  );
};
