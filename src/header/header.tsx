import { FC } from "react";
import { CompanyLogo } from "./components/CompanyLogo.tsx";
import { ContactLink } from "./components/ContactLink.tsx";
import { DownloadLink } from "./components/DownloadLink.tsx";

export const Header: FC = () => {
  return (
    <section className={"sticky flex justify-between p-8"}>
      <a href={"/"} className={"flex items-center gap-4"}>
        <CompanyLogo />
        <span className={"font-sans text-2xl font-bold"}>Klack</span>
      </a>
      <div className={"flex gap-8"}>
        <ContactLink />
        <DownloadLink />
      </div>
    </section>
  );
};
