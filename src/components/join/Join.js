import React, { useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/join/Join.module.css';

import Header from '../common/Header';

function Join() {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const [phone, setPhone] = useState('');
    const handlePhoneChange = (event) => {
        const inputValue = event.target.value;
        const sanitizedValue = inputValue.replace(/[^\d-]/g, '');
        setPhone(sanitizedValue);
    };

    const buttonClassName = inputValue.trim() !== '' ? `${styles['IdButtonClicked']}` : `${styles['IdButtonDefault']}`;

    const [selectedMajor, setSelectedMajor] = useState(null);
    const majors = ['소프트웨어과', '웹솔루션과', '디자인과'];
    const handleMajorClick = (major) => {
        setSelectedMajor(major);
    };

    return (
        <>
            <div className={styles['mainContainer']}>
                <div className={styles['navContainer']}> 
                    <Header text={('회원가입')}/>
                </div>

                <div className={styles['joinContainer']}>
                    <div className={styles['formContainer']}>
                        <div className={styles['nameDiv']}>
                            <div className={styles['lastName']}>
                                <p>성</p>
                                <input type='text'/>
                            </div>

                            <div className={styles['firstName']}>
                                <p>이름</p>
                                <input type='text'/>
                            </div>
                        </div>

                        <div className={styles['birthDiv']}>
                            <p>생년월일</p>
                            <div className={styles['birthInput']}>
                                <input type='number' placeholder='예) 20060101'/>
                            </div>
                        </div>

                        <div className={styles['radioGroup']}>
                            <p>성별</p>
                            <div className={styles['radioDiv']}>
                                <div className={styles['radioButton']}>
                                    <input type='radio' name='radioButton' value='여자'/>
                                    <label className={styles['label']}>여자</label>
                                </div>
                                <div className={styles['radioButton']}>
                                    <input type='radio' name='radioButton' value='남자'/>
                                    <label className={styles['label']}>남자</label>
                                </div>
                            </div>
                        </div>

                        <div className={styles['phoneDiv']}>
                            <p>연락처</p>
                            <div className={styles['phoneInput']}>
                                <input type='text' value={phone} onChange={handlePhoneChange}/>
                            </div>
                        </div>

                        <div className={styles['majorDiv']}>
                            <p>과</p>
                            <div className={styles['majorInput']}>
                                {majors.map((major, index) => (
                                    <div
                                        key={index}
                                        className={`${styles['border']} ${selectedMajor === major ? styles['borderClicked'] : styles['borderDefault']}`}
                                        onClick={() => handleMajorClick(major)}>
                                        <p value={major}>{major}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

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