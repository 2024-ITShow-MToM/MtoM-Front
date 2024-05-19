import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HOST } from '../../config/Config';
import axios from 'axios';

import '../../styles/common/Style.css';
import styles from '../../styles/login/Login.module.css'

function Login() {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // 로그인 서버 연결
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${HOST}/api/users/login`, {
                id: id,
                password: password
            });

            if (response.status === 200) {
                console.log('로그인 성공');
                localStorage.setItem("userId", id);
                navigate('/q&a');
            } else {
                console.error('로그인 실패', response.status);
            }
        } catch (error) {
            console.error('로그인 요청 중 에러:', error);
        }
    };

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            // 메인화면으로 이동
            navigate('/q&a');
        }
    }, [navigate]);

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['imgDiv']}> 
                    <img src={'/images/login/loginLogo.png'} /> 
                </div>

                <div className={styles['loginContainer']}>
                    <form className={styles['formContainer']} onSubmit={handleLogin}>
                        <input placeholder='아이디 입력' onChange={handleIdChange} value={id} />
                        <input type='password' placeholder='비밀번호 입력' onChange={handlePasswordChange} value={password} />
                        <button type="submit">로그인</button>
                    </form>

                    <div className={styles['textDiv']}>
                        <p>아이디 찾기</p>
                        <p>|</p>
                        <p>비밀번호 찾기</p>
                        <p>|</p>
                        <Link to="/signup" className={styles['linkStyle']}> <p>회원가입</p> </Link>
                    </div>
                </div>

                <div className={styles['simpleLoginContainer']}>
                    <div className={styles['simpleLogin']}>
                        <p>-----------</p>
                        <p>SNS 간편 로그인</p>
                        <p>-----------</p>
                    </div>

                    <div className={styles['clickedDiv']}>
                        <div className={styles['logoDiv']}>
                            <img src={'/images/login/kakaoImg.png'} alt='kakao'/>
                            <p>카카오톡</p>
                        </div>
                        <div className={styles['logoDiv']}>
                            <img src={'/images/login/naverImg.png'} alt='naver'/>
                            <p>네이버</p>
                        </div>
                        <div className={styles['logoDiv']}>
                            <img src={'/images/login/googleImg.png'} alt='google'/>
                            <p>구글</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login;