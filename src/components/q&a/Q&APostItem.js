import { Link } from 'react-router-dom';
import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&APostItem.module.css';

import QandAHeartCommentIcon from './Q&AHeartCommentIcon';

function QandAPostItem({ data }) {
    return (
        <>
            <Link to='/q&a/question' style={{ textDecoration: 'none', color: 'black' }}>
                <div className={styles['container']}>
                    <div className={styles['imgDiv']}> <img src='/images/example.png' /> </div>
                    <div className={styles['info']}>
                        <div className={styles['topDiv']}>
                            <div className={styles['top']}>
                                <p>🔥HOT</p>
                                <p>2024.04.10</p>
                            </div>
                            <div className={styles['middle']}>
                                <div className={styles['title']}> <p>혹시 2학년 취업 특강 있나요?</p> </div>
                            </div>
                            <div className={styles['bottom']}>
                                <div className={styles['tag']}> <p>취업</p> </div>
                                <p>조회수 20회</p>
                            </div>
                        </div>
                        <hr />
                        <QandAHeartCommentIcon />
                    </div>
                </div>
            </Link>
        </>
    )
}

export default QandAPostItem;