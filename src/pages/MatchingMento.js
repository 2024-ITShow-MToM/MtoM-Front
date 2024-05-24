import React, { useState } from "react";
import Header from "../components/common/Header";
import MatchingStep from "../components/matching/MatcingStep";
import styles from "../styles/matching/Matching.module.css";
import Text from "../components/matching/Text";
import NextButton from "../components/matching/NextButton";
import Mento from "../components/home/Mento";

function FieldContainer() {
    const [selectedMentoIndex, setSelectedMentoIndex] = useState(0);

    const handleMentoClick = (index) => {
        setSelectedMentoIndex(index);
    };

    return (
        <div>
            <Header text="매칭 테스트" />
            <div className={styles['matching-container']}>
                <MatchingStep />
                <Text mainText="최종 멘토 선택" subText="김미림님에게 딱 맞는 멘토 3명을 추려봤습니다!" />
                <div className={styles['mento-container']}>
                    {[0, 1, 2].map((index) => (

                        <div className={styles['mento-item']}>
                            <Mento
                                key={index}
                                isSelected={selectedMentoIndex === index}
                                onClick={() => handleMentoClick(index)}
                            />
                        </div>
                    ))}
                </div>
                <NextButton text="다음" nextRoute="/matchingEnd" />
            </div>
        </div>
    );
}

export default FieldContainer;
