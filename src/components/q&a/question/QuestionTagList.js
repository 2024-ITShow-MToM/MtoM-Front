import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/QuestionTagList.module.css';

import QuestionTagItem from './QuestionTagItem';

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