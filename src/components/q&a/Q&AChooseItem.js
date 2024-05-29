import React, { useEffect, useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&AChooseItem.module.css';
import axios from 'axios';

function QandAChooseItem({ onePercentage, twoPercentage, data, options, reFetchData }) {
    const [isButtonClicked, setButtonClicked] = useState(false);
    const [clickedOption, setClickedOption] = useState('');
    const userId = localStorage.getItem("userId");
    let selectId = data.selectId;

    const firstPercentage = onePercentage.toFixed(1);
    const secondPercentage = twoPercentage.toFixed(1);

    const handleOptionClick = (option) => {
        setClickedOption(option);
        setButtonClicked(true);
        optionData(option);
    };

    useEffect(() => {
        if (data.userSelect != null) {
            setButtonClicked(true);
            setClickedOption(data.userSelect);
        }
    }, [data.userSelect]);

    // 양자택일 투표 서버 연결
    async function optionData(clickedOption) {
        try {
            const request = await axios.post(`${process.env.REACT_APP_HOST}/api/selects/${selectId}/${clickedOption}?userId=${userId}`);
            if (request.status === 200) {
                console.log(`${clickedOption} 선택`);
                reFetchData();
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
                            <p>{data.createdAt}</p>
                            <p>참여 {data.participants}명</p>
                        </div>
                    </div>

                    <hr />

                    <div className={styles['buttonContainer']}>
                        <div className={isButtonClicked ? styles['clicked'] : ''}>
                            <div className={`${styles['button']} ${clickedOption === "option1" ? styles['myclicked'] : styles['noclicked']}`} onClick={() => handleOptionClick("option1")}> 
                                <div className={isButtonClicked ? styles['clickedOption'] : styles['option']}>
                                    <p>{options[0].option1}</p>
                                    {
                                        isButtonClicked &&
                                        <p>{firstPercentage}%</p>
                                    }
                                </div>
                                <input type='button' style={{width: `${firstPercentage}%`}}/>
                            </div>
                        </div>

                        <div className={isButtonClicked ? styles['clicked'] : ''}>
                            <div className={`${styles['button']} ${clickedOption === "option2" ? styles['myclicked'] : styles['noclicked']}`} onClick={() => handleOptionClick("option2")}>
                                <div className={isButtonClicked ? styles['clickedOption'] : styles['option']}>
                                    <p>{options[0].option2}</p>
                                    {
                                        isButtonClicked &&
                                        <p>{secondPercentage}%</p>
                                    }
                                </div>
                                <input type='button' style={{width: `${secondPercentage}%`}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QandAChooseItem;