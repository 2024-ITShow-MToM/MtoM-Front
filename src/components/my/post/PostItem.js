import '../../../styles/common/Style.css';
import styles from '../../../styles/my/post/PostItem.module.css';

import QandAHeartCommentIcon from '../../q&a/Q&AHeartCommentIcon';

function PostItem() {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['innerContainer']}>
                    <div className={styles['imgDiv']}> <img src='/images/example.png' /> </div>
                        <div className={styles['info']}>
                            <div className={styles['topDiv']}>
                                <div className={styles['top']}>
                                    <p>🔥HOT</p>
                                    <div className={styles['title']}> <p>혹시 2학년 취업 특강 있나요?</p> </div>
                                    <div className={styles['tagAndinfo']}>
                                        <div className={styles['tag']}> <p>취업</p> </div>
                                        <div className={styles['bottom']}>
                                            <p>2024.04.10</p>
                                            <p>조회수 20회</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        <hr />
                        {/* <QandAHeartCommentIcon /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostItem;