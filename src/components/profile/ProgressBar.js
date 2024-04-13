import React, { useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/profile/ProgressBar.module.css';

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const handleProgressChange = (e) => {
    const newProgress = e.target.value;
    setProgress(newProgress);
  };

  const handleContainerClick = (e) => {
    const containerWidth = e.currentTarget.clientWidth;
    const clickPosition = e.clientX - e.currentTarget.getBoundingClientRect().left;
    const newProgress = (clickPosition / containerWidth) * 100;
    setProgress(Math.floor(newProgress));
  };

  return (
    <div className={styles['container']} onClick={handleContainerClick}>
      <div className={styles['progressWrapper']}>
        <input 
            type="range" 
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            className={styles['progressBar']}
        />
        <div className={styles['progressBarDiv']} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

export default ProgressBar;