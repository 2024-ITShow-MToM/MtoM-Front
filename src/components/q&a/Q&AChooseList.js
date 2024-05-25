import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&AChooseList.module.css';

import QandAChooseItem from './Q&AChooseItem';
import DataSort from './DataSort';

function QandAChooseList() {
    const [onePercentage, setOnePercentage] = useState('60');
    const [twoPercentage, setTwoPercentage] = useState('50');

    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_HOST}/api/selects`);
                if (response.status === 200) {
                    console.log("양자택일 데이터 불러오기 성공");
                    setData(response.data.data);
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
        <>
            <div className={styles['container']}>
                {/* <DataSort setSortData={setData} /> */}

                <div className={styles['item-grid-container']}>
                    {
                        data.map((item, index) =>{
                            return <QandAChooseItem key={index} onePercentage={onePercentage} twoPercentage={twoPercentage} data={item} />
                        })
                    }
                </div>
                
            </div>
        </>
    )
}

export default QandAChooseList;