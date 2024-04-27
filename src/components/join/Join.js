import React, { useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/join/Join.module.css';

import Header from '../common/Header';

function Join() {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const buttonClassName = inputValue.trim() !== '' ? `${styles['IdButtonClicked']}` : `${styles['IdButtonDefault']}`;

    return (
        <>
            <div className={styles['mainContainer']}>
                <div className={styles['navContainer']}> 
                    <Header text={('회원가입')}/>
                </div>

                <div className={styles['joinContainer']}>
                    <div className={styles['formContainer']}>
                        <div className={styles['idDiv']}>
                            <p>아이디</p>
                            <div className={styles['idInput']}>
                                <input 
                                    type='text'
                                    placeholder='아이디 입력' 
                                    value={inputValue}
                                    onChange={handleInputChange}
                                />
                                <button className={buttonClassName}>중복확인</button>
                            </div>
                        </div>

                        <div className={styles['pwDiv']}>
                            <p>비밀번호</p>
                            <div className={styles['pwInput']}>
                                <input type='password' placeholder='비밀번호'/>
                                <input type='password' placeholder='비밀번호 확인'/>
                            </div>
                        </div>

                        <div className={styles['emailDiv']}>
                            <p>메일 인증하기</p>
                            <div className={styles['emailInput']}>
                                <div className={styles['googleInput']}>
                                    <input placeholder='구글 메일 입력' type='text'/>
                                    <button>인증번호 받기</button>
                                </div>
                                <input type='number' placeholder='인증번호 입력' />
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