import React, { useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/profile/ProfileInfo.module.css'

import ProfileSkill from './ProfileSkill';
import ProfileEmoji from './ProfileEmoji';
import ProfileAdvice from './ProfileAdvice';

function ProfileInfo({ setProfileData }) {
    const [selectedMajor, setSelectedMajor] = useState('');
    const [skills, setSkills] = useState([]);
    
    const handleChange = (e) => {
        const { id, value } = e.target;
        setProfileData(data => ({
            ...data,
            [id]: value
        }));
    };

    const handleBirthday = (event) => {
        const inputValue = event.target.value;
        const value = inputValue.replace(/\D/g, '');
        handleChange({ target: { id: event.target.id, value: value } });
    };

    const handlePhoneNumber = (event) => {
        const inputValue = event.target.value;
        const value = inputValue.replace(/\D/g, '');
        handleChange({ target: { id: event.target.id, value: value } });
    };


    const majors = ['소프트웨어과', '디자인과', '웹 솔루션과'];
    const handleMajor = (major) => {
        setSelectedMajor(major);
        setProfileData(prevData => ({
            ...prevData,
            'major': major
        }));
    };

    return (
        <>
            <div className={styles['nameDiv']}>
                <div className={styles['name']}>
                    <div className={styles['nameTitle']}> <p>이름</p> </div>
                    <input id='name' type='text' onChange={handleChange} />
                </div>

                <div className={styles['studentId']}>
                    <div className={styles['studentIdTitle']}> <p>학번</p> </div>
                    <input id='student_id' type='text' onChange={handleChange}/>
                </div>
            </div>


            <div className={styles['birthDiv']}>
                <div className={styles['title']}> <p>생년월일</p> </div>
                <div className={styles['birthInput']}>
                    <input id='birthday' type='text' placeholder='예) 20060101' onChange={handleBirthday} />
                </div>
            </div>

            <div className={styles['radioGroup']}>
                <div className={styles['title']}> <p>성별</p> </div>
                <div className={styles['radioDiv']}>
                    <div className={styles['radioButton']}>
                        <input id='gender' type='radio' name='radioButton' value='여자' onChange={handleChange} />
                        <label className={styles['label']}>여자</label>
                    </div>
                    <div className={styles['radioButton']}>
                        <input id='gender' type='radio' name='radioButton' value='남자' onChange={handleChange} />
                        <label className={styles['label']}>남자</label>
                    </div>
                </div>
            </div>

            <div className={styles['phoneDiv']}>
                <div className={styles['title']}> <p>연락처</p> </div>
                <div className={styles['phoneInput']}>
                    <input id='phonenumber' type='text' onChange={handlePhoneNumber} />
                </div>
            </div>

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

            <div className={styles['mbti']}>
                <div className={styles['title']}> <p>MBTI</p> </div>
                <input placeholder='MBTI 입력' id='mbti' onChange={handleChange} />
            </div>

            <div className={styles['tag']}>
                <div className={styles['title']}> <p>멘토링 주제</p> </div>
                <input placeholder='태그입력' id='mentoring_topics' onChange={handleChange} />
            </div>

            <ProfileSkill setProfileData={setProfileData} skills={skills} setSkills={setSkills} />

            <ProfileAdvice setProfileData={setProfileData} />

            <ProfileEmoji setProfileData={setProfileData} />
        </>
    )
}

export default ProfileInfo;