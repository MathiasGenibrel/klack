import { useIsHover } from "../../hooks/useIsHover.ts";

export enum FeaturedType {
  InForbes = "in-forbes",
  On = "on",
}

export interface FeaturedGenericProps {
  hover: ReturnType<typeof useIsHover>;
}
