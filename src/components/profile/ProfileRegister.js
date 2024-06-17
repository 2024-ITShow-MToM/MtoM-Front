import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

import '../../styles/common/Style.css';
import styles from '../../styles/profile/ProfileRegister.module.css';

import Header from './Header';
import ProfileImage from './ProfileImage';
import ProfileInfo from './ProfileInfo';

function ProfileRegister() {
    const navigate = useNavigate();
    const userId = useSelector(state => state.userId);
    const [profileData, setProfileData] = useState({
        name: null, // 이름
        student_id: null, // 학번
        birthday: null, // 생년월일
        gender: null, // 성별
        phonenumber: null, // 휴대폰번호
        major: null, // 전공
        mbti: null, // MBTI
        skills: [], // 스킬
        personal: null, // 조언 성향
        imogi: null, // 이모지 자기소개
        mentoring_topics: null, // 멘토링 주제
        introduction: null // 자기소개
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

        const birthCheck = /^\d{4}\d{2}\d{2}$/;
        let birthday = null;
        if (birthCheck.test(profileData.birthday)) {
            birthday = profileData.birthday;
        } else {
            alert("생년월일 알맞게 작성해주세요.")
            return;
        }

        const phonenumberCheck = /^\d{10,11}$/;
        let phonenumber = null;
        if (phonenumberCheck.test(profileData.phonenumber)) {
            const formattedValue = profileData.phonenumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
            phonenumber = formattedValue;
        } else {
            alert("전화번호 형식에 알맞게 작성해주세요.");
            return;
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_HOST}/api/users/profile/info`, {
                userId: userId,
                name: profileData.name,
                student_id: parseInt(profileData.student_id),
                birthday: birthday,
                gender: profileData.gender,
                phonenumber: phonenumber,
                major: profileData.major,
                mbti: profileData.mbti,
                skills: profileData.skills,
                personal: profileData.personal,
                imogi: profileData.imogi,
                mentoring_topics: profileData.mentoring_topics,
                introduction: profileData.introduction
            });
            if (response.status === 201) {
                console.log("프로필 등록 성공");
                uploadedImage(userId, uploadedImages);
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
            const formData = new FormData();
            formData.append('profile', uploadedImages);
            formData.append('id', userId);

            const response = await axios.post(`${process.env.REACT_APP_HOST}/api/users/profile/img`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            if (response.status === 200) {
                console.log("이미지 업로드 성공");
                navigate('/home');
            } else {
                console.log("이미지 업로드 실패", response.status);
            }
            
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