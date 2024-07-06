'use client'
import styles from './Projects.module.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Projects: React.FC = () => {
    useEffect(() => {
        Aos.init({ duration: 1800 });
    },[]);

    return (
        <section className={styles.main}>
            <div className='container'>
                <h1 className={styles.heading}>Projects</h1>
            </div>
        </section>
    )
}

export default Projects;