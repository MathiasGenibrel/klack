import { FC } from "react";
import { BackgroundImage } from "./components/BackgroundImage.tsx";
import { StatusBar } from "./components/StatusBar";
import { Path } from "./components/StatusBar/iconPaths";
import { CurrentDate } from "./components/StatusBar/CurrentDate.tsx";

export const DemoSection: FC = () => {
  return (
    <section className={"relative h-96"}>
      <BackgroundImage />
      <StatusBar.Container>
        <StatusBar.Icon path={<Path.Klack />} />
        <StatusBar.Icon path={<Path.Wifi />} />
        <StatusBar.Icon path={<Path.ControlPanel />} />
        <CurrentDate />
      </StatusBar.Container>
    </section>
  );
};
