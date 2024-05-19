import React, { useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&AChooseItem.module.css';

function QandAChooseItem({ onePercentage, twoPercentage, data }) {
    const [isButtonClicked, setButtonClicked] = useState(false);
    const [clickedOption, setClickedOption] = useState(null);

    const handleOptionClick = (option) => {
        if (!isButtonClicked) {
            setClickedOption(option);
            setButtonClicked(true);
        }
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
                            <p>참여 56명</p>
                        </div>
                    </div>

                    <hr />

                    <div className={styles['buttonContainer']}>
                        <div className={isButtonClicked ? styles['clicked'] : ''}>
                            <div className={`${styles['button']} ${clickedOption === 1 ? styles['myclicked'] : ''}`} onClick={() => handleOptionClick(1)}> 
                                <div className={isButtonClicked ? styles['clickedOption'] : styles['option']}>
                                    <p>{data.option1}</p>
                                    {
                                        isButtonClicked &&
                                        <p>{onePercentage}%</p>
                                    }
                                </div>
                                <input type='button' style={{width: `${onePercentage}%`}}/>
                            </div>
                        </div>

                        <div className={isButtonClicked ? styles['clicked'] : ''}>
                            <div className={`${styles['button']} ${clickedOption === 2 ? styles['myclicked'] : ''}`} onClick={() => handleOptionClick(2)}>
                                <div className={isButtonClicked ? styles['clickedOption'] : styles['option']}>
                                    <p>{data.option2}</p>
                                    {
                                        isButtonClicked &&
                                        <p>{twoPercentage}%</p>
                                    }
                                </div>
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