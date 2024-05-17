import React, { useState, useRef, useEffect } from 'react';
import '../../styles/common/Style.css';
import styles from '../../styles/profile/ProfileEmoji.module.css';
import { FiPlus } from 'react-icons/fi';

function ProfileEmoji({ setProfileData }) {
    const [emojis, setEmojis] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
        setProfileData(prevData => ({
            ...prevData,
            imogi: emojis.map(emoji => emoji.emoji)
        }));
    }, [emojis, setProfileData]);

    const handleAddEmoji = () => {
        setEmojis([...emojis, { emoji: '' }]);
    };

    const handleChange = (e, index) => {
        const updatedEmojis = emojis.map((emoji, i) => {
            if (i === index) {
                return { ...emoji, emoji: e.target.value };
            }
            return emoji;
        });
        setEmojis(updatedEmojis);
    };

    const divRef = useRef(null);
    const handleEmojiInput = () => {
        const input = divRef.current;
        input.style.height = 'auto';
        input.style.height = `${input.scrollHeight}px`;
    };

    return (
        <div className={styles['emoji']}>
            <div className={styles['title']}>
                <p>이모지 자기소개</p>
            </div>
            <div className={styles['emojiPlus']} ref={divRef} onInput={handleEmojiInput}>
                {emojis.map((emoji, index) => (
                    <div key={index} className={styles['emojiAdd']}>
                        <input
                            ref={index === emojis.length - 1 ? inputRef : null}
                            value={emoji.emoji}
                            onChange={e => handleChange(e, index)}
                        />
                    </div>
                ))}
                <div className={styles['emojiDiv']}>
                    <FiPlus className={styles['plusIcon']} onClick={handleAddEmoji} />
                </div>
            </div>
        </div>
    );
};

export default ProfileEmoji;