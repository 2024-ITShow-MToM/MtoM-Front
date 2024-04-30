import '../../styles/common/Style.css';
import styles from '../../styles/chat/Header.module.css';

import { BiBell } from 'react-icons/bi';
import { FiPlus } from 'react-icons/fi';

function Header() {
    return (
        <>
            <div className={styles['container']}>
                <BiBell />
                <p>채팅</p>
                <FiPlus style={{color: '#FF6524'}}/>
            </div>
        </>
    )
}

export default Header;