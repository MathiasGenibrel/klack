import { FC, ReactNode } from "react";
import { HighFidelitySound } from "./components/sections/Features/icons/HighFidelitySound.tsx";
import { ImmersiveSpacialAudio } from "./components/sections/Features/icons/ImmersiveSpacialAudio.tsx";
import { UpAndDownKeystrokes } from "./components/sections/Features/icons/UpAndDownKeystrokes.tsx";
import { BlazingFastNativeApp } from "./components/sections/Features/icons/BlazingFastNativeApp.tsx";
import { CustomizableSwitches } from "./components/sections/Features/icons/CustomizableSwitches.tsx";
import { InstantTypeFeedback } from "./components/sections/Features/icons/InstantTypeFeedback.tsx";
import { RandomizedPitching } from "./components/sections/Features/icons/RandomizedPitching.tsx";
import { MenubarApplication } from "./components/sections/Features/icons/MenubarApplication.tsx";

export enum FeatureType {
  HIGH_FIDELITY_SOUND = "High fidelity sound",
  IMMERSIVE_SPATIAL_AUDIO = "Immersive spatial audio",
  INSTANT_TYPE_FEEDBACK = "Instant type feedback",
  UP_AND_DOWN_KEYSTROKES = "Up/down keystrokes",
  RANDOMIZED_PITCHING = "Randomized pitching",
  CUSTOMIZABLE_SWITCHES = "Customizable switches",
  MENU_BAR_APPLICATION = "Menubar application",
  BLAZING_FAST = "Blazing fast native app",
}

interface FeatureProps {
  type: FeatureType;
}

const getIcon = (type: FeatureType): ReactNode => {
  switch (type) {
    case FeatureType.HIGH_FIDELITY_SOUND:
      return <HighFidelitySound />;
    case FeatureType.IMMERSIVE_SPATIAL_AUDIO:
      return <ImmersiveSpacialAudio />;
    case FeatureType.BLAZING_FAST:
      return <BlazingFastNativeApp />;
    case FeatureType.CUSTOMIZABLE_SWITCHES:
      return <CustomizableSwitches />;
    case FeatureType.INSTANT_TYPE_FEEDBACK:
      return <InstantTypeFeedback />;
    case FeatureType.MENU_BAR_APPLICATION:
      return <MenubarApplication />;
    case FeatureType.RANDOMIZED_PITCHING:
      return <RandomizedPitching />;
    case FeatureType.UP_AND_DOWN_KEYSTROKES:
      return <UpAndDownKeystrokes />;
  }
};

export const Feature: FC<FeatureProps> = ({ type }) => {
  return (
    <li className={"group flex flex-grow flex-col items-center md:basis-1/5"}>
      {getIcon(type)}
      <span className={"max-w-40 text-center text-2xl font-bold"}>{type}</span>
    </li>
  );
};
