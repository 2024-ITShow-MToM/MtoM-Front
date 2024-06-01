import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../../../../styles/common/Style.css';
import styles from '../../../../styles/my/profile/edit/MyProfileEdit.module.css';

import Header from '../../../common/Header';
import MyProfileImage from './MyProfileImage';
import MyProfileInfo from './MyProfileInfo';

function MyProfileEdit() {
    const userId = localStorage.getItem("userId"); // userId는 회원가입했을 때 아이디
    const [profileData, setProfileData] = useState({
        name: null,
        student_id: null,
        birthday: null,
        gender: null,
        phonenumber: null,
        major: null,
        mbti: null,
        skills: [],
        personal: null,
        imogi: null,
        mentoring_topics: null
    });

    const [imgData, setImgData] = useState('');
    const [uploadedImages, setUploadedImages] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_HOST}/api/users`, {
                    params: {
                        userId: userId
                    }
                });
                if (response.status === 200) {
                    console.log("회원 정보 불러오기 성공");
                    setProfileData(response.data);
                    // 회원 이미지 조회하기
                    try {
                        const imgResponse = await axios.get(`${process.env.REACT_APP_HOST}/api/users/profile/img`, {
                            params: {
                                userId: userId
                            }
                        });
                        if (imgResponse.status === 200) {
                            console.log("회원 프로필 이미지 불러오기 성공");
                            setImgData(imgResponse.data);
                        } else {
                            console.log("회원 프로필 이미지 불러오기 실패", imgResponse.status);
                        }
                    } catch(error) {
                        console.log("서버 연결 실패", error);
                    }
                } else {
                    console.log("회원 정보 불러오기 실패", response.status);
                }
            } catch(error) {
                console.log("서버 연결 실패", error);
            }
        }
        fetchData();
    }, [userId]);
    

    // 프로필 등록 서버 연결
    const save = async (e) => {
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
                mentoring_topics: profileData.mentoring_topics
            });
            if (response.status === 200) {
                console.log("프로필 다시 등록 성공");
                uploadedImage(userId, uploadedImages);
            } else {
                console.log("프로필 다시 등록 실패", response.status);
            }
        } catch(error) {
            console.log("서버 연결 실패", error);
        }
    }

    // 프로필 이미지 등록 서버 연결
    const uploadedImage = async (userId, uploadedImages) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_HOST}/api/users/profile/img`, uploadedImages, userId, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            if (response.status === 200) {
                console.log("이미지 다시 업로드 성공");
            } else {
                console.log("이미지 다시 업로드 실패", response.status);
            }
        } catch (error) {
            console.error("이미지 업로드 요청 실패 : ", error);
        }
    }

    return (
        <>
            <div className={styles['allContainer']}>
                <Header text={('프로필 편집')}/>
                <div className={styles['container']}>
                    <div className={styles['register']}>
                        <div className={styles['imgDiv']}>
                            <MyProfileImage
                                setUploadedImages={setUploadedImages}
                                imageUrl={imgData}
                            />
                        </div>
                        <div className={styles['inputStdentId']}>
                            <p>학번 이름 입력하기</p>
                        </div>
                    </div>

                    <div className={styles['info']}>
                        <MyProfileInfo
                            setProfileData={setProfileData}
                            profileData={profileData}
                        />

                        <div className={styles['button']}>
                            <button onClick={save}>저장하기</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MyProfileEdit;