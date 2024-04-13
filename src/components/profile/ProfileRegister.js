import React, { useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/profile/Profile-register.module.css';

import Header from '../common/Header';
import ProfileImage from './Profile-Image';
import ProfileInfo from './Profile-info';

function ProfileRegister() {
    return (
        <>
            <div className={styles['allContainer']}>
                <Header text={('프로필 등록')}/>
                <div className={styles['container']}>
                    <div className={styles['register']}>
                        <div className={styles['imgDiv']}>
                            <ProfileImage />
                        </div>
                        <div className={styles['inputStdentId']}>
                            <input placeholder='학번 이름 입력하기' />
                        </div>
                    </div>

                    <div className={styles['info']}>
                        <ProfileInfo />

                        <div className={styles['button']}>
                            <button>시작하기</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProfileRegister;