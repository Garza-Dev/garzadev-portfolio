import styles from '@/app/styles/Waves.module.css';

const Waves = () => {
    return (
        <div className={styles.wavesContainer}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 2400 800"
                opacity="1"
            >
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sssurf-grad">
                        <stop stopColor="rgb(44,54,85)" stopOpacity="1" offset="0%"></stop>
                        <stop stopColor="rgb(68,84,141)" stopOpacity="1" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g
                    fill="url(#sssurf-grad)"
                    transform="matrix(1,0,0,1,6.8720703125,233.00240993499756)"
                >
                    <path
                        d="M-10,10C63.51190476190476,16.875,197.91666666666666,49.875,342.85714285714283,43C487.79761904761904,36.125,542.8571428571429,-24.666666666666668,685.7142857142857,-23C828.5714285714284,-21.333333333333332,885.7142857142856,59.125,1028.5714285714284,51C1171.4285714285713,42.875,1228.5714285714284,-61.166666666666664,1371.4285714285713,-62C1514.2857142857142,-62.833333333333336,1571.4285714285713,45.333333333333336,1714.2857142857142,47C1857.142857142857,48.666666666666664,1914.285714285714,-63.375,2057.142857142857,-54C2199.9999999999995,-44.625,2276.4880952380954,-2.583333333333343,2400,92C2523.5119047619046,186.58333333333334,3254.1666666666665,231.66666666666669,2650,400C2045.8333333333335,568.3333333333333,156.25,795.8333333333334,-500,900"
                        transform="matrix(1,0,0,1,0,74)"
                        opacity="0.05"
                    ></path>
                    <path
                        d="M-10,10C63.51190476190476,16.875,197.91666666666666,49.875,342.85714285714283,43C487.79761904761904,36.125,542.8571428571429,-24.666666666666668,685.7142857142857,-23C828.5714285714284,-21.333333333333332,885.7142857142856,59.125,1028.5714285714284,51C1171.4285714285713,42.875,1228.5714285714284,-61.166666666666664,1371.4285714285713,-62C1514.2857142857142,-62.833333333333336,1571.4285714285713,45.333333333333336,1714.2857142857142,47C1857.142857142857,48.666666666666664,1914.285714285714,-63.375,2057.142857142857,-54C2199.9999999999995,-44.625,2276.4880952380954,-2.583333333333343,2400,92C2523.5119047619046,186.58333333333334,3254.1666666666665,231.66666666666669,2650,400C2045.8333333333335,568.3333333333333,156.25,795.8333333333334,-500,900"
                        transform="matrix(1,0,0,1,0,148)"
                        opacity="0.53"
                    ></path>
                    <path
                        d="M-10,10C63.51190476190476,16.875,197.91666666666666,49.875,342.85714285714283,43C487.79761904761904,36.125,542.8571428571429,-24.666666666666668,685.7142857142857,-23C828.5714285714284,-21.333333333333332,885.7142857142856,59.125,1028.5714285714284,51C1171.4285714285713,42.875,1228.5714285714284,-61.166666666666664,1371.4285714285713,-62C1514.2857142857142,-62.833333333333336,1571.4285714285713,45.333333333333336,1714.2857142857142,47C1857.142857142857,48.666666666666664,1914.285714285714,-63.375,2057.142857142857,-54C2199.9999999999995,-44.625,2276.4880952380954,-2.583333333333343,2400,92C2523.5119047619046,186.58333333333334,3254.1666666666665,231.66666666666669,2650,400C2045.8333333333335,568.3333333333333,156.25,795.8333333333334,-500,900"
                        transform="matrix(1,0,0,1,0,222)"
                        opacity="1.00"
                    ></path>
                </g>
            </svg>
        </div>
    );
}

export default Waves;