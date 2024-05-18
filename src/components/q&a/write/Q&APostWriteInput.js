import React, { useRef } from 'react';

import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/write/Q&APostWriteInput.module.css';

import { TiDeleteOutline } from "react-icons/ti";

function QandAPostWriteInput({ setPostData, tags, setTags }) {
    const handleChange = (e) => {
        const { id, value } = e.target;
        setPostData(data => ({
            ...data,
            [id]: value
        }));
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            const tagValue = event.target.value.trim();
            if (tagValue !== '') {
                const updatedTags = [...tags, tagValue];
                setTags(updatedTags);
                setPostData(prevData => ({
                    ...prevData,
                    hashtags: updatedTags.join('/')
                }));
                event.target.value = '';
            }
        }
    };
    
    const handleTagDelete = (index) => {
        const updatedTags = tags.filter((_, i) => i !== index);
        setTags(updatedTags);
        setPostData(prevData => ({
            ...prevData,
            hashtags: updatedTags.join('/')
        }));
    };
    
    const textareaRef = useRef(null);
    const handleTextareaInput = () => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
        setPostData(prevData => ({
            ...prevData,
            'content': textarea.value
        }));
    };

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['questionInput']}>
                    <input 
                        id='title'
                        placeholder='질문 제목' 
                        type='text'
                        onChange={handleChange}
                    />
                </div>

                <div className={styles['textarea']}>
                    <textarea 
                        id='content'
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
                            <div className={styles['tag']} key={index} onClick={() => handleTagDelete(index)}>
                                <p>{tag}</p>
                                <TiDeleteOutline />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default QandAPostWriteInput;