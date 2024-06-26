import Link from 'next/link';
import Image from 'next/image';
import EduardoGarzaIMG from '../../../public/Eduardo-Garza.jpg';
import styles from './Hero.module.css';
import Waves from '../Waves/Waves';

const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className="mx-auto flex flex-col md:flex-row items-center p-8">
                <div className="flex-1 md:pr-8">
                    <div className={styles.heroName}>Eduardo Garza</div>
                    <svg width="100%" height="2.4" viewBox="0 0 100 2" preserveAspectRatio="none">
                        <line x1="30" y1="1" x2="70" y2="1" stroke="#FE5F55" strokeWidth="3" />
                    </svg>
                    <p className={styles.heroTxt}>Game Developer | Web Developer | Musician</p>
                </div>
                <div className={styles.imgContainer}>
                    <Image src={EduardoGarzaIMG.src} layout='fill' objectFit='cover' className={styles.img} alt='Eduardo Garza' />
                </div>
            </div>

            <Waves />
        </section>
    )
}

export default Hero;