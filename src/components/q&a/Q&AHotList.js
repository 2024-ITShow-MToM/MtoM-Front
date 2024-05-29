import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&AHotList.module.css';

import QandAChooseItem from './Q&AChooseItem';
import QandAPostItem from './Q&APostItem';

function QandAHotList() {
    const [postData, setPostData] = useState([]);
    const [chooseData, setChooseData] = useState([]);

    const userId = localStorage.getItem("userId");
    async function fetchData() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/api/qna`, {
                params: {
                    userId: userId
                }
            });
            if (response.status === 200) {
                console.log("Q&A 전체 데이터 불러오기 성공");
                setPostData(response.data.filter(item => item.hasOwnProperty('postId')));
                setChooseData(response.data.filter(item => item.hasOwnProperty('selectId')));
            } else {
                console.log("Q&A 전체 데이터 불러오기 실패", response.status);
            }
        } catch(error) {
            console.log("서버 연결 실패", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const reFetchData = () => {
        fetchData();
    };
    
    return (
        <div className={styles['container']}>
            <div className={styles['item-grid-container']}>
                {
                    postData.map((item, index) => {
                        return <QandAPostItem key={index} data={item} views={item.viewCount} hearts={item.heartCount} comments={item.commentCount} />
                    })
                }

                {
                    chooseData.map((item, index) =>{
                        return <QandAChooseItem key={index} onePercentage={item.options[0].percentage1} twoPercentage={item.options[0].percentage2} data={item} options={item.options} reFetchData={reFetchData} />
                    })
                }
            </div>
        </div>
    )
}

export default QandAHotList;