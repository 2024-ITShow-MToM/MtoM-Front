import React, { useState } from 'react';
import styles from "../../../styles/matching/InputStyle.module.css"

function MajorButton({ setProfileData }){

    const [selectedMajor, setSelectedMajor] = useState('');


    const handleChange = (e) => {
        const { id, value } = e.target;
        setProfileData(data => ({
            ...data,
            [id]: value
        }));
    };

    const majors = ['소프트웨어과', '디자인과', '솔루션과'];
    const handleMajor = (major) => {
        setSelectedMajor(major);
        setProfileData(prevData => ({
            ...prevData,
            'major': major
        }));
    };

    return(
        <div className={styles['majorDiv']}>
            <div className={styles['title']}> <p>과</p> </div>
            <div className={styles['majorInput']}>
                {majors.map((major, index) => (
                    <div
                        id='major'
                        key={index}
                        className={`${styles['border']} ${selectedMajor === major ? styles['borderClicked'] : styles['borderDefault']}`}
                        onClick={() => handleMajor(major)}>
                        <p>{major}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default MajorButton;