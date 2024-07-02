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

    return (
        <section className={`${styles.main}`}>
            <div className={`${styles.container} container mx-auto`}>
                <div className={styles.iconContainer}>
                    <img className={styles.pixelArtTop} src={iconPipeIMG.src} alt='Icon-Pipe' width={144} height={114} />
                    <div className={styles.logosContainer}>
                        {/* <img className={styles.logo} src={reactIcon.src} alt='ReactIcon' width={105} height={105} />
                        <img className={styles.logo} src={azureIcon.src} alt='AzureIcon' width={105} height={105} />
                        <img className={styles.logo} src={godotIcon.src} alt='GodotIcon' width={105} height={105} />
                        <img className={styles.logo} src={sqlLogo.src} alt='SQLIcon' width={105} height={105} /> */}
                        <LogoSlider images={leftLogos}/>
                    </div>
                    <img className={styles.pixelArtBtm} src={iconPipeIMG.src} alt='Icon-Pipe' width={144} height={114} />
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
                        <img src={nextjsIcon.src} alt='NextJsIcon' width={105} height={105} />
                        <img src={nodejsIcon.src} alt='NodeJSIcon' width={105} height={105} />
                        <img src={angularIcon.src} alt='AngularIcon' width={105} height={105} />
                        <img src={unityIcon.src} alt='UnityIcon' width={105} height={105} />
                    </div>
                    <img className={styles.pixelArtBtm} src={iconPipeIMG.src} alt='Icon-Pipe' width={64} height={64} />
                </div>
            </div>
        </section>
    )
}

export default AboutMe;