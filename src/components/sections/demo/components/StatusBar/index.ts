import { Container } from "./Container.tsx";
import { Icon } from "./Icon.tsx";
import { ComponentProps, FC } from "react";

interface IStatusBar {
  Container: FC<ComponentProps<typeof Container>>;
  Icon: FC<ComponentProps<typeof Icon>>;
}

export const StatusBar: IStatusBar = {
  Container,
  Icon,
};
