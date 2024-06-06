import '../../styles/common/Style.css';
import styles from '../../styles/chat/IndividualChattingItem.module.css';
import { Link } from 'react-router-dom';
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

function IndividualChattingItem({ data }) {
    const [userData, setUserData] = useState([]);
    const [imgUrl, setImgUrl] = useState('');
    const username = data.lastSenderId;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_HOST}/api/users`, {
                    params: {
                        userId: data.lastSenderId
                    }
                });
                if (response.status === 200) {
                    console.log("보낸 회원 정보 불러오기 성공");
                    setUserData(response.data);
                    const imgResponse = await axios.get(`${process.env.REACT_APP_HOST}/api/users/profile/img`, {
                        params: {
                            userId: data.lastSenderId
                        }
                    });
                    if (imgResponse.status === 200) {
                        console.log("보낸 회원 프로필 불러오기 성공");
                        setImgUrl(imgResponse.data);
                    } else {
                        console.log("보낸 회원 프로필 불러오기 실패", imgResponse.status);
                    }
                } else {
                    console.log("보낸 회원 정보 불러오기 실패", response.status);
                }
            } catch(error) {
                console.log("서버 연결 실패", error);
            }
        }

        fetchData();
    }, [data.lastSenderId]);

    return (
        <>
            <Link to={`/chat/individual/${username}`} style={{ textDecoration: 'none', color: 'black' }}>
                <div className={styles['container']}>
                    <div className={styles['inContainer']}>
                        <div className={styles['inDiv']}>
                            <div className={styles['imgDiv']}> <img src={imgUrl} /> </div>

                            <div className={styles['info']}>
                                <p>{userData.student_id} {userData.name}</p>
                                <p>{data.lastMessage}</p>
                            </div>
                        </div>
                        
                        <p>{formatTime(data.lastMessageTime)}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default IndividualChattingItem;