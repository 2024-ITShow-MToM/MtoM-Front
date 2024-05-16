import React, { useState } from 'react';
import axios from 'axios';
import { HOST } from '../../config/Config';
import { useNavigate } from "react-router-dom";

import '../../styles/common/Style.css';
import styles from '../../styles/join/Join.module.css';

import Header from '../common/Header';

function Join() {
    // const [inputValue, setInputValue] = useState('');
    // const handleInputChange = (event) => {
    //     setInputValue(event.target.value);
    // };
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        user_id: '',
        password: '',
        confirmPassword: '',
        email: '',
    });
    const [passwordMismatch, setPasswordMismatch] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setUserData(data => ({
            ...data,
            [id]: value
        }));
    };

    const buttonClassName = userData.user_id.trim() !== '' ? `${styles['IdButtonClicked']}` : `${styles['IdButtonDefault']}`;


    // 아이디 중복 확인
    // const checkDuplicate = async () => {
    //     try {
    //         const response = await axios.get(`${HOST}/users/checkDuplicate/${userData.user_id}`);
    //         if (response.status === 200) {
    //             console.log('중복없음');
    //         }
    //     } catch(error) {
    //         if (error.response.status === 409) {
    //             alert('아이디가 이미 존재합니다.');
    //         } else {
    //             console.error('중복 확인 요청 실패:', error);
    //         }
    //     }
    // };

    // 회원가입 서버 연결
    const handleSubmit = async (e) => {
        e.preventDefault();
        // await checkDuplicate();
        try {
            const response = await axios.post(`${HOST}/users`, {
                id: String(userData.user_id),
                password: String(userData.password),
                email: String(userData.email),
            });
            if (response.status === 200) {
                console.log('회원가입 성공');
                navigate('/signin');
            } else {
                console.error('회원가입 실패', response.status, response.data);
            }
        } catch(error) {
            console.error('회원가입 서버 연결 실패:', error);
        }
    }

    // 비밀번호 검사
    const handleConfirmPasswordChange = (e) => {
        const { value } = e.target;
        setUserData(data => ({
            ...data,
            confirmPassword: value
        }));
    };

    const validatePassword = () => {
        if (userData.password !== userData.confirmPassword) {
            setPasswordMismatch(true); // 비밀번호 불일치 설정
            alert("비밀번호 불일치");
            return false;
        }
        setPasswordMismatch(false); // 비밀번호 일치 설정
        return true;
    };

    return (
        <>
            <div className={styles['mainContainer']}>
                <div className={styles['navContainer']}> 
                    <Header text={('회원가입')}/>
                </div>

                <div className={styles['joinContainer']}>
                    <form className={styles['formContainer']} onSubmit={handleSubmit}>
                        <div className={styles['idDiv']}>
                            <p>아이디</p>
                            <div className={styles['idInput']}>
                                <input
                                    id='user_id'
                                    type='text'
                                    placeholder='아이디 입력' 
                                    value={userData.user_id}
                                    onChange={handleChange}
                                />
                                <button className={buttonClassName}>중복확인</button>
                            </div>
                        </div>

                        <div className={styles['pwDiv']}>
                            <p>비밀번호</p>
                            <div className={styles['pwInput']}>
                                <input id="password" type='password' placeholder='비밀번호' onChange={handleChange} />
                                <input id='confirmPassword' type='password' placeholder='비밀번호 확인' onChange={handleConfirmPasswordChange}/>
                            </div>
                        </div>

                        <div className={styles['emailDiv']}>
                            <p>메일 인증하기</p>
                            <div className={styles['emailInput']}>
                                <div className={styles['googleInput']}>
                                    <input id='email' placeholder='구글 메일 입력' type='text' onChange={handleChange}/>
                                    <button>인증번호 받기</button>
                                </div>
                                <input type='number' placeholder='인증번호 입력' />
                            </div>
                        </div>

                        <button type='submit' onClick={validatePassword}>가입하기</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Join;