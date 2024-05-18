import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/TagList.module.css';

import QuestionTagItem from './TagItem';

function QuestionTagList({ hashtags }) {
    let hashtag = (hashtags || "").split("/");
    return (
        <>
            <div className={styles['list-container']}>
                {
                    hashtag.map((item, index) => {
                        return <QuestionTagItem key={index} hashtag={item} />
                    })
                }
            </div>
        </>
    )
}

export default QuestionTagList;