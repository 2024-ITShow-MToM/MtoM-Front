import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import '../../styles/common/Style.css';
import styles from '../../styles/join/Join.module.css';

import Header from '../common/Header';

function Join() {
    const navigate = useNavigate();
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [idMessage, setIdMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [pwMessage, setPwMessage] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [idFail, setIdFail] = useState(false);
    const [pwFail, setPwFail] = useState(false);
    const [emailFail, setEmailFail] = useState(false);

    const [userData, setUserData] = useState({
        user_id: '',
        password: '',
        confirmPassword: '',
        email: '',
    });

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
        if (!userData.user_id || !userData.password || !userData.email) {
            alert('학생 정보를 모두 입력하세요.');
            return;
        } else if(!validatePassword()) {
            return;
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_HOST}/api/users`, {
                id: userData.user_id,
                password: userData.password,
                email: userData.email,
            });
            if (response.status === 201) {
                console.log('회원가입 성공');
                navigate('/signin');
            } else {
                console.error('회원가입 실패', response.status);
            }
        } catch(error) {
            if (error.response && error.response.data) {
                const errorMessage = error.response.data.message;
                if (errorMessage === "이미 가입된 이메일 입니다" || errorMessage === "존재하지 않은 이메일 입니다") {
                    setEmailMessage(errorMessage);
                    setEmailFail(true);
                }
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
            setPwMessage("비밀번호가 일치하지 않습니다");
            setPwFail(true);
            return false;
        }
        setPasswordMismatch(false);
        setPwFail(false);
        return true;
    };

    // 아이디 중복 확인
    const handleConfirmId = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/api/users/${userData.user_id}`);
            if (response.status === 200) {
                setIdMessage('이미 사용 중인 아이디입니다.');
                setIdFail(true);
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setSuccessMessage('사용 가능한 아이디입니다.');
                setIdFail(false);
            } else {
                console.log('서버 연결 실패:', error);
            }
        }
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
                            <p className={styles['p']}>아이디</p>
                            <div className={styles['idInput']}>
                                <input
                                    id='user_id'
                                    type='text'
                                    placeholder='아이디 입력' 
                                    value={userData.user_id}
                                    onChange={handleChange}
                                />
                                <button type='button' className={buttonClassName} onClick={handleConfirmId}>중복확인</button>
                            </div>
                            { idFail ? <p className={styles['errorMessage']}>{idMessage}</p> : <p className={styles['successMessage']}>{successMessage}</p> }
                        </div>

                        <div className={styles['pwDiv']}>
                            <p className={styles['p']}>비밀번호</p>
                            <div className={styles['pwInput']}>
                                <input id="password" type='password' placeholder='비밀번호' onChange={handleChange} />
                                <input id='confirmPassword' type='password' placeholder='비밀번호 확인' onChange={handleConfirmPasswordChange}/>
                            </div>
                            { pwFail && <p className={styles['errorMessage']}>{pwMessage}</p> }
                        </div>

                        <div className={styles['emailDiv']}>
                            <p className={styles['p']}>메일 인증하기</p>
                            <div className={styles['emailInput']}>
                                <div className={styles['googleInput']}>
                                    <input id='email' placeholder='구글 메일 입력' type='text' onChange={handleChange}/>
                                    <button type='button'>인증번호 받기</button>
                                </div>
                                <input type='number' placeholder='인증번호 입력' />
                            </div>
                            { emailFail && <p className={styles['errorMessage']}>{emailMessage}</p> }
                        </div>

                        <button>가입하기</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Join;