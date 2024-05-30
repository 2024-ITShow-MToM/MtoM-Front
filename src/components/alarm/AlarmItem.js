import React from "react";
import styles from "../../styles/alarm/Alarm.module.css"

function AlarmItem() {
    return(
        <div className={styles['alarm-box']}>
            <div className={styles['info-container']}>
                <img src="/images/HomeImg.png" alt="profile" className={styles['profile-img']}/>
                <div className={styles['text-box']}>
                    <div className={styles["name-box"]}>
                        <p className={styles['num']}>3314</p>
                        <p className={styles['name']}>최보람</p>
                    </div>
                    <p className={styles['alarm']}>보람이가 맞짱 신청을 보냈어요!</p>
                </div>
            </div>
            <p className={styles['time']}>오전 9:59</p>
        </div>
    )
}
export default AlarmItem;