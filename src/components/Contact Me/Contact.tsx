import styles from './Contact.module.css';
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import Waves from '../Waves/Waves';

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
                <div className={styles.iconContainer}>
                    <div className={styles.verticalIconBarTop}></div>
                    <FaGithub fontSize={32}/>
                    <div className={styles.verticalIconBarBottom}></div>
                </div>
            </div>

            <Waves />
        </section>
    )
}

export default ContactMe;