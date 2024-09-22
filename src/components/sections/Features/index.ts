import { Container } from "./Container.tsx";
import { Feature } from "../../../Feature.tsx";

interface FeaturesProps {
  Container: typeof Container;
  Feature: typeof Feature;
}

export const Features: FeaturesProps = {
  Container: Container,
  Feature: Feature,
};
