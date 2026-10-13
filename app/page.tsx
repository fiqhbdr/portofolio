import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectList from "@/components/ProjectList";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import WhatIBuild from "@/components/WhatIBuild";
import GithubCTA from "@/components/GithubCTA";
import Contact from "@/components/Contact";

/*
  Two bands, not eight. An earlier version tinted every section and the page
  read as stripes; this keeps the one move that worked (the step up into
  About) and closes on a step down. Everything between sits on the base.

  Each band is a wrapper rather than a class on the section itself, because
  `content-wrap` caps the width and the tint has to run the full bleed.
*/
export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-band-lift">
        <About />
      </div>
      <ProjectList />
      <Experience />
      <Certificates />
      <WhatIBuild />
      <GithubCTA />
      <div className="bg-band-sink">
        <Contact />
      </div>
    </>
  );
}
