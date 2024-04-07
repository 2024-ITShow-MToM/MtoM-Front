import joinStyle from '../../styles/join/join.module.css';

import Nav from '../common/nav';

function Join() {
    return (
        <>
            <div className={joinStyle['mainContainer']}>
                <div className={joinStyle['navContainer']}> 
                    <Nav />
                    <div className={joinStyle['joinText']}> <p>회원가입</p> </div>
                </div>

                <div className={joinStyle['joinContainer']}>
                    <div className={joinStyle['imgDiv']}> <img src={process.env.PUBLIC_URL + '/images/joinLogo.png'} alt='joinLogo'/> </div>

                    <div className={joinStyle['formContainer']}>
                        <div className={joinStyle['idDiv']}>
                            <p>아이디</p>
                            <div className={joinStyle['idInput']}>
                                <input placeholder='아이디 입력'/>
                                <button>중복확인</button>
                            </div>
                        </div>

                        <div className={joinStyle['pwDiv']}>
                            <p>비밀번호</p>
                            <div className={joinStyle['pwInput']}>
                                <input placeholder='비밀번호'/>
                                <input placeholder='비밀번호 확인'/>
                            </div>
                        </div>

                        <div className={joinStyle['emailDiv']}>
                            <p>메일 인증하기</p>
                            <div className={joinStyle['emailInput']}>
                                <div className={joinStyle['googleInput']}>
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