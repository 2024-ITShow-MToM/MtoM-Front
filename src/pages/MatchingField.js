import React, { useState, useContext, useEffect } from "react";
import Header from "../components/common/Header";
import MatchingStep from "../components/matching/MatcingStep";
import Text from "../components/matching/Text";
import styles from "../styles/matching/Matching.module.css";
import NextButton from "../components/matching/NextButton";
import FieldList from "../components/matching/matchingField/FieldList";
import { MatchingContext } from "../components/matching/MatchingProvider";
import { useNavigate } from "react-router-dom";

function MatchingField() {
    const { saveWorry } = useContext(MatchingContext);
    const [selectedField, setSelectedField] = useState(null);
    const navigate = useNavigate();

    const handleFieldSelect = (index) => {
        const fieldMapping = {
            0: "취업",
            1: "진학",
            2: "학교생활",
            3: "글로벌",
            5: "외부활동"
        };

        const selectedField = fieldMapping[index];
        if (selectedField) {
            console.log("Selected field:", selectedField);
            setSelectedField(selectedField);
            saveWorry(selectedField);
        } else {
            console.log("Invalid index:", index);
        }
    };

    useEffect(() => {
        console.log("Selected field after setState:", selectedField);
    }, [selectedField]);

    const handleNext = () => {
        navigate("/matchingMajor");
    };

    return (
        <div>
            <Header text="매칭 테스트" />
            <div className={styles['matching-container']}>
                <MatchingStep />
                <Text mainText="당신의 최근 고민은?" subText="어떤 " span="분야" subText2="를 고민하고 있나요?" />
                <FieldList onFieldSelect={handleFieldSelect} />
                <NextButton text="다음" onClick={handleNext} disabled={selectedField === null} />
            </div>
        </div>
    );
}

export default MatchingField;