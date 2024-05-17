import React, { useState } from 'react';
import { HOST } from '../../config/Config';
import axios from 'axios';

import '../../styles/common/Style.css';
import styles from '../../styles/profile/ProfileRegister.module.css';

import Header from '../common/Header';
import ProfileImage from './ProfileImage';
import ProfileInfo from './ProfileInfo';

function ProfileRegister() {
    // userId는 회원가입했을 때 아이디
    const [profileData, setProfileData] = useState({
        name: null,
        student_id: null,
        birthday: null,
        gender: null,
        phonenumber: null,
        major: null,
        mbti: null,
        subject: null,
        skill_name: null,
        skill_score: null,
        personal: null,
        imoji: null
    });
    const [uploadedImages, setUploadedImages] = useState('');

    // 프로필 등록 서버 연결
    const start = async (e) => {
        e.preventDefault();
        const hasEmptyField = Object.values(profileData).some(value => value === null || (Array.isArray(value) && value.some(item => Object.values(item).some(subValue => subValue === null))));
        if (hasEmptyField) {
            alert("모든 항목을 입력해주세요.");
            return;
        }

        try {
            const response = await axios.post(`${HOST}/api/users/profile/info`, {
                // userId: userId,
                name: profileData.name,
                student_id: profileData.student_id,
                birthday: profileData.birthday,
                gender: profileData.gender,
                phonenumber: profileData.phonenumber,
                major: profileData.major,
                mbti: profileData.mbti,
                skill_name: profileData.skill_name,
                skill_score: profileData.skill_score,
                personal: profileData.personal,
                imoji: profileData.imoji
            });
            if (response.status === 200) {
                console.log("프로필 등록 성공");
                // uploadedImage(userId, uploadedImages);
            } else {
                console.log("프로필 등록 실패", response.status);
            }
        } catch(error) {
            console.log("서버 연결 실패", error);
        }
    }

    // 프로필 이미지 등록 서버 연결
    const uploadedImage = async (userId, uploadedImages) => {
        try {
            const response = await axios.post(`${HOST}/api/users/profile/img`, uploadedImages, userId, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            
            console.log("이미지 업로드 성공", response.data);
        } catch (error) {
            console.error("이미지 업로드 요청 실패 : ", error);
        }
    }

    return (
        <>
            <div className={styles['allContainer']}>
                <Header text={('프로필 등록')}/>
                <div className={styles['container']}>
                    <div className={styles['register']}>
                        <div className={styles['imgDiv']}>
                            <ProfileImage 
                                setUploadedImages={setUploadedImages}
                            />
                        </div>
                        <div className={styles['inputStdentId']}>
                            <p>학번 이름 입력하기</p>
                        </div>
                    </div>

                    <div className={styles['info']}>
                        <ProfileInfo 
                            setProfileData={setProfileData}
                        />

                        <div className={styles['button']}>
                            <button onClick={start}>시작하기</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProfileRegister;