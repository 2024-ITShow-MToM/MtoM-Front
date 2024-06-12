import React, { useState } from "react";
import styles from "../../../styles/matching/Advice.module.css"

function Advice(props) {
    const { text, onClick } = props;
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
        if (typeof onClick === 'function') {
            onClick();
        }
    };

    return (
        <div
            className={`${styles['advice-box']} ${isSelected ? styles['selected'] : ''}`}
            onClick={handleClick}>
            {text}
        </div>
    );
}

export default Advice;
