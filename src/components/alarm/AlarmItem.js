import React, { useEffect, useState } from "react";
import styles from "../../styles/alarm/Alarm.module.css"
import axios from "axios";

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

function AlarmItem({ data }) {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_HOST}/api/users/${data.senderId}`);
                if (response.status === 200) {
                    console.log("회원 정보 조회 성공");
                    setUserData(response.data);
                } else {
                    console.log("회원 정보 조회 실패");
                }
            } catch(error) { 
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return(
        <div className={styles['alarm-box']}>
            <div className={styles['info-container']}>
                <img src={userData.profile} alt="profile" className={styles['profile-img']}/>
                <div className={styles['text-box']}>
                    <div className={styles["name-box"]}>
                        <p className={styles['num']}>{userData.studentId}</p>
                        <p className={styles['name']}>{userData.name}</p>
                    </div>
                    <p className={styles['alarm']}>{data.content}</p>
                </div>
            </div>
            <p className={styles['time']}>{formatTime(data.createdAt)}</p>
        </div>
    )
}
export default AlarmItem;