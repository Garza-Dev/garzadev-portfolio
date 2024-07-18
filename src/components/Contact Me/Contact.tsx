import styles from './Contact.module.css';
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const ContactMe: React.FC = () => {
    return (
        <section className={`${styles.main} min-h-96`}>
            <div className={`${styles.container} container mx-auto pr-12 pl-12`}>
                <div className={styles.content}>
                    <h1 data-aos="fade-right" className={styles.heading}>Contact Me</h1>
                    <p className={styles.body}>
                        <div className='flex justify-start items-center'>
                            <FaLinkedin fontSize={48} color='#FE5F55' />
                            <p>&emsp; LinkedIn link</p>
                        </div>
                        <div className='flex justify-start items-center'>
                            <HiOutlineMail fontSize={48} color='#FE5F55' />
                            <p>&emsp; mail to link</p>
                        </div>

                    </p>
                </div>
            </div>
        </section>
    )
}

export default ContactMe;