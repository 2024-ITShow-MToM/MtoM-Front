import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/TagItem.module.css';

function QuestionTagItem() {
    return (
        <>
            <div className={styles['tags']}>
                <div className={styles['tagDiv']}> <p>취업</p> </div>
            </div>
        </>
    )
}

export default QuestionTagItem;