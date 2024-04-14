import React, { useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&AChooseItem.module.css';

function QandAChooseItem({ onePercentage, twoPercentage }) {
    const [isButtonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(!isButtonClicked);
    };

    return (
        <>
            <div className={styles['background']}>
                <div className={styles['container']}>
                    <div className={styles['topContainer']}>
                        <p>🧐 양자택일</p>
                        <p>취업 시 중요한 것은?</p>
                        <div className={styles['info']}>
                            <p>2024.04.13</p>
                            <p>조회수 601회</p>
                        </div>
                    </div>

                    <hr />

                    <div className={styles['buttonContainer']} onClick={handleButtonClick}>
                        <div className={`${isButtonClicked ? styles['clicked'] : ''}`}>
                            <div className={styles['button']}> 
                                <p>연봉</p>
                                <input type='button' style={{width: `${onePercentage}%`}}/> 
                            </div>
                        </div>

                        <div className={`${isButtonClicked ? styles['clicked'] : ''}`}>
                            <div className={styles['button']}>
                                <p>위치</p>
                                <input type='button' style={{width: `${twoPercentage}%`}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QandAChooseItem;