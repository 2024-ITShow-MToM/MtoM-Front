import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import '../../styles/common/Style.css';
import styles from '../../styles/interview/Interview.module.css';

import { RiSearchLine } from "react-icons/ri";

function InterviewSearch() {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['search']}>
                    <div className={styles['interview-header']}>
                        <Icon icon="formkit:left" onClick={handleGoBack}/>
                        <p>인터뷰</p>
                    </div>
                    <div className={styles['searchInput']}>
                        <input type='text' placeholder='인터뷰 검색하기'/>
                        <div className={styles['iconDiv']}> <RiSearchLine className={styles['icon']}/> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InterviewSearch;