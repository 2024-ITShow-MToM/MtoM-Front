import React from "react";
import Header from "../components/common/Header"
import MatchingStep from "../components/matching/MatcingStep";
import styles from "../styles/matching/Matching.module.css"
import Text from "../components/matching/Text";
import NextButton from "../components/matching/NextButton";
import MajorList from "../components/matching/matchingMajor/MajorList";
import Advice from "../components/matching/matchingAdvice/Advice";
import Skeep from "../components/matching/Skeep";


function matchingAdvice() {
    return(
        <div>
            <Header text="매칭 테스트"/>
            <div className={styles['matching-container']}>
                <MatchingStep />
                <Text mainText="원하는 조언 성향 선택해주세요" subText="어떤 " span="조언 성향 " subText2="을 가진 선배에게 멘토 받고싶으신가요?"/>
                <div className={styles['advice-container']}>
                    <Advice text="현실적으로 조언 해주는 🤔"/>
                    <Advice text="계획적인 조언을 주는 📝"/>
                    <Advice text="감정적인 공감을 잘 해주는 🥹"/>
                    <Advice text="현실적인 대책법을 알려주는 🥸"/>
                    <Advice text="💬 나의 경험을 설명 해 줄 수 있는"/>
                    <Advice text="이야기를 잘 경청 해 줄 수 있는 👂🏻"/>
                    <Advice text="좋은 아이디어를 제공 할 수 있는 💡"/>
                    <Advice text="존중과 인정을 해주는 😌"/>
                </div>
                <Skeep nextRoute="/matchingMento"/>
                <NextButton text="다음" nextRoute="/matchingMento"/>
            </div>
        </div>
    )
}
export default matchingAdvice;
