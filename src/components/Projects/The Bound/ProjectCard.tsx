'use client'
import styles from '../ProjectCard.module.css'
import { useEffect, useState } from 'react';
import { GoHorizontalRule } from 'react-icons/go';

const ProjectCard_TheBound: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const images = [
        '/projectImages/The Den/The Den - 1.png',
        '/projectImages/The Den/The Den - 2.png',
        '/projectImages/The Den/The Den - 3.png',
        '/projectImages/The Den/The Den - 4.png',
    ];

    useEffect(() => {
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
        <div className={styles.card}>
            <img src={images[currentImageIndex]} alt='TheDen1' width="55%" height="auto" className={`mx-5 ${styles.projectImage}`}
                style={fade ? { opacity: '1', transition: 'opacity 0.4s ease-in' } :
                    { opacity: '0', transition: 'opacity 0.4s ease-out' }}
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
                <h1 className={styles.cardTitle}>The Bound</h1>
                <p>-</p>
                <br />
                <p>----
                </p>
                <br />
                <p>----</p>
                <p>----</p>
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

export default ProjectCard_TheBound;