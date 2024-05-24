
import styles from "../../styles/home/Header.module.css"
import { Icon } from "@iconify/react";

function Header() {
    return (
        <div className={styles['header-style']}>
            <div className={styles['header-container']}>
                <img src="/images/HomeLogo.png" alt="로고" className={styles['logo']}/>
                <div className={styles['elarm-container']}>
                    <div className={styles["elarm"]}></div>
                    <Icon icon="mdi:bell-outline" className={styles['icon-style']}/>
                </div>
            </div>
        </div>
    )
}

export default Header;