'use client'
import styles from './Projects.module.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import ProjectCard_TheDen from './The Den/ProjectCard';
import ProjectCard_TheBound from './The Bound/ProjectCard';
import ProjectCard_SMS from './Scrap Management System/ProjectCard';

const Projects: React.FC = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const projects = [
        <ProjectCard_TheDen />,
        <ProjectCard_TheBound />,
        <ProjectCard_SMS />
    ]

    useEffect(() => {
        Aos.init({ duration: 1800 });

        const projectInterval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
                setFade(true);
            }, 1000); // half of the duration to allow fade out and fade in
        }, 22000);

        return () => clearInterval(projectInterval);
    }, []);

    return (
        <section className={`${styles.main} min-h-screen`}>
            <h1 data-aos="fade-down" className={styles.heading}>Projects</h1>
            <div className={`${styles.container} container mx-auto pr-12 pl-12`}>
                <div data-aos="fade-right" className='flex justify-center items-center'>
                    <img src='/images/JoyCon D-Pad Left.svg' alt='D-PadLeft' className={styles.dPad} onClick={() => {}}/>
                    {projects[currentProjectIndex]}
                    <img src='/images/JoyCon D-Pad Right.svg' alt='D-PadRight' className={styles.dPad} onClick={() => {}}/>
                </div>
            </div>
        </section>
    )
}

//The Den [Done]
//Maggie Garza.com
//Flexsource Labels
//Scrap Management System
//The Bound

export default Projects;