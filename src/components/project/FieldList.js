import React, { useState } from "react";
import Field from "../matching/matchingField/Field";
import styles from "../../styles/matching/Field.module.css";

function FieldContainer() {
    const [selectedIdx, setSelectedIdx] = useState(null);

    const handleFieldClick = (index) => {
        setSelectedIdx(index);
    };

    const fields = [
        { emoji: "🎨", field: "디자인", ex: "UIUX , WEB 등" },
        { emoji: "👩🏻‍💻", field: "프론트엔드" },
        { emoji: "👨🏻‍💻", field: "백엔드" },
        { emoji: "💡", field: "기획", ex: "나는 아이디어 뱅크다!" },
    ];

    return (
        <div className={styles['field-container2']}>
            {fields.map((field, index) => (
                <Field
                    key={index}
                    emoji={field.emoji}
                    field={field.field}
                    ex={field.ex}
                    isSelected={selectedIdx === index}
                    onClick={() => handleFieldClick(index)}
                />
            ))}
        </div>
    );
}

export default FieldContainer;
