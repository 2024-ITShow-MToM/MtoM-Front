import React, { useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&AChooseList.module.css';

import QandAChooseItem from './Q&AChooseItem';
import DataSort from './DataSort';

function QandAChooseList() {
    const [onePercentage, setOnePercentage] = useState('60');
    const [twoPercentage, setTwoPercentage] = useState('50');

    return (
        <>
            <div className={styles['container']}>
                <DataSort />

                <div className={styles['item-grid-container']}>
                    <QandAChooseItem onePercentage={onePercentage} twoPercentage={twoPercentage}/>
                </div>
                
            </div>
        </>
    )
}

export default QandAChooseList;