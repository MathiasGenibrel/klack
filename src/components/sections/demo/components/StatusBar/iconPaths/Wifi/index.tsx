import { FC, useEffect, useMemo, useState } from "react";
import { Disconnected } from "./Disconnected.tsx";
import { ConnectionPerformance, WifiIcon } from "./WifiIcon.tsx";

const CONNECTION_CONFIGURATION = {
  // Corresponds to a 4G connection
  FASTER: {
    rtt: 150,
    downlink: 8.2,
  },
  // Corresponds to a Slow 4G connection
  MEDIUM: {
    rtt: 600,
    downlink: 1.45,
  },
};

interface NetworkInformation {
  rtt: number;
  downlink: number;
}

/**
 * Returns the connection performance based on the network information
 * @param networkInfo - The network information
 * @returns The connection performance, can be null if the network information is equal to 0
 */
const getConnectionPerformance = (
  networkInfo: NetworkInformation,
): ConnectionPerformance | null => {
  if (networkInfo.rtt === 0 && networkInfo.downlink === 0) {
    return null;
  }

  if (
    networkInfo.rtt <= CONNECTION_CONFIGURATION.FASTER.rtt ||
    networkInfo.downlink > CONNECTION_CONFIGURATION.FASTER.downlink
  )
    return ConnectionPerformance.FASTER;

  if (
    networkInfo.rtt <= CONNECTION_CONFIGURATION.MEDIUM.rtt ||
    networkInfo.downlink > CONNECTION_CONFIGURATION.MEDIUM.downlink
  )
    return ConnectionPerformance.MEDIUM;

  return ConnectionPerformance.SLOW;
};

const CONNECTION = navigator.connection;

export const Wifi: FC = () => {
  const [networkInfo, setNetworkInfo] = useState(
    CONNECTION
      ? {
          rtt: CONNECTION.rtt,
          downlink: CONNECTION.downlink,
        }
      : null,
  );

  useEffect(() => {
    if (CONNECTION) {
      CONNECTION.addEventListener("change", (event) => {
        event.currentTarget &&
          setNetworkInfo({
            rtt: event.currentTarget.rtt,
            downlink: event.currentTarget.downlink,
          });
      });
    }

    return () => CONNECTION?.removeEventListener("change", () => {});
  }, []);

  return useMemo(() => {
    if (!networkInfo) {
      return <WifiIcon performance={ConnectionPerformance.FASTER} />;
    }

    const networkPerformance = getConnectionPerformance(networkInfo);

    switch (networkPerformance) {
      case ConnectionPerformance.FASTER:
        return <WifiIcon performance={ConnectionPerformance.FASTER} />;
      case ConnectionPerformance.MEDIUM:
        return <WifiIcon performance={ConnectionPerformance.MEDIUM} />;
      case ConnectionPerformance.SLOW:
        return <WifiIcon performance={ConnectionPerformance.SLOW} />;
      default:
        return <Disconnected />;
    }
  }, [networkInfo]);
};
