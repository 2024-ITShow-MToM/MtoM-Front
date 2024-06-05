import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../../styles/common/Style.css';
import styles from '../../styles/chat/ChattingList.module.css';

import IndividualChattingItem from './IndividualChattingItem';
import GroupChattingItem from './GroupChattingItem';

function ChattingList() {
    const [data, setData] = useState([]);
    const userId = localStorage.getItem("userId");
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_HOST}/api/chat/notifications`, {
                    params: {
                        userId: userId
                    }
                });
                if (response.status === 200) {
                    console.log("어떤 메시지가 왔는지 데이터 조회 성공");
                    setData(response.data);
                } else {
                    console.log("어떤 메시지가 왔는지 데이터 조회 실패", response.status);
                }
            } catch(error) {
                console.error("서버 연결 실패", error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div className={styles['container']}>
                <IndividualChattingItem data={data} />  
                {/* <GroupChattingItem />   */}
            </div>
        </>
    )
}

export default ChattingList;