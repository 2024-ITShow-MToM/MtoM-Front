import React, { useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&A.module.css';

import QandASearch from './Q&ASearch';
import QandAHotList from './Q&AHotList';

function QandA() {
    const [selectedChoice, setSelectedChoice] = useState('전체');
    const handleChoiceClick = (choiceType) => {
        setSelectedChoice(choiceType);
    };

    const renderContent = () => {
        switch (selectedChoice) {
            case 'HOT':
                return <QandAHotList />;
        }
    };

    return (
        <>
            <div className={styles['container']}>
                <QandASearch />

                <div className={styles['body']}>
                    <div className={styles['choiceItem']}>
                        <p className={selectedChoice === 'HOT' ? `${styles.selectText} ${styles.selected}` : `${styles.choiceText}`} onClick={() => handleChoiceClick('HOT')}>HOT</p>
                        <p className={selectedChoice === '전체' ? `${styles.selectText} ${styles.selected}` : `${styles.choiceText}`} onClick={() => handleChoiceClick('전체')}>전체</p>
                        <p className={selectedChoice === '양자택일' ? `${styles.selectText} ${styles.selected}` : `${styles.choiceText}`} onClick={() => handleChoiceClick('양자택일')}>양자택일</p>
                    </div>
                </div>

                <div className={styles['change']}>
                    {renderContent()}
                </div>
            </div>
        </>
    )
}

export default QandA;