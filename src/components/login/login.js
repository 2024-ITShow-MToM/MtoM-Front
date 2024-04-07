import styles from '../../styles/common/style.css';
import loginStyle from '../../styles/login/login.module.css'

function Login() {
    return (
        <>
            <div className={loginStyle['container']}>
                <div className={loginStyle['imgDiv']}> 
                    <img src={process.env.PUBLIC_URL + '/images/loginLogo.png'} /> 
                </div>

                <div className={loginStyle['loginContainer']}>
                    <form className={loginStyle['formContainer']}>
                        <input placeholder='아이디 입력'/>
                        <input placeholder='비밀번호 입력'/>
                        <button>로그인</button>
                    </form>

                    <div className={loginStyle['textDiv']}>
                        <p>아이디 찾기</p>
                        <p>|</p>
                        <p>비밀번호 찾기</p>
                        <p>|</p>
                        <p>회원가입</p>
                    </div>
                </div>

                <div className={loginStyle['simpleLoginContainer']}>
                    <div className={loginStyle['simpleLogin']}>
                        <p>-----------</p>
                        <p>SNS 간편 로그인</p>
                        <p>-----------</p>
                    </div>

                    <div className={loginStyle['clickedDiv']}>
                        <div className={loginStyle['logoDiv']}>
                            <img src={process.env.PUBLIC_URL + '/images/kakaoImg.png'} alt='kakao'/>
                            <p>카카오톡</p>
                        </div>
                        <div className={loginStyle['logoDiv']}>
                            <img src={process.env.PUBLIC_URL + '/images/naverImg.png'} alt='naver'/>
                            <p>네이버</p>
                        </div>
                        <div className={loginStyle['logoDiv']}>
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