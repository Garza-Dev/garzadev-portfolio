import styles from './Contact.module.css';
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Waves from '../Waves/Waves';

const VerticalLine: React.FC = () => {
    return (
        <svg height="100" width="2" style={{ margin: '0 auto', display: 'block' }}>
            <line x1="1" y1="0" x2="1" y2="100" style={{ stroke: '#FE5F55', strokeWidth: '2' }} />
        </svg>
    );
}

const ContactMe: React.FC = () => {
    return (
        <section className={`${styles.main} min-h-full`}>
            <div className={`${styles.container} container mx-auto pr-12 pl-12 mt-28 mb-44`}>
                <div data-aos="fade-right" className={styles.content}>
                    <h1 className={styles.heading}>Contact Me</h1>
                    <div className={styles.body}>
                        <div className='flex justify-start items-center'>
                            <FaLinkedin fontSize={48} color='#FE5F55' className='mr-5' />
                            <a href='https://www.linkedin.com/in/eduardo-garza-b73670178/'
                                className={styles.contactLink}
                                target="_blank" rel="noopener noreferrer">
                                Eduardo Garza
                            </a>
                        </div>
                        <div className='flex justify-start items-center'>
                            <HiOutlineMail fontSize={48} color='#FE5F55' className='mr-5' />
                            <a href='mailto:egarzajr.00@gmail.com'
                                className={styles.contactLink}
                                target="_blank" rel="noopener noreferrer">
                                egarzajr.00@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className='flex flex-col'>
                    <VerticalLine />
                    <div className={styles.iconContainer}>
                        <a href='https://github.com/Garza-Dev' target="_blank" rel="noopener noreferrer">
                            <FaGithub fontSize={32} color='black' />
                        </a>
                        <a href='https://www.youtube.com/@TheCaptlesPRO' target="_blank" rel="noopener noreferrer">
                        <FaYoutube fontSize={32} color='#FF0000' />
                        </a>
                    </div>
                    <VerticalLine />
                </div>
            </div>

            <Waves />
        </section>
    )
}

export default ContactMe;