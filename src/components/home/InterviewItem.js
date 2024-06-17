import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { InterviewContext } from './InterviewProvider';

import styles from "../../styles/home/Interview.module.css"
import { Icon } from "@iconify/react";

function InterviewItem(props) {
    const {text, content, profileImg, episodeImg, major, name} = props;
    const { saveInterview } = useContext(InterviewContext);

    const navigate = useNavigate();
    const handleNext = () => {
        navigate('/interviewContent');
        saveInterview(text, content, profileImg, episodeImg, major, name);
    };

    return(
        <div className={styles['interview-container']}>
            <img src={episodeImg ?`${episodeImg}` : '/images/HomeLogo.png'} alt="인터뷰 이미지" className={styles['interview-img']}/>
            <p className={styles['text']}>{text}</p>
            <p className={styles['info']}>
                {
                    content && Array.isArray(content) && content.map(item => {
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