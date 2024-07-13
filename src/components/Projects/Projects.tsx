'use client'
import styles from './Projects.module.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect, useState, useRef } from 'react';
import ProjectCard_TheDen from './The Den/ProjectCard';
import ProjectCard_TheBound from './The Bound/ProjectCard';
import ProjectCard_SMS from './Scrap Management System/ProjectCard';

const Projects: React.FC = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const projects = [
        <ProjectCard_TheBound />,
        <ProjectCard_TheDen />,
        <ProjectCard_SMS />
    ]

    const intervalRef = useRef<number | undefined>(undefined);

    const clearExistingInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const setNewInterval = () => {
        intervalRef.current = window.setInterval(() => {
            setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }, 22000);
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
            <h1 data-aos="fade-down" className={styles.heading}>Projects</h1>
            <div className={`${styles.container} container mx-auto pr-12 pl-12`}>
                <div data-aos="fade-right" className='flex justify-center items-center'>
                    <img src='/images/JoyCon D-Pad Left.svg' alt='D-PadLeft' className={styles.dPad} onClick={handlePreviousProject}/>
                    {projects[0]}
                    <img src='/images/JoyCon D-Pad Right.svg' alt='D-PadRight' className={styles.dPad} onClick={handleNextProject}/>
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