import Link from 'next/link';
import styles from '@/app/styles/Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={`${styles.header} flex justify-between items-center px-4 py-1`} style={{ zIndex: 10 }}>
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
        </header>
    )
}

export default Header;