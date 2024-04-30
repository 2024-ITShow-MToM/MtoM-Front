import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/TagList.module.css';

import QuestionTagItem from './TagItem';

function QuestionTagList() {
    return (
        <>
            <div className={styles['list-container']}>
                <QuestionTagItem />
            </div>
        </>
    )
}

export default QuestionTagList;