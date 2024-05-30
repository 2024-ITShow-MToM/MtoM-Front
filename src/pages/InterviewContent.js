import React from "react";
import Header from "../components/common/Header";
import styles from "../styles/interview/InterviewContent.module.css"
import QandAQuestionProfile from "../components/q&a/question/Q&AQuestionProfile";
import styles2 from '../styles/home/Home.module.css'
import PostTitle from "../components/q&a/question/PostTitle"
import PostInfo from "../components/q&a/question/PostInfo"

function InterviewContent() {
    return(
        <div>
            <Header text="인터뷰"/>
            <div>
                <img src="/images/HomeImg.png" className={styles['main-img']}/>
                <div className={styles['profile']}><QandAQuestionProfile /></div>
            </div>
            <div className={styles2["home-container"]}>
                <div className={styles['post-container']}>
                    <PostTitle />
                    <PostInfo />
                </div>
                <div className={styles["content-container"]}>
                    <p>안녕하세요</p>
                    <img src="/images/example.png" alt="참고자료"/>
                    <p>안녕하세요</p>
                </div>
            </div>
        </div>
    )
}
export default InterviewContent;