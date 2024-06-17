import React, {useState, useEffect} from 'react';
import styles from "../../styles/home/Mento.module.css";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Mento({ isSelected, onClick, userId, name, major, hashTag, infoText, profile, mentorId }) {
    const navigate = useNavigate();
    

    return (
        <div className={styles['mento-container']} onClick={onClick}>
            <img src={`${process.env.REACT_APP_IMAGEURL}/${profile}`} alt='프로필이미지' className={styles['profile-img']} />
            <div className={`${styles['info-container']} ${isSelected ? styles['first-info-container'] : ''}`}>
                <div>
                    <p className={styles['major']}>{major}</p>
                    <p className={styles['name']}>{name}</p>
                </div>
                <p className={styles['hashTag']}>{hashTag}</p>
                <p className={styles['info-text']}>{infoText}</p>
            </div>
        </div>
    );
}

export default Mento;
