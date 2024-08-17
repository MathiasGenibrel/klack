import { useEffect } from "react";

export const useMount = (
  callback: () => void,
  cleanupFunction?: () => void,
) => {
  useEffect(() => {
    callback();
    return cleanupFunction;
  }, []);
};
