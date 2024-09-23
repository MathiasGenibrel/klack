import { FC } from "react";
import { Twitter } from "./icons/Twitter.tsx";
import { Github } from "./icons/Github.tsx";
import { Linkedin } from "./icons/Linkedin.tsx";

export const SocialNetwork: FC = () => {
  return (
    <section className={"flex gap-4"}>
      <Twitter />
      <Github />
      <Linkedin />
    </section>
  );
};
