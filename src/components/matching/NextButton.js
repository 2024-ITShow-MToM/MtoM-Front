import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/matching/NextButton.module.css";

function NextButton({ text, nextRoute }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(nextRoute);
    };

    return (
        <button className={styles['btnStyle']} onClick={handleClick}>
            {text}
        </button>
    );
}

export default NextButton;
