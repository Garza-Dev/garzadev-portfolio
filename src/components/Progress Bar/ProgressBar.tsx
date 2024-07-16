import styles from './ProgressBar.module.scss';
import { useEffect, useState } from 'react';
import { getSlideshowDuration as getDenDuration } from '../Projects/The Den/ProjectCard';
import { getSlideshowDuration as getBoundDuration } from '../Projects/The Bound/ProjectCard';
import { getSlideshowDuration as getSMSDuration } from '../Projects/Scrap Management System/ProjectCard';
import { getSlideshowDuration as getMaggieDuration } from '../Projects/Maggie Garza/ProjectCard';
import Image from 'next/image';

const ProgressBar: React.FC = () => {
  const totalDuration = getBoundDuration() + getDenDuration() + getSMSDuration() + getMaggieDuration(); // total duration in seconds
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(prevTime => {
        if (prevTime < totalDuration) {
          return prevTime + 1;
        } else {
          clearInterval(interval);
          return prevTime;
        }
      });
    }, 1000); // update every second

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [totalDuration]);

  return (
    <div className={styles.progressContainer}>
      <Image 
        src={'/images/car-sprite.gif'} 
        alt='carsprite' 
        width={96} 
        height={96} 
        className={styles.carImage}
        // style={{ left: `${(currentTime * 10)}px` }}
      />
      <progress className={styles.progressBar} value={currentTime} max={totalDuration / 1000} />
    </div>
  )
};

export default ProgressBar;