import { useEffect } from "react";

/**
 * A custom hook that executes a callback at a given interval.
 * Interval is cleared when the component is unmounted.
 * @param callback The callback to be executed.
 * @param delay The delay between each execution.
 *  @default 1000 milliseconds. e.g. 1000 = 1 second.
 */
export const useInterval = (callback: () => void, delay: number = 1000) => {
  useEffect(() => {
    const interval = setInterval(callback, delay);
    return () => clearInterval(interval);
  }, [callback, delay]);
};
