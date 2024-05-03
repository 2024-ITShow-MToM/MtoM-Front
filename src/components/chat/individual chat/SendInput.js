import '../../../styles/common/Style.css';
import styles from '../../../styles/chat/individual chat/SendInput.module.css';

import { BsSend } from 'react-icons/bs';

function SendInput() {
    return (
        <>
            <div className={styles['container']}>
                <input type='text'/>
                <BsSend />
            </div>
        </>
    )
}

export default SendInput;