import { useCallback, useState } from "react";

interface UseIsHover {
  enabled: boolean;
  set: () => void;
  unset: () => void;
}

export const useIsHover = (): UseIsHover => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const setHover = useCallback(() => {
    setIsHover(true);
  }, []);

  const unsetHover = useCallback(() => {
    setIsHover(false);
  }, []);

  return {
    enabled: isHover,
    set: setHover,
    unset: unsetHover,
  };
};
