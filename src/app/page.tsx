import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/About Me/AboutMe";
import Projects from "@/components/Projects/Projects";
import ContactMe from "@/components/Contact Me/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <section id='aboutMe'>
        <AboutMe />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='contactMe'>
        <ContactMe />
      </section>
      <Footer />
    </>
  );
}
