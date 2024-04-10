import '../../styles/common/Style.css';
import styles from '../../styles/join/Join.module.css';

import Header from '../common/Header';

function Join() {
    return (
        <>
            <div className={styles['mainContainer']}>
                <div className={styles['navContainer']}> 
                    <Header text={('회원가입')}/>
                </div>

                <div className={styles['joinContainer']}>
                    <div className={styles['imgDiv']}> <img src={process.env.PUBLIC_URL + '/images/joinLogo.png'} alt='joinLogo'/> </div>

                    <div className={styles['formContainer']}>
                        <div className={styles['idDiv']}>
                            <p>아이디</p>
                            <div className={styles['idInput']}>
                                <input placeholder='아이디 입력'/>
                                <button>중복확인</button>
                            </div>
                        </div>

                        <div className={styles['pwDiv']}>
                            <p>비밀번호</p>
                            <div className={styles['pwInput']}>
                                <input placeholder='비밀번호'/>
                                <input placeholder='비밀번호 확인'/>
                            </div>
                        </div>

                        <div className={styles['emailDiv']}>
                            <p>메일 인증하기</p>
                            <div className={styles['emailInput']}>
                                <div className={styles['googleInput']}>
                                    <input placeholder='구글 메일 입력' />
                                    <button>인증번호 받기</button>
                                </div>
                                <input placeholder='인증번호 입력' />
                            </div>
                        </div>

                        <button>가입하기</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Join;