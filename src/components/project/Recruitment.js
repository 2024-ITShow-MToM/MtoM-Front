import React, { useState } from "react";
import styles from "../../styles/matching/MatchingStep.module.css";
import styled from "styled-components";


const StepContainer = styled.div`
    display: flex;
    width: 100% !important;
    justify-content: space-between;
    margin: 0 auto;
    column-gap:5px;
`;

export default function Recruitment() {
    const [stepsCompleted, setStepsCompleted] = useState(0);



    return (
        <StepContainer>
            {[...Array(5)].map((_, index) => (
                <div
                    key={index}
                    className={`${styles['step']} ${index < stepsCompleted ? styles['completed'] : ''}`}
                    onClick={() => setStepsCompleted(index + 1)}
                ></div>
            ))}
        </StepContainer>
    );
}