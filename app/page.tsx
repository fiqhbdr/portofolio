import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectList from "@/components/ProjectList";
import Experience from "@/components/Experience";
import Partner from "@/components/Partner";
import Certificates from "@/components/Certificates";
import WhatIBuild from "@/components/WhatIBuild";
import GithubCTA from "@/components/GithubCTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectList />
      <Experience />
      <Partner />
      <Certificates />
      <WhatIBuild />
      <GithubCTA />
      <Contact />
    </>
  );
}
