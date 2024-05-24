import React from "react";
import styles from "../../../styles/matching/Field.module.css";

function Field(props) {
    const { emoji, field, ex, isSelected, onClick } = props;
    return (
        <div
            className={`${styles['field-box']} ${isSelected ? styles['selected'] : ''}`}
            onClick={onClick}
        >
            <div>{emoji}</div>
            <p className={styles['field']}>{field}</p>
            <p className={styles['ex']}>{ex}</p>
        </div>
    );
}

export default Field;
