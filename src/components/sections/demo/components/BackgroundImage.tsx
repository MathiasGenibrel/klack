import { FC } from "react";

export const BackgroundImage: FC = () => {
  return (
    <div className="left-0 right-0 top-0 hidden w-full overflow-hidden rounded-[2.5rem] bg-stone-900 sm:block sm:h-full sm:rounded-[3rem]">
      <picture>
        <source
          media="(min-width: 640px)"
          src="https://cdn.tryklack.com/images/wallpaper.webp"
          type="image/webp"
        />
        <source
          media="(max-width: 640px)"
          src="https://cdn.tryklack.com/images/wallpaper-alt.webp"
          type="image/webp"
        />
        <img
          className="aspect-video h-full w-full select-none object-cover"
          src="https://cdn.tryklack.com/images/wallpaper.jpg"
          alt="Wallpaper"
        />
      </picture>
    </div>
  );
};
