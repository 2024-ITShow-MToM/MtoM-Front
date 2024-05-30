import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/CommentList.module.css';

import CommentItem from './CommentItem';

function CommentList({ data }) {
    if (!data) return;

    return (
        <>
            <div className={styles['container']}>
                {
                    data && data.length > 0 ? (
                        data.map((item, index) => (
                            <CommentItem key={index} data={item} />
                        ))
                    ) : (
                        <p>댓글이 없습니다.</p>
                    )
                }
            </div>
        </>
    )
}

export default CommentList;