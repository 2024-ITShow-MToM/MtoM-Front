import React, { useEffect, useId, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&AChooseList.module.css';

import QandAChooseItem from './Q&AChooseItem';

function QandAChooseList() {
    const [data, setData] = useState([]);
    const userId = useSelector(state => state.userId);

    async function fetchData() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/api/qna/selects`, {
                params: {
                    userId: userId
                }
            });
            if (response.status === 200) {
                console.log("양자택일 데이터 불러오기 성공");
                setData(response.data);
            } else {
                console.log("양자택일 데이터 불러오기 실패", response.status);
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
        <>
            <div className={styles['container']}>
                <div className={styles['item-grid-container']}>
                    {
                        data.map((item, index) => {
                            return (
                                <QandAChooseItem
                                    key={index}
                                    data={item}
                                    onePercentage={item.options[0].percentage1}
                                    twoPercentage={item.options[0].percentage2}
                                    options={item.options} 
                                    reFetchData={reFetchData}
                                    userId={useId}
                                />
                            )
                        })
                    }
                </div>
                
            </div>
        </>
    )
}

export default QandAChooseList;