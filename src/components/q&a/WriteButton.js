import { Link } from 'react-router-dom';
import '../../styles/common/Style.css';
import styles from '../../styles/q&a/WriteButton.module.css';

import { Icon } from '@iconify/react';

function WriteButton() {
    return (
        <>
            <div className={styles['container']}>
                <Link to='/q&a/q&a-write' className={styles['link']}>
                    <div className={styles['button']}>
                        <Icon icon="majesticons:edit-pen-4-line" className={styles['icon']}/>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default WriteButton;