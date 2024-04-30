import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/CommentList.module.css';

import CommentItem from './CommentItem';

function CommentList() {
    return (
        <>
            <div className={styles['container']}>
                <CommentItem />
            </div>
        </>
    )
}

export default CommentList;