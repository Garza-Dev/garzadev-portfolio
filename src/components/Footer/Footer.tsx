import styles from './Footer.module.css';
import { FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <section className={`${styles.main} min-h-40`}>
            <div className={`${styles.container} container mx-auto pr-12 pl-12`}>
                <div className={styles.content}>
                    <h1 className={`${styles.heading} pb-1`}>Garza-Dev</h1>
                    <p style={{ color: '#FE5F55' }}>Copyright @ 2024 Eduardo Garza.</p>
                    <br />
                    <div className='flex justify-center items-center'>
                        <FaGithub fontSize={32} color='#fff'/>
                        <a href='https://github.com/Garza-Dev/garzadev-portfolio'
                            className={styles.link}
                            target="_blank" rel="noopener noreferrer">
                            Source Code
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer;  