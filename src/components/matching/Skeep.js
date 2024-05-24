import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/matching/Skeep.module.css";

function Skeep({ text, nextRoute }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(nextRoute);
    };

    return (
        <div className={styles['skeep']} onClick={handleClick}>상관없어요!</div>
    );
}

export default Skeep;
