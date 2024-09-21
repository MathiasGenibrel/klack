import { useCallback, useEffect, useRef, useState } from "react";

const TIMEOUT_DURATION = 3000;

/**
 * Hook to handle the preview state of the button
 * @returns [isPreview, clickHandler]
 * @example
 * const [isPreview, clickHandler] = usePreview();
 */
export const usePreview = () => {
  const [isPreview, setIsPreview] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const clickHandler = useCallback(() => {
    setIsPreview(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsPreview(false);
    }, TIMEOUT_DURATION);
  }, []);

  // Clear timeout on unmounting
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return [isPreview, clickHandler] as const;
};
