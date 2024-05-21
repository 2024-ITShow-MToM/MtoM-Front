import React, { useState } from 'react';
import { HOST } from '../../config/Config';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&AChooseItem.module.css';
import axios from 'axios';

function QandAChooseItem({ onePercentage, twoPercentage, data }) {
    const [isButtonClicked, setButtonClicked] = useState(false);
    const [clickedOption, setClickedOption] = useState(null);
    let date = data.createdAt.slice(0, 10);
    const userId = localStorage.getItem("userId");
    let postId = data.id;

    const handleOptionClick = (option) => {
        if (!isButtonClicked) {
            setClickedOption(option);
            setButtonClicked(true);
            optionData(option);
        }
    };

    async function optionData(clickedOption) {
        try {
            const request = await axios.post(`${HOST}/api/selects/${postId}/option${clickedOption}?userId=${userId}`);
            if (request.status === 200) {
                console.log(`option${clickedOption} 선택`);
            } else {
                console.log("option 선택 실패", request.status);
            }
        } catch(error) {
            console.log("서버 연결 실패", error);
        }
    }

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