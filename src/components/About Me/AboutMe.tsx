import styles from './AboutMe.module.css';
import iconPipeIMG from '../../../public/iconPipe.png';
import angularIcon from '../../../public/angularLogo.png';
import azureIcon from '../../../public/azureLogo.png';
import godotIcon from '../../../public/godotLogo.png';
import sqlLogo from '../../../public/sqlLogo.png';
import nextjsIcon from '../../../public/Next.js.png';
import nodejsIcon from '../../../public/nodeJsLogo.png';
import reactIcon from '../../../public/reactLogo.png';
import unityIcon from '../../../public/unityLogo.png';
import LogoSlider from '../Logo Slider/LogoSlider';

const AboutMe: React.FC = () => {
    const leftLogos = [
        reactIcon.src,
        azureIcon.src,
        godotIcon.src,
        sqlLogo.src
    ];

    const rightLogos = [
        nextjsIcon.src,
        nodejsIcon.src,
        unityIcon.src,
        angularIcon.src
    ];

    return (
        <section className={`${styles.main}`}>
            <div className={`${styles.container} container mx-auto`}>
                <div className={styles.iconContainer}>
                    {/* <img className={styles.pixelArtTop} src={iconPipeIMG.src} alt='Icon-Pipe' width={144} height={114} /> */}
                    <div className={styles.logosContainer}>
                        <LogoSlider images={leftLogos} side='right'/>
                    </div>
                    {/* <img className={styles.pixelArtBtm} src={iconPipeIMG.src} alt='Icon-Pipe' width={144} height={114} /> */}
                </div>
                <div className={styles.content}>
                    <h1 className={styles.heading}>About Me</h1>
                    <p>
                        Very long text goes here copy and paste this
                        Very long text goes here copy and paste this
                        Very long text goes here copy and paste this
                        Very long text goes here copy and paste this
                        Very long text goes here copy and paste this
                        Very long text goes here copy and paste this
                        Very long text goes here copy and paste this
                        Very long text goes here copy and paste this
                        Very long text goes here copy and paste this
                        Very long text goes here copy and paste this
                    </p>
                </div>
                <div className={styles.iconContainer}>
                    <img className={styles.pixelArtTop} src={iconPipeIMG.src} alt='Icon-Pipe' width={64} height={64} />
                    <div className={styles.logosContainer}>
                        {/* <LogoSlider images={rightLogos} side='left'/> */}
                    </div>
                    <img className={styles.pixelArtBtm} src={iconPipeIMG.src} alt='Icon-Pipe' width={64} height={64} />
                </div>
            </div>
        </section>
    )
}

export default AboutMe;