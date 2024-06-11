import Link from 'next/link';
import styles from '@/app/styles/Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={`${styles.header} flex justify-between items-center px-4 py-1`} style={{ zIndex: 10 }}>
            <div className={`${styles.brandName} relative py-2`}>
                Garza-Dev
            </div>
            <nav className='flex justify-end px-8'>
                <ul className='flex space-x-9'>
                    <li>
                        <Link href="/about" className={`${styles.navTxt} font-semibold`}> About Me </Link>
                    </li>
                    <li>
                        <Link href="/projects" className={`${styles.navTxt} font-semibold`}>Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact" className={`${styles.navTxt} font-semibold`}>Contact</Link>
                    </li>
                    <li>
                        <Link href="/resume" className={`${styles.navTxt} font-semibold`}>Resume</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;