import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <section className={`${styles.header} flex justify-between items-center px-4 py-1`}>
            <div className={`${styles.brandName} relative py-2`}>
                Garza-Dev
            </div>
            <nav className='flex justify-end px-8'>
                <ul className='flex space-x-15'>
                    <li>
                        <Link href="/about" className={styles.navTxt}><span>About Me</span></Link>
                    </li>
                    <li>
                        <Link href="/projects" className={styles.navTxt}><span>Projects</span></Link>
                    </li>
                    <li>
                        <Link href="/contact" className={styles.navTxt}><span>Contact</span></Link>
                    </li>
                    <li>
                        <Link href="/resume" className={styles.navTxt}><span>Resume</span></Link>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Navbar;