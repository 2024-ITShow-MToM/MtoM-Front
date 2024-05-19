import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/Question.module.css';

import QuestionTagList from './TagList';
import QandAHeartCommentIcon from '../Q&AHeartCommentIcon';

function Question({ data, postId, onCommentAdded }) {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['question']}>
                    <p>Q.</p>
                    <p>{data.title}</p>
                </div>

                <hr />

                <div className={styles['tagAndicon']}>
                    <QuestionTagList hashtags={data.hashtags} />

                    <div className={styles['icons']}>
                        <QandAHeartCommentIcon data={data} postId={postId} onCommentAdded={onCommentAdded} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Question;