import "./globals.css";
import { Header, HEADER_DURATION } from "./header/Header.tsx";
import { Mark } from "./components/Mark.tsx";
import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

const FIRST_LEVEL_CHILDREN = "main > *";
const START_DELAY = HEADER_DURATION - 0.2; // Header duration minus 200ms

function App() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      FIRST_LEVEL_CHILDREN,
      { opacity: 1, y: 0, transform: "translateY(0)", rotateZ: 0 },
      { delay: stagger(0.3, { startDelay: START_DELAY }), duration: 0.4 },
    );
  }, []);

  return (
    <>
      <Header />
      <main ref={scope} className={"flex flex-col gap-12 px-8 text-stone-800"}>
        <h1 className="withDefaultRotation text-6xl font-bold sm:text-8xl">
          Satisfying <Mark>sound</Mark>
          <br />
          with every keystroke
        </h1>
      </main>
    </>
  );
}

export default App;
