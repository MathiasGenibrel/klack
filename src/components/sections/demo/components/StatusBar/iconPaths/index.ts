import { FC } from "react";
import { Klack } from "./Klack.tsx";
import { ControlPanel } from "./ControlPanel.tsx";
import { Wifi } from "./Wifi";

interface IPaths {
  Klack: FC;
  Wifi: FC;
  ControlPanel: FC;
}

export const Path: IPaths = {
  Klack,
  Wifi,
  ControlPanel,
};
