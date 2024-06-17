import '../../../styles/common/Style.css';
import styles from '../../../styles/chat/individual chat/ChattingBox.module.css';

import MyChat from './MyChat';
import YourChat from './YourChat';
import { useEffect, useState } from 'react';
import axios from 'axios';

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

function ChattingBox({ date, messages, userId, receiverId }) {
    const [userData, setUserData] = useState([]);
    const [imgData, setImgData] = useState('');
    
    useEffect(() => {
        async function userInfo() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_HOST}/api/users/${receiverId}`);
                if (response.status === 200) {
                    console.log("보낸 회원 정보 불러오기 성공");
                    setUserData(response.data);
                    try {
                        const imgResponse = await axios.get(`${process.env.REACT_APP_HOST}/api/users/profile/img/${receiverId}`);
                        if (imgResponse.status === 200) {
                            console.log("보낸 회원 프로필 이미지 불러오기 성공");
                            setImgData(imgResponse.data);
                        } else {
                            console.log("보낸 회원 프로필 이미지 불러오기 실패", imgResponse.status);
                        }
                    } catch(error) {
                        console.log("서버 연결 실패", error);
                    }
                } else {
                    console.log("보낸 회원 정보 불러오기 실패", response.status);
                }
            } catch(error) {
                console.log("서버 연결 실패", error);
            }
        }
        userInfo();
    }, []);

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['date']}>
                    <hr />
                    <div className={styles['dateBox']}>{date}</div>
                    <hr />
                </div>
                <div className={styles['chatting']}>
                    {messages.map((message, index) => {
                        const previousMessage = messages[index - 1];
                        const showProfile = !previousMessage || previousMessage.senderId !== message.senderId;

                        return message.senderId === userId ? (
                            <MyChat key={index} text={message.message} time={formatTime(message.timestamp)} />
                        ) : (
                            <YourChat
                                key={index}
                                text={message.message}
                                time={formatTime(message.timestamp)}
                                showProfile={showProfile}
                                userData={userData}
                                imgData={imgData}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default ChattingBox;