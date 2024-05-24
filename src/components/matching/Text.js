import React from "react";
import { useLocation } from "react-router-dom";
import styles from "../../styles/matching/Text.module.css"

function Text(props) {
    const { mainText, subText, span, subText2 } = props;
    const location = useLocation();
    const isMatchingEndPage = location.pathname === "/matchingEnd";

    return (
        <div className={styles['text-container']} style={{ textAlign: isMatchingEndPage ? "center" : "left" }}>
            <p className={styles['main-text']}>{mainText}</p>
            <p className={styles['sub-text']}>{subText}<span style={{color:"var(--sub-color)"}}>{span}</span>{subText2}</p>
        </div>
    )
}

export default Text;
