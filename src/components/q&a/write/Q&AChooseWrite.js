import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOST } from '../../../config/Config';
import axios from 'axios';

import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/write/Q&AChooseWrite.module.css';

import QandAChooseWriteInput from './Q&AChooseWriteInput';

function QandAChooseWrite() {
    const navigate = useNavigate();
    const [isPlaceholderHidden, setPlaceholderHidden] = useState(false);
    const inputRef = useRef(null);
    const userId = localStorage.getItem("userId"); // userId는 회원가입했을 때 아이디
    const [chooseData, setChooseData] = useState({
        title: null,
        option1: null,
        option2: null
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setChooseData(data => ({
            ...data,
            [id]: value
        }));
    };

    // 제목 타이틀 다른 곳 클릭하면 보이게
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setPlaceholderHidden(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const handleInputFocus = () => {
        setPlaceholderHidden(true);
    };

    const register = async (e) => {
        e.preventDefault();
        try {
            const request = await axios.post(`${HOST}/api/selects`, 
                {
                    userId: userId,
                    title: chooseData.title,
                    option1: chooseData.option1,
                    option2: chooseData.option2
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            if (request.status === 201) {
                console.log("양자택일 업로드 성공");
                navigate('/q&a');
            } else {
                console.log("양자택일 업로드 실패", request.status);
            }
        } catch(error) {
            console.log("서버 연결 실패", error);
        }
    }

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['title']}>
                    <input
                        id='title'
                        onChange={handleChange}
                        ref={inputRef}
                        placeholder={isPlaceholderHidden ? '' : '제목'} 
                        onFocus={handleInputFocus} 
                    />
                    <hr />
                </div>

                <QandAChooseWriteInput setChooseData={setChooseData} />
                <div className={styles['button']}>
                    <button onClick={register}>등록하기</button>
                </div>
            </div>
        </>
    )
}

export default QandAChooseWrite;