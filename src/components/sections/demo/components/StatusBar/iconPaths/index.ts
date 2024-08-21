import { FC } from "react";
import { Klack } from "./Klack.tsx";
import { ControlPanel } from "./ControlPanel.tsx";
import { Wifi } from "./Wifi";

interface IPaths {
  Klack: FC;
  Wifi: typeof Wifi;
  ControlPanel: FC;
}

export const Path: IPaths = {
  Klack,
  Wifi,
  ControlPanel,
};
