'use client';
import styles from './AboutMe.module.css';
import LogoSlider from '../Logo Slider/LogoSlider';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const AboutMe: React.FC = () => {
    useEffect(() => {
        Aos.init({ duration: 1800 });
    },[]);

    const leftLogos = [
        '/logos/reactLogo.png',
        '/logos/azureLogo.png',
        '/logos/godotLogo.png',
        '/logos/sqlLogo.png'
    ];

    const rightLogos = [
        '/logos/Next.js.png',
        '/logos/nodeJsLogo.png',
        '/logos/unityLogo.png',
        '/logos/angularLogo.png'
    ];

    return (
        <section className={styles.main}>
            <div className={`${styles.container} container mx-auto pr-12 pl-12`}>
                <div className={styles.iconContainer}>
                    <img className={styles.pixelArtTop} src='/images/iconPipe.png' alt='Icon-Pipe' width={144} height={114} />
                    <div className={styles.logosContainer}>
                        <LogoSlider images={leftLogos} side='right'/>
                    </div>
                    <img className={styles.pixelArtBtm} src='/images/iconPipe.png' alt='Icon-Pipe' width={144} height={114} />
                </div>
                <div className={styles.content}>
                    <h1 data-aos="fade-right" className={styles.heading}>About Me</h1>
                    <p data-aos="fade-up" className={styles.body}>
                        Hello my name is <span style={{color: '#FE5F55', fontWeight: '600'}}>Eduardo Jr Garza</span> and I am currently the IT Supervisor & Full-Stack Developer for {" "} 
                        <img style={{display: 'inline-flex', height: '3rem', transform: 'translateY(-4px)'}} 
                            src="/images/foxPackaging.png" alt='FoxLogo'
                        />
                        <br />
                        <br />
                        <span style={{fontSize: '1.6rem'}}>🎓</span> I graduated with my Bachelors in Computer Science from 
                        <img style={{display: 'inline-flex', height: '3rem', transform: 'translateY(-4px)'}} 
                            src="/logos/UTRGVLogo.png" alt='UTRGVLogo'
                        />
                        The University of Texas Rio Grande Valley
                        <br />
                        <br />
                        I have a passion for music! I was the 🪗 <span style={{color: '#FE5F55', fontWeight: '600'}}>2019 Texas Folklife Big Squeeze Champion</span>; 
                        an achievment I wear as a badge of honor.
                        <br />
                        <br />
                        Currently, I have been developing Full-Stack Web Applications for work and in my personal time, 
                        I focus on building my <span style={{color: '#FE5F55', fontWeight: '600'}}>Game Development</span> skills. <span style={{fontSize: '1.6rem'}}>🎮</span>
                    </p>
                </div>
                <div className={styles.iconContainer}>
                    <img className={styles.pixelArtTop} src='/images/iconPipe.png' alt='Icon-Pipe' width={64} height={64} />
                    <div className={styles.logosContainer}>
                        <LogoSlider images={rightLogos} side='left'/>
                    </div>
                    <img className={styles.pixelArtBtm} src='/images/iconPipe.png' alt='Icon-Pipe' width={64} height={64} />
                </div>
            </div>
        </section>
    )
}

export default AboutMe;