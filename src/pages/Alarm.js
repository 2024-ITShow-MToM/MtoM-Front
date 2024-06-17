import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import styles from "../styles/home/Home.module.css";
import AlarmItem from "../components/alarm/AlarmItem";

import { useSelector } from "react-redux";
import axios from "axios";

function Alarm() {
    const userId = useSelector(state => state.userId);
    const [alarms, setAlarms] = useState([]);

    useEffect(() => {
        const getAlarm = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_HOST}/api/alarm`,{
                    params: {
                        userId: userId,
                    }
                });
                if (res.status === 200) {
                    setAlarms(res.data);
                } else {
                    console.log(res.status);
                }
            } catch (error) {
                console.log("서버 연결 실패", error);
            }
        };
        getAlarm();
    }, [userId]);

    return (
        <div>
            <Header text="알림" alarm={`(${alarms.length})`} />
            <div className={styles['home-container']}>
                <div className={styles['alarm-container']}>
                    {alarms.map((alarm, index) => (
                        <AlarmItem key={index} {...alarm} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Alarm;