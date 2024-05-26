import { SlArrowLeft } from "react-icons/sl";

import styles from '../../styles/common/Header.module.css';

function Header({ text }) {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <nav className={styles['header']}>
            <div className={styles['navContainer']}>
                <div className={styles['iconDiv']}> <SlArrowLeft onClick={handleGoBack}/> </div>
            </div>
            <div className={styles['joinText']}> <p>{text}</p> </div>
        </nav>
    )
}

export default Header;