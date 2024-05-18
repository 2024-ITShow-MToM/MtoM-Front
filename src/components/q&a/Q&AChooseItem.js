import React, { useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&AChooseItem.module.css';

function QandAChooseItem({ onePercentage, twoPercentage, data }) {
    const [isButtonClicked, setButtonClicked] = useState(false);
    const handleButtonClick = () => {
        setButtonClicked(!isButtonClicked);
    };

    let date = data.createdAt.slice(0, 10);

    return (
        <>
            <div className={styles['background']}>
                <div className={styles['container']}>
                    <div className={styles['topContainer']}>
                        <p>🧐 양자택일</p>
                        <p>{data.title}</p>
                        <div className={styles['info']}>
                            <p>{date}</p>
                            {/* <p>조회수 601회</p> */}
                        </div>
                    </div>

                    <hr />

                    <div className={styles['buttonContainer']} onClick={handleButtonClick}>
                        <div className={`${isButtonClicked ? styles['clicked'] : ''}`}>
                            <div className={styles['button']}> 
                                <p>{data.option1}</p>
                                <input type='button' style={{width: `${onePercentage}%`}}/>
                            </div>
                        </div>

                        <div className={`${isButtonClicked ? styles['clicked'] : ''}`}>
                            <div className={styles['button']}>
                                <p>{data.option2}</p>
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