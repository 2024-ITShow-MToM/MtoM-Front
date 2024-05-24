import React from "react";
import Header from "../components/common/Header"
import MatchingStep from "../components/matching/MatcingStep";
import styles from "../styles/matching/Matching.module.css"
import Text from "../components/matching/Text";
import NextButton from "../components/matching/NextButton";
import MajorList from "../components/matching/matchingMajor/MajorList";
import Skeep from "../components/matching/Skeep";

function MatchingMajor() {
    return(
        <div>
            <Header text="매칭 테스트"/>
            <div className={styles['matching-container']}>
                <MatchingStep />
                <Text mainText="원하는 과를 선택해주세요" subText="어떤 " span="과 " subText2="선배에게 멘토 받고싶으신가요? "/>
                <div className={styles['major-container']}>
                    <MajorList />
                </div>
                <Skeep nextRoute="/matchingAdvice"/>
                <NextButton text="다음" nextRoute="/matchingAdvice"/>
            </div>
        </div>
    )
}
export default MatchingMajor;
