import React from "react";
import Header from "../components/common/Header";
import styles from "../styles/home/Home.module.css";
import AlarmItem from "../components/alarm/AlarmItem";

function Alarm(){
    return(
        <div>
            <Header text="알림" alarm="(2)"/>
            <div className={styles['home-container']}>
                <div className={styles['alarm-container']}>
                    <AlarmItem />
                    <AlarmItem />
                    <AlarmItem />
                </div>
            </div>
        </div>
    )
}
export default Alarm;