import React, { useState, useRef, useEffect } from 'react';

import '../../../../styles/common/Style.css';
import styles from '../../../../styles/my/profile/edit/MyProfileEmoji.module.css';
import { FiPlus } from 'react-icons/fi';

function MyProfileEmoji({ setProfileData, profileData }) {
    const [emojis, setEmojis] = useState([]);

    useEffect(() => {
        if (profileData.imogi) {
            setEmojis(profileData.imogi.split(','));
        }
    }, [profileData.imogi]);

    const inputRef = useRef(null);

    const handleAddEmoji = () => {
        setEmojis([...emojis, '']);
    };

    const handleChange = (e, index) => {
        const updatedEmojis = [...emojis];
        updatedEmojis[index] = e.target.value;
        setEmojis(updatedEmojis);
        setProfileData(prevData => ({
            ...prevData,
            imogi: updatedEmojis.join(', ')
        }));
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
                            value={emoji}
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

export default MyProfileEmoji;