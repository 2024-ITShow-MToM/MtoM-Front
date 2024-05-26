import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import '../../styles/common/Style.css';
import styles from '../../styles/common/Nav.module.css'

import { GoHome } from "react-icons/go";
import { MdLaptopMac } from "react-icons/md";
import { BiUser } from "react-icons/bi";

function Nav() {
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (!userId) {
            navigate('/signin');
        }
    }, [navigate]);
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['iconContainer']}>
                    <Link to='/home'>
                        <div className={window.location.pathname === '/home' ? `${styles['icon']} ${styles['clickedIcon']}` : `${styles['icon']} ${styles['defaultIcon']}`} >
                            <GoHome size='26'/>
                            <p>HOME</p>
                        </div>
                    </Link>

                    <Link to='/q&a'>
                        <div className={window.location.pathname === '/q&a' ? `${styles['icon']} ${styles['clickedIcon']}` : `${styles['icon']} ${styles['defaultIcon']}`}>
                            {window.location.pathname === '/q&a' ? <img src='/images/q&a/Q&AClickedIcon.png' /> : <img src='/images/q&a/Q&ADefaultIcon.png' />}
                            <p>Q&A</p>
                        </div>
                    </Link>

                    <Link to='/project'>
                        <div className={window.location.pathname === '/project' ? `${styles['icon']} ${styles['clickedIcon']}` : `${styles['icon']} ${styles['defaultIcon']}`}>
                            <MdLaptopMac size='26'/>
                            <p>PROJECT</p>
                        </div>
                    </Link>

                    <Link to='/chat'>
                        <div className={window.location.pathname === '/chat' ? `${styles['icon']} ${styles['clickedIcon']}` : `${styles['icon']} ${styles['defaultIcon']}`}>
                            {window.location.pathname === '/chat' ? <img src='/images/q&a/ChatClickedIcon.png' /> : <img src='/images/q&a/ChatDefaultIcon.png' />}
                            <p>CHAT</p>
                        </div>
                    </Link>

                    <Link to='/mypage'>
                        <div className={window.location.pathname === '/mypage' ? `${styles['icon']} ${styles['clickedIcon']}` : `${styles['icon']} ${styles['defaultIcon']}`}>
                            <BiUser size='26'/>
                            <p>MY</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Nav;