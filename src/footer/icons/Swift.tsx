import { FC } from "react";
import clsx from "clsx";

interface SwiftProps {
  className?: string;
}

export const Swift: FC<SwiftProps> = ({ className }) => {
  return (
    <svg
      className={clsx(
        "h-6 w-6 fill-current text-orange-50 transition-all duration-200 ease-out",
        className,
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
      aria-hidden="true"
    >
      <path d="M2 16.664c1.805 2.943 6.52 7.477 12.87 7.477 4.049 0 5.155-1.88 7.508-1.88 1.955 0 2.728 1.31 3.03 1.826.085.161.225.268.321-.043.054-.226.108-.526.108-.892 0-1.03-.312-2.997-2.03-5.156.376-1.063.419-2.234.419-2.922 0-3.126-1.762-8.561-7.595-12.074 1.214 1.719 2.847 4.318 2.847 7.938 0 1.311-.366 2.75-.656 3.47-3.169-1.837-9.227-6.886-11.655-9.464 1.944 2.987 4.254 5.694 6.81 8.53A72.085 72.085 0 0 1 4.354 6.19C7.21 10.348 10.83 14.44 15.6 18.297c-1.365.752-2.772 1.353-5.167 1.353-2.922 0-6.489-1.418-8.433-2.986Z"></path>
    </svg>
  );
};
