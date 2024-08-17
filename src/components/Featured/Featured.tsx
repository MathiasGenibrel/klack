import { ComponentProps, FC } from "react";
import { useIsHover } from "../../hooks/useIsHover.ts";
import { FeaturedType } from "./featured.types.ts";
import { FeaturedInForbes } from "./FeaturedInForbes.tsx";
import { FeaturedOn } from "./FeaturedOn.tsx";

type FeaturedOnProps = Omit<ComponentProps<typeof FeaturedOn>, "hover">;
type FeaturedInForbesProps = Omit<
  ComponentProps<typeof FeaturedInForbes>,
  "hover"
>;

type FeaturedWrapperProps =
  | ({
      type: FeaturedType.InForbes;
    } & FeaturedInForbesProps)
  | ({
      type: FeaturedType.On;
    } & FeaturedOnProps);

export const FeaturedWrapper: FC<FeaturedWrapperProps> = (props) => {
  const hover = useIsHover();

  switch (props.type) {
    case FeaturedType.InForbes:
      return <FeaturedInForbes hover={hover} />;
    case FeaturedType.On:
      return <FeaturedOn label={props.label} hover={hover} />;
    default:
      return null;
  }
};

export const Featured = {
  InForbes: () => FeaturedWrapper({ type: FeaturedType.InForbes }),
  On: ({ label }: FeaturedOnProps) =>
    FeaturedWrapper({ label, type: FeaturedType.On }),
};
