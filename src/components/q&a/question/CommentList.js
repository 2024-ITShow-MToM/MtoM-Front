import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/CommentList.module.css';

import CommentItem from './CommentItem';

function CommentList({ data, onCommentAdded }) {
    if (!data) {
        return;
    }

    return (
        <>
            <div className={styles['container']}>
                {
                    data.map((item, index) => {
                        return <CommentItem key={index} data={item} onCommentAdded={onCommentAdded} />
                    })
                }
            </div>
        </>
    )
}

export default CommentList;