import '../../styles/common/Style.css';
import styles from '../../styles/profile/Header.module.css';

function Header({ text }) {
    return (
        <nav className={styles['header']}>
            <div className={styles['text']}> <p>{text}</p> </div>
        </nav>
    )
}

export default Header;