import { FC } from "react";

export const CustomizableSwitches: FC = () => {
  return (
    <svg
      className="mb-5 h-[4.5rem] w-[4.5rem] fill-current"
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6.68 24.598h14.215c2.46 0 3.68-1.22 3.68-3.633V6.656c0-2.414-1.22-3.633-3.68-3.633H6.68C4.23 3.023 3 4.23 3 6.656v14.309c0 2.426 1.23 3.633 3.68 3.633Zm.023-1.887c-1.172 0-1.816-.621-1.816-1.84V6.75c0-1.219.644-1.84 1.816-1.84h14.168c1.16 0 1.817.621 1.817 1.84v14.121c0 1.219-.657 1.84-1.817 1.84H6.703Z"></path>

      <path
        className={
          "origin-center transition-transform duration-300 ease-out group-hover:-rotate-90"
        }
        d="M8.367 13.793c0 .574.399.96.996.96h8.871c.586 0 .996-.386.996-.96 0-.586-.41-.996-.996-.996h-8.87c-.598 0-.997.41-.997.996Z"
      ></path>
      <path
        className={
          "origin-center transition-transform duration-300 ease-out group-hover:-rotate-90"
        }
        d="M13.781 8.344c-.574 0-.972.41-.972 1.008v8.859c0 .586.398.996.972.996.586 0 .996-.398.996-.996V9.35c0-.597-.41-1.007-.996-1.007Z"
      ></path>
    </svg>
  );
};
