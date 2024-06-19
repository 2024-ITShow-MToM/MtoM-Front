import React from "react";
import InterviewSearch from "../components/interview/InterviewSearch";
import ChooseContainer from "../components/home/interview/ChooseContainer";
import styles from "../styles/home/Home.module.css"
import InterviewItem from "../components/home/InterviewItem";
import { InterviewData } from "../components/interview/InterviewData";

function Interview(){
    return (
        <>
            <div style={{position:"fixed", top:"0", zIndex:"1"}}>
                <InterviewSearch/>
                <ChooseContainer/>
            </div>
            <div className={styles['home-container']}>
                <div className={styles["interview-box"]} style={{margin:"55vw 0 6vw 0"}}>
                    {InterviewData.map((data, index) => {
                        return <InterviewItem key={index} data={data} />
                    })}
                </div>
            </div>
        </>
    )
}
export default Interview;