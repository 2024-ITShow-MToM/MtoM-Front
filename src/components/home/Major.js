import React, { useState } from 'react';
import styles from "../../styles/home/Major.module.css";

function DataSort({ setSelectedMajor }) {
    const [selectedSort, setSelectedSort] = useState('전체');

    const handleButtonClick = (sortType) => {
        setSelectedSort(sortType);
        setSelectedMajor(sortType); 
    };

    return (
        <div className={styles['buttonContainer']}>
            <button
                className={selectedSort === '전체' ? styles['selectButton'] : styles['defaultButton']}
                onClick={() => handleButtonClick('전체')}
            >
                전체
            </button>
            <button
                className={selectedSort === '소프트웨어과' ? styles['selectButton'] : styles['defaultButton']}
                onClick={() => handleButtonClick('소프트웨어과')}
            >
                소프트웨어과
            </button>
            <button
                className={selectedSort === '웹솔루션과' ? styles['selectButton'] : styles['defaultButton']}
                onClick={() => handleButtonClick('웹솔루션과')}
            >
                웹솔루션과
            </button>
            <button
                className={selectedSort === '디자인과' ? styles['selectButton'] : styles['defaultButton']}
                onClick={() => handleButtonClick('디자인과')}
            >
                디자인과
            </button>
        </div>
    );
}

export default DataSort;