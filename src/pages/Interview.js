import React from "react";
import InterviewSearch from "../components/interview/InterviewSearch";
import ChooseContainer from "../components/home/interview/ChooseContainer";
import styles from "../styles/home/Home.module.css"
import InterviewItem from "../components/home/InterviewItem";

function Interview(){
    return (
        <>
            <div style={{position:"fixed", top:"0", zIndex:"1"}}>
                <InterviewSearch/>
                <ChooseContainer/>
            </div>
            <div className={styles['home-container']}>
                <div className={styles["interview-box"]} style={{margin:"50vw 0 6vw 0"}}>
                    <InterviewItem text="미림에서 꿈을 이뤘어요" info="6기 박혜림 선배님의 미림생활 부터 회사생활까지 지금 만나보세요!"/>
                    <InterviewItem text="미림에서 꿈을 이뤘어요" info="6기 박혜림 선배님의 미림생활 부터 회사생활까지 지금 만나보세요!"/>
                    <InterviewItem text="미림에서 꿈을 이뤘어요" info="6기 박혜림 선배님의 미림생활 부터 회사생활까지 지금 만나보세요!"/>
                    <InterviewItem text="미림에서 꿈을 이뤘어요" info="6기 박혜림 선배님의 미림생활 부터 회사생활까지 지금 만나보세요!"/>
                    <InterviewItem text="미림에서 꿈을 이뤘어요" info="6기 박혜림 선배님의 미림생활 부터 회사생활까지 지금 만나보세요!"/>
                    <InterviewItem text="미림에서 꿈을 이뤘어요" info="6기 박혜림 선배님의 미림생활 부터 회사생활까지 지금 만나보세요!"/>
                    <InterviewItem text="미림에서 꿈을 이뤘어요" info="6기 박혜림 선배님의 미림생활 부터 회사생활까지 지금 만나보세요!"/>
                    <InterviewItem text="미림에서 꿈을 이뤘어요" info="6기 박혜림 선배님의 미림생활 부터 회사생활까지 지금 만나보세요!"/>
                    <InterviewItem text="미림에서 꿈을 이뤘어요" info="6기 박혜림 선배님의 미림생활 부터 회사생활까지 지금 만나보세요!"/>
                </div>
            </div>
        </>
    )
}
export default Interview;