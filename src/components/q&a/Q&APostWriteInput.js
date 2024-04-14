import React, { useState, useRef } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&APostWriteInput.module.css';

function QandAPostWriteInput() {
    const [tags, setTags] = useState([]);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            const tagValue = event.target.value.trim();
            if (tagValue !== '') {
                setTags([...tags, tagValue]);
                event.target.value = '';
            }
        }
    };

    const textareaRef = useRef(null);
    const handleTextareaInput = () => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['questionInput']}>
                    <input placeholder='질문 제목' type='text'/>
                </div>

                <div className={styles['textarea']}>
                    <textarea 
                        placeholder='내용 입력하기' 
                        type='text' 
                        ref={textareaRef}
                        onInput={handleTextareaInput}
                    />
                </div>

                <div className={styles['tagInput']}>
                    <input placeholder='태그 입력' onKeyPress={handleKeyPress} type='text'/>
                    <div className={styles['tagContainer']}>
                        {tags.map((tag, index) => (
                            <div className={styles['tag']} key={index}>
                                <p>{tag}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default QandAPostWriteInput;