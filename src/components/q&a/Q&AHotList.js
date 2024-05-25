import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&AHotList.module.css';

import DataSort from './DataSort';
import QandAChooseItem from './Q&AChooseItem';
import QandAPostItem from './Q&APostItem';

function QandAHotList() {
    const [postData, setPostData] = useState([]);
    const [chooseData, setChooseData] = useState([]);
    const [onePercentage, setOnePercentage] = useState('60');
    const [twoPercentage, setTwoPercentage] = useState('50');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_HOST}/api/posts`);
                if (response.status === 200) {
                    console.log("게시글 데이터 불러오기 성공");
                    const filteredData = response.data.filter(item => item.views >= 100);
                    setPostData(filteredData);
                } else {
                    console.log("게시글 데이터 불러오기 실패", response.status);
                }
            } catch(error) {
                console.log("서버 연결 실패", error);
            }

            try {
                const response = await axios.get(`${process.env.REACT_APP_HOST}/api/selects`);
                if (response.status === 200) {
                    console.log("양자택일 데이터 불러오기 성공");
                    setChooseData(response.data.data);
                } else {
                    console.log("양자택일 데이터 불러오기 실패", response.status);
                }
            } catch(error) {
                console.log("서버 연결 실패", error);
            }
        }
        fetchData();
    }, []);
    
    return (
        <div className={styles['container']}>
            <DataSort />

            <div className={styles['item-grid-container']}>
                {
                    postData.map((item, index) => {
                        return <QandAPostItem key={index} data={item.post} views={item.views} />
                    })
                }

                {
                    chooseData.map((item, index) =>{
                        return <QandAChooseItem key={index} onePercentage={onePercentage} twoPercentage={twoPercentage} data={item} />
                    })
                }
            </div>
            
        </div>
    )
}

export default QandAHotList;