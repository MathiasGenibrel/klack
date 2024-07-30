import { motion, Transition } from "framer-motion";
import { FC } from "react";

interface ChatLineProps {
  isHover: boolean;
}

const transitionConfig: Transition = {
  duration: 0.25,
};

export const ChatLine: FC<ChatLineProps> = ({ isHover }) => {
  return (
    <svg
      className="h-6 w-6 overflow-visible fill-secondary"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-0 0 24 24"
      aria-hidden="true"
    >
      <motion.path
        style={{ originY: 1, originX: 0.5 }}
        animate={{ rotateZ: isHover ? [0, -10, 0] : 0 }}
        transition={transitionConfig}
        d="M4.848 2.521a49.3 49.3 0 0 1 14.304-.001c1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97q-1.731.255-3.476.383a.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 49 49 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.491c0-1.946 1.37-3.68 3.348-3.97"
      />
      <motion.path
        className={"fill-orange-50"}
        style={{ originY: 0.5, originX: 0 }}
        animate={{ rotateZ: isHover ? [0, -20, 0] : 0 }}
        transition={transitionConfig}
        d="M6.75 8a.75.75 0 0 1 .75-.75h9a.75.75 0 1 1 0 1.5h-9A.75.75 0 0 1 6.75 8m.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 1 0 0-1.5z"
      />
    </svg>
  );
};
