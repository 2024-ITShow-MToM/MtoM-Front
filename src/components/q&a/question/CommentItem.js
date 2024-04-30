import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/CommentItem.module.css';

import { GoHeart } from 'react-icons/go';

function CommentItem() {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['infoContainer']}>
                    <div className={styles['imgDiv']}> <img src='/images/example.png'/> </div>
                    <div className={styles['info']}>
                        <p>3413 최보람</p>
                        <div className={styles['content']}>
                            <p>댓글 내용</p>
                            <p>3분전</p>
                        </div>
                    </div>
                </div>

                <div className={styles['heart']}>
                    <GoHeart />
                    <p>1</p>
                </div>
            </div>
        </>
    )
}

export default CommentItem;