import React, { useState, useEffect } from 'react';

import '../../../../styles/common/Style.css';
import styles from '../../../../styles/my/profile/edit/MyProfileInfo.module.css';

import MyProfileSkill from './MyProfileSkill';
import MyProfileEmoji from './MyProfileEmoji';
import MyProfileAdvice from './MyProfileAdvice';

function MyProfileInfo({ setProfileData, profileData }) {
    const [selectedMajor, setSelectedMajor] = useState(profileData.major || '');
    const [skills, setSkills] = useState(profileData.skills || []);
    const [selectedGender, setSelectedGender] = useState('');
    
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

    useEffect(() => {
        setSelectedMajor(profileData.major || '');
    }, [profileData.major]);

    const majors = ['소프트웨어과', '디자인과', '솔루션과'];
    const handleMajor = (major) => {
        setSelectedMajor(major);
        setProfileData(prevData => ({
            ...prevData,
            'major': major
        }));
    };

    useEffect(() => {
        setSelectedGender(profileData.gender || '');
    }, [profileData.gender]);

    return (
        <>
            <div className={styles['nameDiv']}>
                <div className={styles['name']}>
                    <div className={styles['nameTitle']}> <p>이름</p> </div>
                    <input id='name' type='text' value={profileData.name || ''} onChange={handleChange} />
                </div>

                <div className={styles['studentId']}>
                    <div className={styles['studentIdTitle']}> <p>학번</p> </div>
                    <input id='student_id' type='text' value={profileData.student_id || ''} onChange={handleChange}/>
                </div>
            </div>

            <div className={styles['myself']}>
                <div className={styles['title']}> <p>자기소개 글</p> </div>
                <input id='information' onChange={handleChange} />
            </div>


            <div className={styles['birthDiv']}>
                <div className={styles['title']}> <p>생년월일</p> </div>
                <div className={styles['birthInput']}>
                    <input id='birthday' type='text' value={profileData.birthday || ''} placeholder='예) 20060101' onChange={handleBirthday} />
                </div>
            </div>

            <div className={styles['radioGroup']}>
                <div className={styles['title']}> <p>성별</p> </div>
                <div className={styles['radioDiv']}>
                    <div className={styles['radioButton']}>
                        <input 
                            id='female' 
                            type='radio' 
                            name='gender' 
                            value='여자' 
                            checked={selectedGender === '여자'} 
                            onChange={(e) => { 
                                setSelectedGender('여자'); 
                                handleChange(e); 
                            }} 
                        />
                        <label 
                            className={`${styles['label']} ${selectedGender === '여자' ? styles['selectedLabel'] : ''}`}
                            htmlFor='female'
                        >
                            여자
                        </label>
                    </div>
                    <div className={styles['radioButton']}>
                        <input 
                            id='male' 
                            type='radio' 
                            name='gender' 
                            value='남자' 
                            checked={selectedGender === '남자'}
                            onChange={(e) => { 
                                setSelectedGender('남자'); 
                                handleChange(e); 
                            }} 
                        />
                        <label 
                            className={`${styles['label']} ${selectedGender === '남자' ? styles['selectedLabel'] : ''}`}
                            htmlFor='male'
                        >
                            남자
                        </label>
                    </div>
                </div>
            </div>

            <div className={styles['phoneDiv']}>
                <div className={styles['title']}> <p>연락처</p> </div>
                <div className={styles['phoneInput']}>
                    <input id='phonenumber' value={profileData.phonenumber || ''} type='text' onChange={handlePhoneNumber} />
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
                <input placeholder='MBTI 입력' value={profileData.mbti || ''} id='mbti' onChange={handleChange} />
            </div>

            <div className={styles['tag']}>
                <div className={styles['title']}> <p>해시태그</p> </div>
                <input placeholder='해시태그 입력' value={profileData.mentoring_topics || ''} id='mentoring_topics' onChange={handleChange} />
            </div>

            <MyProfileSkill setProfileData={setProfileData} profileData={profileData} skills={skills} setSkills={setSkills} />

            <MyProfileAdvice setProfileData={setProfileData} profileData={profileData} />

            <MyProfileEmoji setProfileData={setProfileData} profileData={profileData} />
        </>
    )
}

export default MyProfileInfo;