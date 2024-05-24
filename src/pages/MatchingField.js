import React from "react";
import Header from "../components/common/Header";
import MatchingStep from "../components/matching/MatcingStep";
import Text from "../components/matching/Text";
import styles from "../styles/matching/Matching.module.css"
import NextButton from "../components/matching/NextButton";
import Field from "../components/matching/matchingField/Field";
import FieldList from "../components/matching/matchingField/FieldList"

function MatchingField(){
    return(
        <div>
            <Header text="매칭 테스트"/>
            <div className={styles['matching-container']}>
                <MatchingStep />
                <Text mainText="당신의 최근 고민은?" subText="어떤 " span="분야" subText2="를 고민하고 있나요?"/>
                <FieldList />
                <NextButton text="다음" nextRoute="/matchingMajor"/>
            </div>
        </div>
    )
}
export default MatchingField;