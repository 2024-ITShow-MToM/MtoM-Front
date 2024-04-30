import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/Q&AQuestion.module.css';

import Header from '../../common/Header';
import QandAQuestionProfile from './Q&AQuestionProfile';
import Question from './Question';
import CommentList from './CommentList';
import SendInput from './SendInput';

function QandAQuestion() {
    return (
        <>
            <Header text={('질문')}/>

            <div className={styles['container']}>
                <div className={styles['imgContainer']}>
                    <img src='/images/example.png' />
                    <div className={styles['profileContainer']}> <QandAQuestionProfile /> </div>
                </div>

                <div className={styles['questionContainer']}> <Question /> </div>

                <div className={styles['commentContainer']}> <CommentList /> </div>
                <div className={styles['inputContainer']}> <SendInput /> </div>
            </div>
        </>
    )
}

export default QandAQuestion;