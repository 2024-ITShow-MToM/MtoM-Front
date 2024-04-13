import React, { useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/profile/ProfileInfo.module.css'

import { FiPlus } from "react-icons/fi";

function ProfileInfo() {
    const [selectedEmoji, setSelectedEmoji] = useState(null);
    const [showSelector, setShowSelector] = useState(false);

    const handleEmojiSelect = (emoji) => {
        setSelectedEmoji(emoji);
        setShowSelector(false);
    };

    const handlePlusButtonClick = () => {
        if (!showSelector) {
            const event = new KeyboardEvent('keydown', {
                key: '.',
                code: 'Period',
                metaKey: true,
                bubbles: true,
                cancelable: true,
            });
            window.dispatchEvent(event);
        }
        setShowSelector(!showSelector);
    };

    return (
        <>
            <div className={styles['mbti']}>
                <div className={styles['title']}> <p>MBTI</p> </div>
                <input placeholder='MBTI 입력'/>
            </div>

            <div className={styles['tag']}>
                <div className={styles['title']}> <p>멘토링 주제</p> </div>
                <input placeholder='태그입력'/>
            </div>

            <div className={styles['skill']}>
                <div className={styles['title']}> <p>SKILL</p> </div>
                <div className={styles['skillInput']}>
                    <input />
                    {/* 프로그래스 바 */}
                </div>
                <hr />
                <div className={styles['addPlus']}>
                    <FiPlus className={styles['plusIcon']}/>
                    <p>항목 추가</p>
                </div>
            </div>

            <div className={styles['advice']}>
                <div className={styles['title']}> <p>조언 성향</p> </div>
                <div className={styles['advicePlus']}>
                    <FiPlus className={styles['plusIcon']}/>
                    <p>조언 성향 추가</p>
                </div>
            </div>

            <div className={styles['emoji']}>
                <div className={styles['title']}> <p>이모지 자기소개</p> </div>
                <div className={styles['emojiPlus']}>
                    <div className={styles['emojiDiv']} onKeyDown={handlePlusButtonClick}> <FiPlus className={styles['plusIcon']}/> </div>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo;