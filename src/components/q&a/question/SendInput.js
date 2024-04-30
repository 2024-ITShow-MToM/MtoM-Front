import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/SendInput.module.css';

import { BsSend } from 'react-icons/bs';

function SendInput() {
    return (
        <>
            <div className={styles['container']}>
                <input />
                <BsSend />
            </div>
        </>
    )
}

export default SendInput;