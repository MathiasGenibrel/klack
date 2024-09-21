import { FC } from "react";
import clsx from "clsx";

export const Mouse: FC = () => {
  return (
    <svg
      className={clsx(
        "h-3.5 w-3.5 fill-current transition duration-700 ease-out",
        "group-hover:-translate-x-1 group-hover:-translate-y-1",
      )}
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M5.06 3.024C4.804 1.238 6.858.052 8.276 1.168l17.117 13.466c1.47 1.159.688 3.522-1.182 3.574l-7.03.19a1.998 1.998 0 0 0-1.65.953l-3.68 5.993c-.98 1.594-3.418 1.089-3.685-.764L5.06 3.024Z"></path>
    </svg>
  );
};
