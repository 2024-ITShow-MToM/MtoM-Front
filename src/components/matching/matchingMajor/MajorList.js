import React, { useState, useEffect } from "react";
import Major from "./Major";
import styles from "../../../styles/matching/Major.module.css";

function MajorList({ onMajorSelect }) {
    const [selectedIdx, setSelectedIdx] = useState(null);

    const handleMajorClick = (index) => {
        setSelectedIdx(index);
        onMajorSelect(index);
    };

    useEffect(() => {
        console.log("Selected major after setState:", selectedIdx);
    }, [selectedIdx]);

    const majors = [
        { major: "S", majorName: "소프트웨어과" },
        { major: "W", majorName: "솔루션과" },
        { major: "D", majorName: "디자인과" },
    ];

    return (
        <div className={styles['field-container']}>
            {majors.map((major, index) => (
                <Major
                    key={index}
                    major={major.major}
                    majorName={major.majorName}
                    isSelected={selectedIdx === index}
                    onClick={() => handleMajorClick(index)}
                />
            ))}
        </div>
    );
}

export default MajorList;