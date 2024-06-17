import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/matching/NextButton.module.css";

function NextButton({ text, nextRoute, disabled, onClick }) {
    const navigate = useNavigate();

    return (
        <button
            className={disabled ? styles['disabled-button'] : styles['next-button']}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

export default NextButton;