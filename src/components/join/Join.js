import React, { useState } from 'react';
import axios from 'axios';
import { HOST } from '../../config/Config';
import { useNavigate } from "react-router-dom";

import '../../styles/common/Style.css';
import styles from '../../styles/join/Join.module.css';

import Header from '../common/Header';

function Join() {
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

    // 회원가입 서버 연결
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${HOST}/api/users`, {
                id: userData.user_id,
                password: userData.password,
                email: userData.email,
            });
            if (response.status === 201) {
                console.log('회원가입 성공', response.data);
                navigate('/signin');
            } else {
                console.error('회원가입 실패', response.status);
            }
        } catch(error) {
            if (error.response.data.message === "이미 가입된 이메일 입니다") {
                alert(error.response.data.message);
            } else if (error.response.data.message === "이미 가입된 아이디 입니다") {
                alert(error.response.data.message);
            } else if (error.response.data.message === "존재하지 않은 이메일 입니다") {
                alert(error.response.data.message);
            } else {
                console.error('회원가입 서버 연결 실패:', error);
            }
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
            setPasswordMismatch(true);
            alert("비밀번호가 일치하지 않습니다");
            return false;
        }
        setPasswordMismatch(false);
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