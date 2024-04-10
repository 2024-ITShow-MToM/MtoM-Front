import React from "react";
import { SlArrowLeft } from "react-icons/sl";

import styles from '../../styles/common/Header.module.css';

function Header({ text }) {
    return (
        <nav className={styles['header']}>
            <div className={styles['navContainer']}>
                <div className={styles['iconDiv']}> <SlArrowLeft /> </div>
                <div className={styles['joinText']}> <p>{text}</p> </div>
            </div>
        </nav>
    )
}

export default Header;