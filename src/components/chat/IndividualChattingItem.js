import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChattingContext } from './ChattingProvider';
import axios from 'axios';

import '../../styles/common/Style.css';
import styles from '../../styles/chat/IndividualChattingItem.module.css';

const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? '오후' : '오전';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    return `${ampm} ${hours}:${minutesStr}`;
}

function IndividualChattingItem({ data }) {
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);
    const { saveId } = useContext(ChattingContext);

    useEffect(() => {
        async function SendUser() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_HOST}/api/users/${data.userId}`);
                if (response.status === 200) {
                    console.log("채팅하고 있는 회원 정보 불러오기 성공");
                    setUserData(response.data);
                } else {
                    console.log("채팅하고 있는 회원 정보 불러오기 실패", response.status);
                }
            } catch(error) {
                console.log("서버 연결 실패", error);
            }
        }
        SendUser();
    }, [data]);

    const clickedChatting = () => {
        navigate(`/chat/individual/${data.userId}`);
        saveId(data.userId);
    }

    return (
        <>
            <div className={styles['container']} onClick={clickedChatting}>
                    <div className={styles['inContainer']}>
                        <div className={styles['rightDiv']}>
                            <div className={styles['imgDiv']}> <img src={`${process.env.REACT_APP_IMAGEURL}/${userData.profile}`} /> </div>

                            <div className={styles['info']}>
                                <p>{userData.studentId} {userData.name}</p>
                                <p>{data.lastMessage}</p>
                            </div>
                        </div>

                        <div className={styles['leftDiv']}>
                            <p>{formatTime(data.lastMessageTime)}</p>
                            {
                                data.unreadMessageCount > 0 &&
                                <div className={styles['unreadCount']}>
                                    <p>{data.unreadMessageCount}</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
        </>
    )
}

export default IndividualChattingItem;