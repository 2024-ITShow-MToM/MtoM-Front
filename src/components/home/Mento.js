import React from 'react';
import styles from "../../styles/home/Mento.module.css";

function Mento({ isSelected, onClick }) {
    return (
        <div className={styles['mento-container']} onClick={onClick}>
            <img src='/images/HomeImg.png' alt='프로필이미지' className={styles['profile-img']} />
            <div className={`${styles['info-container']} ${isSelected ? styles['first-info-container'] : ''}`}>
                <div>
                    <p className={styles['major']}>웹솔루션과</p>
                    <p className={styles['name']}>최보람</p>
                </div>
                <p className={styles['hashTag']}>#리액트 #정신교육</p>
                <p className={styles['info-text']}>리액트, 정신교육에 관한 멘토 해드려요!</p>
            </div>
        </div>
    );
}

export default Mento;
