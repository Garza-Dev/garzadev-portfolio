'use client'
import styles from './Projects.module.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect, useState, useRef } from 'react';
import ProjectCard_TheDen, { getSlideshowDuration as getDenDuration } from './The Den/ProjectCard';
import ProjectCard_TheBound, { getSlideshowDuration as getBoundDuration } from './The Bound/ProjectCard';
import ProjectCard_SMS, { getSlideshowDuration as getSMSDuration } from './Scrap Management System/ProjectCard';
import ProjectCard_MaggieGarza, { getSlideshowDuration as getMaggieDuration } from './Maggie Garza/ProjectCard';
import WavesLight from '../Waves/WavesLight';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Projects: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const projects = [
    { component: <ProjectCard_TheBound />, getDuration: getBoundDuration },
    { component: <ProjectCard_TheDen />, getDuration: getDenDuration },
    { component: <ProjectCard_SMS />, getDuration: getSMSDuration },
    { component: <ProjectCard_MaggieGarza />, getDuration: getMaggieDuration }
  ]

  const intervalRef = useRef<number | undefined>(undefined);

  const clearExistingInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const setNewInterval = () => {
    const duration = projects[currentProjectIndex].getDuration();
    intervalRef.current = window.setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, duration + 11000);
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    clearExistingInterval();
    setNewInterval();
  };

  const handlePreviousProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    clearExistingInterval();
    setNewInterval();
  };

  useEffect(() => {
    Aos.init({ duration: 1800 });

    setNewInterval();

    return () => clearExistingInterval();
  }, []);

  return (
    <section className={`${styles.main} min-h-screen`}>
      <div className="mx-auto flex flex-col items-center p-8">
        <h1 data-aos="fade-down" className={styles.heading}>Projects</h1>
        <div className={`${styles.container} container mx-auto pr-12 pl-12`}>
          <div data-aos="fade-right" className='flex justify-center items-center'>
            <MdKeyboardArrowLeft className={styles.arrows} style={{ filter: 'drop-shadow(2px 2px 2px #FE5F55)' }} onClick={handlePreviousProject}/>
            {projects[currentProjectIndex].component}
            <MdKeyboardArrowRight className={styles.arrows} style={{ filter: 'drop-shadow(-2px 2px 2px #FE5F55)' }} onClick={handleNextProject}/>
          </div>
        </div>
      </div>

      <WavesLight />
    </section>
  )
}

export default Projects;