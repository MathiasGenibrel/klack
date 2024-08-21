/*
 This type definition file is used to extend the Navigator interface with the Network Information API properties.
 This API is not available in all browsers, so the properties are optional.
 */

interface NetworkEvent extends Event {
  currentTarget: Navigator["connection"];
}

interface Navigator {
  /**
   * The Network Information API provides information about the system's connection in terms of general connection type (e.g., 'wifi', 'cellular', etc.).
   * Can be undefined if the browser does not support the API.
   */
  connection?: {
    addEventListener: (
      type: "change",
      listener: (event: NetworkEvent) => void,
      options?: AddEventListenerOptions,
    ) => void;
    removeEventListener: (
      type: "change",
      listener: (event: NetworkEvent) => void,
      options?: EventListenerOptions,
    ) => void;
    /**
     * Returns the effective bandwidth estimate in megabits per second, rounded to the nearest multiple of 25 kilobits per seconds.
     */
    downlink: number;
    /**
     * Returns the maximum downlink speed, in megabits per second (Mbps), for the underlying connection technology.
     * @experimental
     */
    downlinkMax: number;
    /**
     * Returns the effective type of the connection meaning one of 'slow-2g', '2g', '3g', or '4g'. This value is determined using a combination of recently observed round-trip time and downlink values.
     */
    effectiveType: "slow-2g" | "2g" | "3g" | "4g";
    /**
     * Returns the estimated effective round-trip time of the current connection, rounded to the nearest multiple of 25 milliseconds.
     */
    rtt: number;
    /**
     * Returns true if the user has set a reduced data usage option on the user agent.
     */
    saveData: boolean;
    /**
     * Returns the type of connection a device is using to communicate with the network.
     * @experimental
     */
    type:
      | "bluetooth"
      | "cellular"
      | "ethernet"
      | "none"
      | "wifi"
      | "wimax"
      | "other"
      | "unknown";
  };
}
