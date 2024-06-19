import React, { useContext } from "react";
import { InterviewContext } from "../components/home/InterviewProvider";

import Header from "../components/common/Header";
import styles from "../styles/interview/InterviewContent.module.css"
import QandAQuestionProfile from "../components/q&a/question/Q&AQuestionProfile";
import styles2 from '../styles/home/Home.module.css'
import PostTitle from "../components/q&a/question/PostTitle"
import PostInfo from "../components/q&a/question/PostInfo"

function InterviewContent() {
    const { title, info, profileImg, episodeImg, major, name } = useContext(InterviewContext);
    const data = {
        createdAt: '2024.06.14',
        view: 3,
        user: [{
            profile: profileImg,
            major: major,
            name: name
        }]
    };

    return(
        <div>
            <Header text="인터뷰"/>
            <div>
                {
                    episodeImg ?
                    <img src={episodeImg} className={styles['main-img']}/>
                    :
                    <img src="/images/대체Img.png" className={styles['main-img']}/>
                }
                <div className={styles['profile']}><QandAQuestionProfile data={data.user} /></div>
            </div>
            <div className={styles2["home-container"]}>
                <div className={styles['post-container']}>
                    <PostTitle title={title} />
                    <PostInfo data={data} />
                </div>
                <div className={styles["content-container"]}>
                    {
                        info && Array.isArray(info) && info.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default InterviewContent;