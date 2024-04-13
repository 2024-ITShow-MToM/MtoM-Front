import React, { useState, useRef, useEffect } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/profile/ProfileEmoji.module.css';

import { FiPlus } from 'react-icons/fi';

const ProfileEmoji = () => {
    const [emojis, setEmojis] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
        inputRef.current.focus();
        }
    }, [emojis]);

    const handleAddEmoji = () => {
        setEmojis([...emojis, { id: Date.now(), value: '' }]);
    };

    const handleChange = (e, id) => {
        const updatedEmojis = emojis.map(emoji => {
        if (emoji.id === id) {
            return { ...emoji, value: e.target.value };
        }
        return emoji;
        });
        setEmojis(updatedEmojis);
    };

    return (
        <div className={styles['emoji']}>
        <div className={styles['title']}>
            <p>이모지 자기소개</p>
        </div>
            <div className={styles['emojiPlus']}>
                {emojis.map((emoji, index) => (
                    <div key={emoji.id} className={styles['emojiAdd']}>
                        <input
                            ref={index === emojis.length - 1 ? inputRef : null}
                            value={emoji.value}
                            onChange={e => handleChange(e, emoji.id)}
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