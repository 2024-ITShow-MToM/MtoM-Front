import React, { useState, useEffect } from "react";
import Field from "./Field";
import styles from "../../../styles/matching/Field.module.css";

function FieldList({ onFieldSelect }) {
    const [selectedIdx, setSelectedIdx] = useState(null);

    const handleFieldClick = (index) => {
        console.log("Clicked index:", index);
        setSelectedIdx(index);
        onFieldSelect(index);
    };

    useEffect(() => {
        console.log("인덱스", selectedIdx);
    }, [selectedIdx]);

    const fields = [
        { emoji: "👔", field: "취업", ex: "취업 분야  /  포토폴리오 이력서 / 취업처" },
        { emoji: "🎓", field: "진학", ex: "재직자 특별전형  /  조기 취업형과" },
        { emoji: "🏫", field: "학교생활", ex: "동아리 /  학생회" },
        { emoji: "🌎", field: "글로벌", ex: "인턴쉽  /  유학 / 문화교류" },
        { emoji: "🏆", field: "외부활동", ex: "경진대회  /  기능대회 등" },
    ];

    return (
        <div className={styles['field-container']}>
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

export default FieldList;