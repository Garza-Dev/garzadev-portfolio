'use client'
import styles from '../ProjectCard.module.css'
import { useEffect, useState } from 'react';
import { GoHorizontalRule } from 'react-icons/go';

export const getSlideshowDuration = () => {
    return (8000 * 3); //3 images each 8 seconds long
}

const ProjectCard_SMS: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const images = [
        '/projectImages/Scrap Management System/SMS - 1.png',
        '/projectImages/Scrap Management System/SMS - 2.png',
        '/projectImages/Scrap Management System/SMS - 3.png',
    ];

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true);
            }, 1000); // half of the duration to allow fade out and fade in
        }, 8000);

        return () => clearInterval(imageInterval);
    }, []);

    return (
        <div className={styles.card}>
            <img src={images[currentImageIndex]} alt={`SMS-${currentImageIndex}`} width="55%" height="auto" className={`mx-5 ${styles.projectImage}`}
                style={fade ? { opacity: '1', transition: 'opacity 1s ease-in' } :
                    { opacity: '0', transition: 'opacity 1s ease-out' }}
            />
            <p className='flex' style={{ position: 'absolute', bottom: '8px', textAlign: 'center', right: '66%' }}>
                {images.map((_, index) => (
                    <GoHorizontalRule
                        key={index}
                        style={{
                            color: currentImageIndex === index ? '#FE5F55' : '#ccc',
                            fontSize: '30px',
                            margin: '0 4px',
                        }}
                    />
                ))}
            </p>
            <div className={styles.contentBody}>
                <h1 className={styles.cardTitle}>Scrap Management System</h1>
                <p>The system captures and displays real-time scrap data. 
                    The implementation of this scrap system has resulted in a significant reduction in scrap-related costs, improving the company's bottom line.</p>
                <br />
                <p>I used Angular for the frontend and ASP.NET Core for the backend, along with the powerful capabilities of SQL Server. 
                    The application meets the high standards of performance, security, and reliability required by modern manufacturing environments</p>
                <h1 className={styles.cardSubTitle}><span style={{ color: '#FE5F55' }}>Technologies Used</span></h1>
                <div className='flex justify-center align-center pt-4'>
                    <img src='/logos/angularLogo.png' alt='angularlogo' width={75} height={75} />
                    <img src='/logos/netframeworkLogo.png' alt='netlogo' width={110} height={75} />
                    <img src='/logos/sqlLogo.png' alt='sqllogo' width={75} height={75} />
                    <img src='/logos/vsLogo.png' alt='vslogo' width={95} height={75} />
                </div>
            </div>
        </div>
    )
};

export default ProjectCard_SMS;