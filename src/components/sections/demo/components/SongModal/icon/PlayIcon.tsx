import { FC } from "react";
import clsx from "clsx";

interface PlayIconProps {
  size?: "sm" | "md";
  withLightBackground?: boolean;
}

export const PlayIcon: FC<PlayIconProps> = ({
  size = "md",
  withLightBackground = false,
}) => {
  return (
    <div
      className={clsx(
        "aspect-square h-fit w-fit rounded-full bg-stone-400 p-1",
        withLightBackground ? "bg-opacity-60" : "bg-opacity-25",
      )}
    >
      <svg
        className={clsx(
          "relative top-[1px] ml-0.5 fill-current opacity-90 sm:h-4 sm:w-4",
          size === "md" ? "h-[1.125rem] w-[1.125rem]" : "h-3 w-3",
          withLightBackground ? "text-stone-700" : "text-amber-50",
        )}
        viewBox="0 0 28 28"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M6.40625 23.8633C6.875 23.8633 7.27344 23.6758 7.74219 23.4062L21.4062 15.5078C22.3789 14.9336 22.7188 14.5586 22.7188 13.9375C22.7188 13.3164 22.3789 12.9414 21.4062 12.3789L7.74219 4.46875C7.27344 4.19922 6.875 4.02344 6.40625 4.02344C5.53906 4.02344 5 4.67969 5 5.69922V22.1758C5 23.1953 5.53906 23.8633 6.40625 23.8633Z"></path>
      </svg>
    </div>
  );
};
