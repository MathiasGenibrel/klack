import { FC } from "react";
import { ContactLink } from "./components/ContactLink.tsx";
import { DownloadLink } from "./components/DownloadLink.tsx";
import { HomeButton } from "./components/HomeButton.tsx";

export const Header: FC = () => {
  return (
    <section className={"sticky flex justify-between p-8"}>
      <HomeButton />
      <div className={"flex gap-8"}>
        <ContactLink />
        <DownloadLink />
      </div>
    </section>
  );
};
