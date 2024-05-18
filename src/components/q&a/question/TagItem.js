import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/TagItem.module.css';

function QuestionTagItem({ hashtag }) {
    return (
        <>
            <div className={styles['tags']}>
                <div className={styles['tagDiv']}> <p>{hashtag}</p> </div>
            </div>
        </>
    )
}

export default QuestionTagItem;