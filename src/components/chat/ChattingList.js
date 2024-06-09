import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import '../../styles/common/Style.css';
import styles from '../../styles/chat/ChattingList.module.css';

import IndividualChattingItem from './IndividualChattingItem';
import GroupChattingItem from './GroupChattingItem';

function ChattingList() {
    const [messageData, setMessageData] = useState([]);
    const userId = useSelector(state => state.userId);

    async function MessageCount() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/api/chat/notifications`, {
                params: {
                    userId: userId
                }
            });
            if (response.status === 200) {
                console.log("어떤 메시지가 왔는지 데이터 조회 성공");
                setMessageData(response.data);
            } else {
                console.log("어떤 메시지가 왔는지 데이터 조회 실패", response.status);
            }
        } catch(error) {
            console.error("서버 연결 실패", error);
        }
    }

    useEffect(() => {
        if (userId) {
            MessageCount();
        }
    }, [userId]);

    return (
        <>
            <div className={styles['container']}>
                {
                    messageData.length > 0 &&
                    messageData.map((item, index) => (
                        <IndividualChattingItem key={index} data={item} />
                    ))
                }
                {/* <GroupChattingItem />   */}
            </div>
        </>
    )
}

export default ChattingList;