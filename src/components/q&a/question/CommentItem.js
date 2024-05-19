import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/CommentItem.module.css';

import { GoHeart } from 'react-icons/go';

function CommentItem({ data }) {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['infoContainer']}>
                    <div className={styles['imgDiv']}> <img src={data.profile} /> </div>
                    <div className={styles['info']}>
                        <p>{data.name}</p>
                        <div className={styles['content']}>
                            <p>{data.content}</p>
                            <p>{data.time}</p>
                        </div>
                    </div>
                </div>

                <div className={styles['heart']}>
                    <GoHeart />
                    <p>{data.heartCount}</p>
                </div>
            </div>
        </>
    )
}

export default CommentItem;