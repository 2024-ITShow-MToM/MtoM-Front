import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/Question.module.css';

import { GoHeart } from "react-icons/go";
import { BsChat } from "react-icons/bs";
import QuestionTagList from './TagList';
import QandAHeartCommentIcon from '../Q&AHeartCommentIcon';

function Question({ data }) {
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
                        <QandAHeartCommentIcon data={data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Question;