import React from "react";
import Header from "../components/common/Header"
import MatchingStep from "../components/matching/MatcingStep";
import styles from "../styles/matching/Matching.module.css"
import Text from "../components/matching/Text";
import NameInput from "../components/matching/matchingInput/NameInput";
import BirthdayInput from "../components/matching/matchingInput/BirthdayInput";
import GenderRadio from "../components/matching/matchingInput/GenderRadio";
import PhoneNumInput from "../components/matching/matchingInput/PhoneNumInput";
import MajorButton from "../components/matching/matchingInput/MajorButton"
import NextButton from "../components/matching/NextButton";

function MatchingInfo() {
    return(
        <div>
            <Header text="매칭 테스트"/>
            <div className={styles['matching-container']}>
                <MatchingStep />
                <Text mainText="기본 정보 작성" subText="기본 정보는 멘토멘티 매칭 시 에만 사용됩니다."/>
                <div className={styles['info-container']}>
                    <NameInput />
                    <BirthdayInput />
                    <GenderRadio />
                    <PhoneNumInput />
                    <MajorButton />
                </div>
                <NextButton text="다음" nextRoute="/matchingField"/>
            </div>
        </div>
    )
}
export default MatchingInfo;
