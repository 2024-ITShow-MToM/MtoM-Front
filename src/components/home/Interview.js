import React from "react";
import styles from "../../styles/home/Interview.module.css"
import { Icon } from "@iconify/react";

function Interview(props) {
    const {text, info} = props;
    return(
        <div className={styles['interview-container']}>
            <img src="/images/HomeImg.png" alt="인터뷰 이미지" className={styles['interview-img']}/>
            <p className={styles['text']}>{text}</p>
            <p className={styles['info']}>{info}</p>
            <div className={styles["read-more-container"]}>
                <p>자세히 보기</p>
                <Icon icon="uiw:swap-right" />
            </div>
        </div>
    )
}
export default Interview