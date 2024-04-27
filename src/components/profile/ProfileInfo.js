import React, { useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/profile/ProfileInfo.module.css'

import { FiPlus } from "react-icons/fi";
import ProfileSkill from './ProfileSkill';
import ProfileEmoji from './ProfileEmoji';
import ProfileAdvice from './ProfileAdvice';

function ProfileInfo() {
    const [phone, setPhone] = useState('');
    const handlePhoneChange = (event) => {
        const inputValue = event.target.value;
        const sanitizedValue = inputValue.replace(/[^\d-]/g, '');
        setPhone(sanitizedValue);
    };

    const [selectedMajor, setSelectedMajor] = useState(null);
    const majors = ['소프트웨어과', '디자인과', '웹 솔루션과'];
    const handleMajorClick = (major) => {
        setSelectedMajor(major);
    };

    return (
        <>
            <div className={styles['nameDiv']}>
                <div className={styles['name']}>
                    <div className={styles['nameTitle']}> <p>이름</p> </div>
                    <input type='text'/>
                </div>

                <div className={styles['studentId']}>
                    <div className={styles['studentIdTitle']}> <p>학번</p> </div>
                    <input type='text'/>
                </div>
            </div>


            <div className={styles['birthDiv']}>
                <div className={styles['title']}> <p>생년월일</p> </div>
                <div className={styles['birthInput']}>
                    <input type='number' placeholder='예) 20060101'/>
                </div>
            </div>

            <div className={styles['radioGroup']}>
                <div className={styles['title']}> <p>성별</p> </div>
                <div className={styles['radioDiv']}>
                    <div className={styles['radioButton']}>
                        <input type='radio' name='radioButton' value='여자'/>
                        <label className={styles['label']}>여자</label>
                    </div>
                    <div className={styles['radioButton']}>
                        <input type='radio' name='radioButton' value='남자'/>
                        <label className={styles['label']}>남자</label>
                    </div>
                </div>
            </div>

            <div className={styles['phoneDiv']}>
                <div className={styles['title']}> <p>연락처</p> </div>
                <div className={styles['phoneInput']}>
                    <input type='text' value={phone} onChange={handlePhoneChange}/>
                </div>
            </div>

            <div className={styles['majorDiv']}>
                <div className={styles['title']}> <p>과</p> </div>
                <div className={styles['majorInput']}>
                    {majors.map((major, index) => (
                        <div
                            key={index}
                            className={`${styles['border']} ${selectedMajor === major ? styles['borderClicked'] : styles['borderDefault']}`}
                            onClick={() => handleMajorClick(major)}>
                            <p value={major}>{major}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles['mbti']}>
                <div className={styles['title']}> <p>MBTI</p> </div>
                <input placeholder='MBTI 입력'/>
            </div>

            <div className={styles['tag']}>
                <div className={styles['title']}> <p>멘토링 주제</p> </div>
                <input placeholder='태그입력'/>
            </div>

            <ProfileSkill />

            <ProfileAdvice />

            <ProfileEmoji />
        </>
    )
}

export default ProfileInfo;