import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../../styles/common/Style.css';
import styles from '../../styles/common/Nav.module.css'

import { GoHome } from "react-icons/go";
import { MdLaptopMac } from "react-icons/md";
import { BiUser } from "react-icons/bi";

function Nav() {
    const navigate = useNavigate();

    const userId = useSelector(state => state.userId);
    useEffect(() => {
        if (!userId) {
            navigate('/signin');
        }
    }, [navigate]);

    const onClickMenu = (path) => {
        navigate(path);
    }
    
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['iconContainer']}>
                    <div className={window.location.pathname === '/home' ? `${styles['icon']} ${styles['clickedIcon']}` : `${styles['icon']} ${styles['defaultIcon']}`} onClick={() => onClickMenu('/home')}>
                        <GoHome size='26'/>
                        <p>HOME</p>
                    </div>

                    <div className={window.location.pathname === '/q&a' ? `${styles['icon']} ${styles['clickedIcon']}` : `${styles['icon']} ${styles['defaultIcon']}`} onClick={() => onClickMenu('/q&a')}>
                        {window.location.pathname === '/q&a' ? <img src='/images/q&a/Q&AClickedIcon.png' /> : <img src='/images/q&a/Q&ADefaultIcon.png' />}
                        <p>Q&A</p>
                    </div>

                    <div className={window.location.pathname === '/project' ? `${styles['icon']} ${styles['clickedIcon']}` : `${styles['icon']} ${styles['defaultIcon']}`} onClick={() => onClickMenu('/project')}>
                        <MdLaptopMac size='26'/>
                        <p>PROJECT</p>
                    </div>

                    <div className={window.location.pathname === '/chat' ? `${styles['icon']} ${styles['clickedIcon']}` : `${styles['icon']} ${styles['defaultIcon']}`} onClick={() => onClickMenu('/chat')}>
                        {window.location.pathname === '/chat' ? <img src='/images/q&a/ChatClickedIcon.png' /> : <img src='/images/q&a/ChatDefaultIcon.png' />}
                        <p>CHAT</p>
                    </div>

                    <div className={window.location.pathname === '/mypage' ? `${styles['icon']} ${styles['clickedIcon']}` : `${styles['icon']} ${styles['defaultIcon']}`} onClick={() => onClickMenu('/mypage')}>
                        <BiUser size='26'/>
                        <p>MY</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav;