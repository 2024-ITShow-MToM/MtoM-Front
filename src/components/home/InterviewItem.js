import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { InterviewContext } from './InterviewProvider';

import styles from "../../styles/home/Interview.module.css"
import { Icon } from "@iconify/react";

function InterviewItem({ data }) {
    const { saveInterview } = useContext(InterviewContext);

    const navigate = useNavigate();
    const handleNext = () => {
        navigate('/interviewContent');
        saveInterview(data.title, data.content, data.profileImg, data.episodeImg, data.major, data.name);
    };

    return(
        <div className={styles['interview-container']}>
            <img src={data.episodeImg ?`${data.episodeImg}` : '/images/HomeImg.png'} alt="인터뷰 이미지" className={styles['interview-img']}/>
            <p className={styles['text']}>{data.title}</p>
            <p className={styles['info']}>
                {
                    data.content && Array.isArray(data.content) && data.content.map(item => {
                        return <>{item}</>
                    })
                }
            </p>
            <div className={styles["read-more-container"]} onClick={handleNext}>
                <p>자세히 보기</p>
                <Icon icon="uiw:swap-right" />
            </div>
        </div>
    )
}
export default InterviewItem;