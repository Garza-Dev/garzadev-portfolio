import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/About Me/AboutMe";
import { useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import ContactMe from "@/components/Contact Me/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  // useEffect(() => {
  //   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  //     anchor.addEventListener('click', function (e) {
  //       e.preventDefault();
  //       document.querySelector((this as HTMLAnchorElement).getAttribute('href')!)!.scrollIntoView({
  //         behavior: 'smooth'
  //       });
  //     });
  //   });
  // }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}
