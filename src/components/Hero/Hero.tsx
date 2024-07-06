import styles from './Hero.module.css';
import Waves from '../Waves/Waves';

const Hero: React.FC = () => {
    return (
        <section className={`${styles.hero} min-h-screen flex`}>
            <div className="mx-auto flex flex-col md:flex-row items-center p-8">
                <div className="flex-1 md:pr-8">
                    <div className={`${styles.heroName} ${styles.fadeInFromTop}`}>Eduardo Garza</div>
                    <svg width="100%" height="2.4" viewBox="0 0 100 2" preserveAspectRatio="none">
                        <line className={styles.lineLeft} x1="0" y1="1" x2="50" y2="1" stroke="#FE5F55" strokeWidth="3" />
                        <line className={styles.lineRight} x1="50" y1="1" x2="100" y2="1" stroke="#FE5F55" strokeWidth="3" />
                    </svg>
                    <p className={`${styles.heroTxt} ${styles.fadeInFromBottom}`}>Game Developer | Full-Stack Developer | Musician</p>
                </div>
                <div className={styles.imgContainer}>
                    <img src="/images/Eduardo-Garza.jpg" alt='Eduardo Garza' style={{objectFit: 'cover'}} />
                </div>
            </div>

            <Waves />
        </section>
    )
}

export default Hero;