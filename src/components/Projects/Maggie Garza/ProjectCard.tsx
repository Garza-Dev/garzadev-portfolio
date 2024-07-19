'use client'
import styles from '../ProjectCard.module.css'
import { useEffect, useState } from 'react';
import { GoHorizontalRule } from 'react-icons/go';

export const getSlideshowDuration = () => {
    return (8000 * 3); //3 images each 8 seconds long
}

const ProjectCard_MaggieGarza: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const images = [
        '/projectImages/Maggie Garza/Maggie Garza - 1.png',
        '/projectImages/Maggie Garza/Maggie Garza - 2.png',
        '/projectImages/Maggie Garza/Maggie Garza - 3.png'
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
        <div className={`${styles.card} h-128`}>
            <img src={images[currentImageIndex]} alt={`MaggieGarza-${currentImageIndex}`} width="55%" height="auto" className={`mx-5 ${styles.projectImage}`}
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
                <h1 className={styles.cardTitle}>Maggie Garza Website</h1>
                <p>I created this web portfolio for my mom who is a Christian singer/songwriter. She uses this webpage to reach out to her clients and showcase her music!</p>
                <br />
                <p>This Next.js web application is deployed on Azure using the Static Web App Service. CI/CD is also setup with GitHub Actions. 
                    It has a few API calls to Spotify's API as well as links to her other music platforms. The website is also fully mobile responsive!
                </p>
                <h1 className={styles.cardSubTitle}><span style={{ color: '#FE5F55' }}>Technologies Used</span></h1>
                <div className='flex justify-center align-center pt-4'>
                    <img src='/logos/reactLogo.png' alt='reactlogo' width={75} height={75} />
                    <img src='/logos/Next.js.png' alt='nextjslogo' width={90} height={75} />
                    <img src='/logos/azureLogo.png' alt='azurelogo' width={75} height={75} />
                </div>
            </div>
        </div>
    )
};

export default ProjectCard_MaggieGarza;