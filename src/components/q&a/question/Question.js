import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/Question.module.css';

import QuestionTagList from './TagList';
import QandAHeartCommentIcon from '../Q&AHeartCommentIcon';
import PostInfo from './PostInfo';
import PostTitle from './PostTitle';

function Question({ data, postId }) {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['info']}>
                    <div className={styles['question']}>
                        <p>Q.</p>
                        <PostTitle title={data.title} />
                    </div>

                    <div className={styles['content']}>
                        <p>{data.content}</p>
                    </div>

                    <PostInfo data={data} />
                </div>

                <hr />

                <div className={styles['tagAndicon']}>
                    <QuestionTagList hashtags={data.hashtags} />

                    <div className={styles['icons']}>
                        <QandAHeartCommentIcon data={data} postId={postId} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Question;