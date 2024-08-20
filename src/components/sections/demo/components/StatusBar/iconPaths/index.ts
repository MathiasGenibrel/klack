import { FC } from "react";
import { Klack } from "./Klack.tsx";
import { Wifi } from "./Wifi.tsx";
import { ControlPanel } from "./ControlPanel.tsx";
import { WifiDisconnected } from "./WifiDisconnected.tsx";
import { WifiError } from "./WifiError.tsx";

interface IPaths {
  Klack: FC;
  Wifi: FC;
  WifiDisconnected: FC;
  WifiError: FC;
  ControlPanel: FC;
}

export const Path: IPaths = {
  Klack,
  Wifi,
  WifiDisconnected,
  WifiError,
  ControlPanel,
};
