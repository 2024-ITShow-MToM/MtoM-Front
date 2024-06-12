import React from "react";
import Header from "../components/common/Header";
import styles from "../styles/matching/Matching.module.css";
import Text from "../components/matching/Text";
import NextButton from "../components/matching/NextButton";
import Mento from "../components/home/Mento";

function MatchingEnd() {
    
    return (
        <div>
            <Header text="매칭 테스트" />
            <div className={styles['matching-container']}>
                <Text mainText="매칭 완료!" subText="매칭된 멘토멘티와 유익한 활동을 응원 합니다!"/>
                <div className={styles['matching-box']}>
                        <Mento />
                        <hr className={styles['line-style']}/>
                        <Mento />
                </div>
                <NextButton text="신청하기" nextRoute="/home"/>
            </div>
        </div>
    );
}

export default MatchingEnd;