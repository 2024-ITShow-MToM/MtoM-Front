import React, { useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&A-hot-list.module.css';

import QandAQuestionItem from './Q&A-question-item';

function QandAHotList() {
    const [selectedSort, setSelectedSort] = useState('');
    const handleSortClick = (sortType) => {
        setSelectedSort(sortType);
    };

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['buttonContainer']}>
                    <button className={selectedSort === '조회수' ? `${styles.selectButton}` : `${styles.defaultButton}`} onClick={() => handleSortClick('조회수')}>조회수</button>
                    <button className={selectedSort === '댓글' ? `${styles.selectButton}` : `${styles.defaultButton}`} onClick={() => handleSortClick('댓글')}>댓글</button>
                    <button className={selectedSort === '하트' ? `${styles.selectButton}` : `${styles.defaultButton}`} onClick={() => handleSortClick('하트')}>하트</button>
                </div>

                <div className={styles['item-grid-container']}> 
                    {/* <div className={styles['item-grid']}> <QandAQuestionItem /> </div>
                    <div className={styles['item-grid']}> <QandAQuestionItem /> </div>
                    <div className={styles['item-grid']}> <QandAQuestionItem /> </div> */}
                    <QandAQuestionItem />
                    <QandAQuestionItem />
                    <QandAQuestionItem />
                </div>
                
            </div>
        </>
    )
}

export default QandAHotList;