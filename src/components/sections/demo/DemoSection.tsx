import { FC } from "react";
import { BackgroundImage } from "./components/BackgroundImage.tsx";
import { StatusBar } from "./components/StatusBar";
import { Path } from "./components/StatusBar/iconPaths";
import { CurrentDate } from "./components/StatusBar/CurrentDate.tsx";
import { SongModal } from "./components/SongModal";
import { Hint } from "./components/Hint.tsx";

export const DemoSection: FC = () => {
  return (
    <section
      className={
        "relative flex flex-col gap-4 sm:mb-8 sm:h-[38rem] md:h-[34rem] xl:w-[120%] xl:self-center"
      }
    >
      <BackgroundImage />
      <StatusBar.Container>
        <StatusBar.Icon path={<Path.Klack />} />
        <StatusBar.Icon path={<Path.Wifi />} />
        <StatusBar.Icon path={<Path.ControlPanel />} />
        <CurrentDate />
      </StatusBar.Container>
      <SongModal.Container>
        <SongModal.Label>CherryMX™</SongModal.Label>
        <SongModal.Button label={"Jap. Black"} color={"fuchsia"} />

        <SongModal.Hr />

        <SongModal.Label>Everglide™</SongModal.Label>
        <SongModal.Button label={"Crystal Purple"} color={"orange"} />
        <SongModal.Button label={"Oreo"} color={"red"} />

        <SongModal.Hr />

        <SongModal.Label>Flurples™</SongModal.Label>
        <SongModal.Button label={"Cardboard"} color={"violet"} />

        <SongModal.Hr />

        <SongModal.Label>NovelKeys™</SongModal.Label>
        <SongModal.Button label={"Cream"} color={"amber"} />

        <SongModal.Hr />
        <SongModal.SeeMore />
      </SongModal.Container>

      <Hint />
    </section>
  );
};
