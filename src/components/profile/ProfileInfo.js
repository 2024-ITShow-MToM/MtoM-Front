import React, { useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/profile/ProfileInfo.module.css'

import { FiPlus } from "react-icons/fi";
import ProfileSkill from './ProfileSkill';
import ProfileEmoji from './ProfileEmoji';
import ProfileAdvice from './ProfileAdvice';

function ProfileInfo() {
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

            <ProfileSkill />

            <ProfileAdvice />

            <ProfileEmoji />
        </>
    )
}

export default ProfileInfo;