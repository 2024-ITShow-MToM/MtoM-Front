import React, { useState, useEffect, useRef } from 'react';

import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/write/Q&AChooseWrite.module.css';

import QandAChooseWriteInput from './Q&AChooseWriteInput';

function QandAChooseWrite() {
    const [isPlaceholderHidden, setPlaceholderHidden] = useState(false);
    const inputRef = useRef(null);
    const [chooseData, setChooseData] = useState({
        title: null,
        option1: null,
        option2: null
    });

    const register = () => {
        console.log(chooseData);
    }

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