import styles from '@/app/styles/AboutMe.module.css';

const AboutMe: React.FC = () => {
    return (
        <section id="about" className={styles.about}>
            <h2>About Me</h2>
            <p>
                Hello, My name is Jack Parsons and I am a fourth-year Computer Science Student attending the University of Alberta.
            </p>
            {/* More content here */}
        </section>
        // <main className={`${styles.main} container mx-auto px-19`}>
        //     <div className={styles.heading}>
        //         <h1>About Me</h1>
        //     </div>
        //     <div>
        //         <p>
        //             Very long text goes here copy and paste this
        //             Very long text goes here copy and paste this
        //             Very long text goes here copy and paste this
        //             Very long text goes here copy and paste this
        //             Very long text goes here copy and paste this
        //             Very long text goes here copy and paste this
        //             Very long text goes here copy and paste this
        //             Very long text goes here copy and paste this
        //             Very long text goes here copy and paste this
        //             Very long text goes here copy and paste this
        //         </p>
        //     </div>
        // </main>
    )
}

export default AboutMe;