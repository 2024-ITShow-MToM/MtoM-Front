import '../../styles/common/Style.css';
import styles from '../../styles/chat/IndividualChattingItem.module.css';
import { Link } from 'react-router-dom';

function IndividualChattingItem() {
    return (
        <>
            <Link to='/chat/individual' style={{ textDecoration: 'none', color: 'black' }}>
                <div className={styles['container']}>
                    <div className={styles['inContainer']}>
                        <div className={styles['inDiv']}>
                            <div className={styles['imgDiv']}> <img src='/images/example.png' /> </div>

                            <div className={styles['info']}>
                                <p>3413 최보람</p>
                                <p>안녕하세요</p>
                            </div>
                        </div>
                        
                        <p>오전 10:11</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default IndividualChattingItem;