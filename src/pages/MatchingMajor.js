import React, { useState, useContext, useEffect } from "react";
import Header from "../components/common/Header";
import MatchingStep from "../components/matching/MatcingStep";
import styles from "../styles/matching/Matching.module.css";
import Text from "../components/matching/Text";
import NextButton from "../components/matching/NextButton";
import MajorList from "../components/matching/matchingMajor/MajorList";
import Skeep from "../components/matching/Skeep";
import { MatchingContext } from "../components/matching/MatchingProvider";
import { useNavigate } from "react-router-dom";

function MatchingMajor() {
    const { saveMajor } = useContext(MatchingContext);
    const [selectedMajor, setSelectedMajor] = useState(null);
    const navigate = useNavigate();

    const handleMajorSelect = (index) => {
        const majorMapping = {
            0: "소프트웨어과",
            1: "웹솔루션과",
            2: "디자인과"
        };

        const selectedMajor = majorMapping[index];
        if (selectedMajor) {
            console.log("Selected major:", selectedMajor);
            setSelectedMajor(selectedMajor);
            saveMajor(selectedMajor);
        } else {
            console.log("Invalid index:", index);
        }
    };

    useEffect(() => {
        console.log("Selected major after setState:", selectedMajor);
    }, [selectedMajor]);

    const handleNext = () => {
        navigate("/matchingAdvice");
    };

    return (
        <div>
            <Header text="매칭 테스트" />
            <div className={styles['matching-container']}>
                <MatchingStep />
                <Text mainText="원하는 과를 선택해주세요" subText="어떤 " span="과 " subText2="선배에게 멘토 받고싶으신가요? " />
                <div className={styles['major-container']}>
                    <MajorList onMajorSelect={handleMajorSelect} />
                </div>
                <Skeep nextRoute="/matchingAdvice" />
                <NextButton text="다음" onClick={handleNext} disabled={selectedMajor === null} />
            </div>
        </div>
    );
}

export default MatchingMajor;