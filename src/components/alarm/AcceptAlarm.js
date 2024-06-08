import React from "react";
import styles from "../../styles/alarm/Alarm.module.css"

function AcceptAlarm() {
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
            <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"end"}}>
                <p className={styles['time']}>오전 9:59</p>
                <div className={styles.acceptBtn}>
                    <button>수락</button>
                    <button>거절</button>
                </div>
            </div>
        </div>
    )
}
export default AcceptAlarm;