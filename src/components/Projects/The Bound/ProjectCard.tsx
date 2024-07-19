'use client'
import styles from '../ProjectCard.module.css'
import { useEffect, useState } from 'react';
import { GoHorizontalRule } from 'react-icons/go';

export const getSlideshowDuration = () => {
    return (8000 * 3); //3 images each 8 seconds long
}

const ProjectCard_TheBound: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const images = [
        '/projectImages/The Bound/The Bound - 1.jpg',
        '/projectImages/The Bound/The Bound - 2.png',
        '/projectImages/The Bound/The Bound - 3.png'
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
            <img src={images[currentImageIndex]} alt={`TheBound-${currentImageIndex}`}width="55%" height="auto" className={`mx-5 ${styles.projectImage}`}
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
                <h1 className={styles.cardTitle}>The Bound</h1>
                <p>This indie horror game I developed has a total of 14k views over 3 devlogs on my YouTube channel!</p>
                <br />
                <div className='flex justify-center items-center'>
                    <a href="https://www.youtube.com/@TheCaptlesPRO" target="_blank" rel="noopener noreferrer">
                        <img src='/logos/youtubeLogo.png' alt='youtubelogo' width={75} height='auto' />
                    </a>
                    <p style={{ marginLeft: '2%' }}>Check out my channel for more info!</p>
                </div>
                <br />
                <p>I am passionate about creating memorable gaming experiences and continuously improving my skills.
                    I am eager to bring my creativity, technical expertise, and dedication to any game development team.
                </p>
                <h1 className={styles.cardSubTitle}><span style={{ color: '#FE5F55' }}>Technologies Used</span></h1>
                <div className='flex justify-center align-center pt-4'>
                    <img src='/logos/unityLogo.png' alt='unitylogo' width={75} height={75} />
                    <img src='/logos/vsLogo.png' alt='vslogo' width={120} height='auto' />
                    <img src='/logos/photoshopLogo.png' alt='photoshoplogo' width={75} height={75} />
                </div>
            </div>
        </div>
    )
};

export default ProjectCard_TheBound;