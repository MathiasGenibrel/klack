import "./globals.css";
import { Header, HEADER_DURATION } from "./header/Header.tsx";
import { Mark } from "./components/Mark.tsx";
import { stagger, useAnimate } from "framer-motion";
import { useMount } from "./hooks/useMount.ts";
import { DownloadButton } from "./components/DownloadButton.tsx";
import { Featured } from "./components/Featured/Featured.tsx";
import { DemoSection } from "./components/sections/demo/DemoSection.tsx";
import { Features } from "./components/sections/Features";
import { FeatureType } from "./Feature.tsx";

const FIRST_LEVEL_CHILDREN = "main > *";
const START_DELAY = HEADER_DURATION - 0.2; // Header duration minus 200ms

function App() {
  const [scope, animate] = useAnimate();

  useMount(() =>
    animate(
      FIRST_LEVEL_CHILDREN,
      { opacity: 1, y: 0, transform: "translateY(0)", rotateZ: 0 },
      { delay: stagger(0.3, { startDelay: START_DELAY }), duration: 0.4 },
    ),
  );

  return (
    <>
      <Header />
      <main
        ref={scope}
        className={
          "flex flex-col gap-12 px-8 text-stone-800 sm:mx-auto sm:max-w-screen-lg xl:px-0"
        }
      >
        <h1 className="withDefaultRotation text-6xl font-bold sm:text-8xl">
          Satisfying <Mark>sound</Mark>
          <br />
          with every keystroke
        </h1>
        <section
          className={"flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-4"}
        >
          <DownloadButton />
          <div className={"mr-4 flex gap-4 self-center"}>
            <Featured.On label={"App Store"} />
            <Featured.InForbes />
          </div>
        </section>
        <DemoSection />
        <Features.Container>
          <Features.Feature type={FeatureType.HIGH_FIDELITY_SOUND} />
          <Features.Feature type={FeatureType.IMMERSIVE_SPATIAL_AUDIO} />
          <Features.Feature type={FeatureType.INSTANT_TYPE_FEEDBACK} />
          <Features.Feature type={FeatureType.UP_AND_DOWN_KEYSTROKES} />
          <Features.Feature type={FeatureType.RANDOMIZED_PITCHING} />
          <Features.Feature type={FeatureType.CUSTOMIZABLE_SWITCHES} />
          <Features.Feature type={FeatureType.MENU_BAR_APPLICATION} />
          <Features.Feature type={FeatureType.BLAZING_FAST} />
        </Features.Container>
      </main>
    </>
  );
}

export default App;
