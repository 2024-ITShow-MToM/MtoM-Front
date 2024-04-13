import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/common/Style.css';
import styles from '../../styles/login/Login.module.css'

function Login() {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['imgDiv']}> 
                    <img src={process.env.PUBLIC_URL + '/images/loginLogo.png'} /> 
                </div>

                <div className={styles['loginContainer']}>
                    <form className={styles['formContainer']}>
                        <input placeholder='아이디 입력'/>
                        <input type='password' placeholder='비밀번호 입력'/>
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
                            <img src={process.env.PUBLIC_URL + '/images/kakaoImg.png'} alt='kakao'/>
                            <p>카카오톡</p>
                        </div>
                        <div className={styles['logoDiv']}>
                            <img src={process.env.PUBLIC_URL + '/images/naverImg.png'} alt='naver'/>
                            <p>네이버</p>
                        </div>
                        <div className={styles['logoDiv']}>
                            <img src={process.env.PUBLIC_URL + '/images/googleImg.png'} alt='google'/>
                            <p>구글</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login;