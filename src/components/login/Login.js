import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../../redux/actions';
import axios from 'axios';

import '../../styles/common/Style.css';
import styles from '../../styles/login/Login.module.css'

function Login() {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [fail, setFail] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();
    const userId = useSelector(state => state.userId);

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // 로그인 서버 연결
    const handleLogin = async (e) => {
        e.preventDefault();
        if (id.trim() === '') {
            setErrorMessage("아이디를 입력해주세요.");
            return;
        } else if (password.trim() === '') {
            setErrorMessage("비밀번호를 입력해주세요.");
            return;
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_HOST}/api/users/login`, {
                id: id,
                password: password
            });

            if (response.status === 200) {
                console.log('로그인 성공');
                setFail(false);
                dispatch(loginSuccess(response.data.id));
                navigate('/home');
            } else {
                console.error('로그인 실패', response.status);
                setFail(true);
            }
        } catch (error) {
            setFail(true);
            if (error.response.data.message === "가입되지 않은 아이디 입니다.") {
                setErrorMessage(error.response.data.message);
            } else if (error.response.data.message === "비밀번호가 일치하지 않습니다") {
                setErrorMessage(error.response.data.message);
            } else {
                console.error('로그인 서버 연결 실패:', error);
            }
        }
    };

    useEffect(() => {
        if (userId) {
          navigate('/home');
        }
      }, [userId, navigate]);

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
                        { fail && <p className={styles['errorMessage']}>{errorMessage}</p> }
                        <button>로그인</button>
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