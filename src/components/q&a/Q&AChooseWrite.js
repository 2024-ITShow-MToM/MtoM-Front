import React, { useState, useEffect, useRef } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&AChooseWrite.module.css';

import QandAChooseWriteInput from './Q&AChooseWriteInput';

function QandAChooseWrite() {
    const [isPlaceholderHidden, setPlaceholderHidden] = useState(false);
    const inputRef = useRef(null);

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
                        ref={inputRef}
                        placeholder={isPlaceholderHidden ? '' : '제목'} 
                        onFocus={handleInputFocus} 
                    />
                    <hr />
                </div>

                <QandAChooseWriteInput />
            </div>
        </>
    )
}

export default QandAChooseWrite;