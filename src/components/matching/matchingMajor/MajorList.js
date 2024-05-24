import React, { useState } from "react";
import Major from "./Major";
import styles from "../../../styles/matching/Major.module.css";

function MajorList() {
    const [selectedIdx, setSelectedIdx] = useState(null);

    const handleFieldClick = (index) => {
        setSelectedIdx(index);
    };

    const mayers = [
        { major: "S", majorName: "소프트웨어과" },
        { major: "W", majorName: "웹솔루션과" },
        { major: "D", majorName: "디자인과" },
    ];

    return (
        <div className={styles['field-container']}>
            {mayers.map((mayers, index) => (
                <Major
                    key={index}
                    major={mayers.major}
                    majorName={mayers.majorName}
                    isSelected={selectedIdx === index}
                    onClick={() => handleFieldClick(index)}
                />
            ))}
        </div>
    );
}

export default MajorList;
