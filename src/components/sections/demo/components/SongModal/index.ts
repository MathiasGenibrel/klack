import { Hr } from "./HR.tsx";
import { Label } from "./Label.tsx";
import { Button } from "./Button.tsx";
import { SeeMore } from "./icon/SeeMore.tsx";
import { Container } from "./Container.tsx";

interface SongModalProps {
  Hr: typeof Hr;
  Label: typeof Label;
  Button: typeof Button;
  SeeMore: typeof SeeMore;
  Container: typeof Container;
}

export const SongModal: SongModalProps = {
  Hr: Hr,
  Label: Label,
  Button: Button,
  SeeMore: SeeMore,
  Container: Container,
};
