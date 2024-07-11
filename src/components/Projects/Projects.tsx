'use client'
import styles from './Projects.module.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';

const ProjectCard: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const images = [
        '/projectImages/The Den/The Den - 1.png',
        '/projectImages/The Den/The Den - 2.png',
        '/projectImages/The Den/The Den - 3.png',
        '/projectImages/The Den/The Den - 4.png',
    ];

    useEffect(() => {
        Aos.init({ duration: 1800 });

        const imageInterval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true);
            }, 1000); // half of the duration to allow fade out and fade in
        }, 5000);

        return () => clearInterval(imageInterval);
    }, []);

    return (
        <div data-aos="fade-right" className={styles.card}>
            <img src={images[currentImageIndex]} alt='TheDen1' width="55%" height="auto" className={`mx-5 ${styles.projectImage}`}
                style={fade ? { opacity: '1', transition: 'opacity 0.6s ease-in' } : { opacity: '0', transition: 'opacity 0.6s ease-out' }}
            />
            <div className={styles.contentBody}>
                <h1 className={styles.cardTitle}>The Den</h1>
                <p>Reporting Web Application that greatly improves efficiency reducing generation time from several hours to seconds.</p>
                <br />
                <p>This web application generates dynamic reports based on user input.
                    It enhances the company's ability to efficiently analyze sales performance,
                    leading to improved overall productivity.
                </p>
                <br />
                <p>Deployed on Azure Web App Service for scalability and security.</p>
                <p>Accessible from any device, ensuring on-the-go productivity.</p>
                <h1 className={styles.cardSubTitle}><span style={{ color: '#FE5F55' }}>Technologies Used</span></h1>
                <div className='flex justify-center align-center pt-4'>
                    <img src='/logos/reactLogo.png' alt='reactlogo' width={75} height={75} />
                    <img src='/logos/Next.js.png' alt='nextjslogo' width={90} height={75} />
                    <img src='/logos/sqlLogo.png' alt='sqllogo' width={75} height={75} />
                    <img src='/logos/azureLogo.png' alt='azurelogo' width={75} height={75} />
                </div>
            </div>
        </div>
    )
};

const Projects: React.FC = () => {
    useEffect(() => {
        Aos.init({ duration: 1800 });
    }, []);

    return (
        <section className={`${styles.main} min-h-screen`}>
            <h1 data-aos="fade-down" className={styles.heading}>Projects</h1>
            <div className={`${styles.container} container mx-auto pr-12 pl-12`}>
                <ProjectCard />
            </div>
        </section>
    )
}

//The Den [Done]
//Maggie Garza.com
//Flexsource Labels
//Fiix M2M Integration
//Scrap Management System
//The Bound

export default Projects;