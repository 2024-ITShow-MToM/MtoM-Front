import React from "react";
import { useLocation } from "react-router-dom";
import styles from "../../styles/matching/MatchingStep.module.css";

function MatchingStep() {
    const location = useLocation();
    let stepsCompleted = 0;

    if (location.pathname === "/matchingMajor") {
        stepsCompleted = 2;
    } else if (location.pathname === "/matchingAdvice") {
        stepsCompleted = 3;
    } else if (location.pathname === "/matchingMento") {
        stepsCompleted = 4;
    }

    return (
        <div className={styles['step-container']}>
            {[...Array(4)].map((_, index) => (
                <div
                    key={index}
                    className={`${styles['step']} ${index < stepsCompleted ? styles['completed'] : ''}`}
                ></div>
            ))}
        </div>
    );
}

export default MatchingStep;
