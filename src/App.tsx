import "./globals.css";
import { Header, HEADER_DURATION } from "./header/Header.tsx";
import { Mark } from "./components/Mark.tsx";
import { stagger, useAnimate } from "framer-motion";
import { useMount } from "./hooks/useMount.ts";
import { DownloadButton } from "./components/DownloadButton.tsx";
import { Featured } from "./components/Featured/Featured.tsx";

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
      <main ref={scope} className={"flex flex-col gap-12 px-8 text-stone-800"}>
        <h1 className="withDefaultRotation text-6xl font-bold sm:text-8xl">
          Satisfying <Mark>sound</Mark>
          <br />
          with every keystroke
        </h1>
        <section className={"flex items-center gap-4"}>
          <DownloadButton />
          <Featured.On label={"App Store"} />
          <Featured.InForbes />
        </section>
      </main>
    </>
  );
}

export default App;
