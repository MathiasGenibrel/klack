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
        console.log("Connection change", event.currentTarget);

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
    if (!networkInfo || (networkInfo.rtt === 0 && networkInfo.downlink === 0)) {
      return <Disconnected />;
    }

    if (
      networkInfo.rtt <= CONNECTION_CONFIGURATION.FASTER.rtt ||
      networkInfo.downlink > CONNECTION_CONFIGURATION.FASTER.downlink
    )
      return <WifiIcon performance={ConnectionPerformance.FASTER} />;

    if (
      networkInfo.rtt <= CONNECTION_CONFIGURATION.MEDIUM.rtt ||
      networkInfo.downlink > CONNECTION_CONFIGURATION.MEDIUM.downlink
    )
      return <WifiIcon performance={ConnectionPerformance.MEDIUM} />;

    return <WifiIcon performance={ConnectionPerformance.SLOW} />;
  }, [networkInfo]);
};
