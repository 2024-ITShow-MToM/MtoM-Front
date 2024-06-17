import React, { useState, useEffect } from "react";
import styles from "../../../styles/matching/Advice.module.css";

function Advice({ text, onClick, onAdviceSelect, isSelected }) {
    const [selectedIdx, setSelectedIdx] = useState(null);

    useEffect(() => {
        console.log("Selected major after setState:", selectedIdx);
    }, [selectedIdx]);

    const handleClick = () => {
        if (typeof onClick === 'function') {
            onClick();
        }
        setSelectedIdx(selectedIdx);
        if (typeof onAdviceSelect === 'function') {
            onAdviceSelect(selectedIdx);
        }
    };

    return (
        <div
            className={`${styles['advice-box']} ${isSelected ? styles['selected'] : ''}`}
            onClick={onClick}>
            {text}
        </div>
    );
}

export default Advice;
