import React from "react";
import styles from "../../styles/home/Interview.module.css"
import { Icon } from "@iconify/react";
import { useNavigate } from 'react-router-dom';

function InterviewItem(props) {
    const {text, info} = props;

    const navigate = useNavigate();
    const handleNext = () => {
        navigate('/interviewContent');
      };
    return(
        <div className={styles['interview-container']}>
            <img src="/images/HomeImg.png" alt="인터뷰 이미지" className={styles['interview-img']}/>
            <p className={styles['text']}>{text}</p>
            <p className={styles['info']}>{info}</p>
            <div className={styles["read-more-container"]} onClick={handleNext}>
                <p>자세히 보기</p>
                <Icon icon="uiw:swap-right" />
            </div>
        </div>
    )
}
export default InterviewItem;