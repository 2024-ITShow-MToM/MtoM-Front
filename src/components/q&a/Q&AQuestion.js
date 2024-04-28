import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&AQuestion.module.css';

import Header from '../common/Header';
import QandAQuestionProfile from './Q&AQuestionProfile';

function QandAQuestion() {
    return (
        <>
            <Header text={('질문')}/>

            <div className={styles['container']}>
                <div className={styles['imgContainer']}>
                    <img src='/images/example.png' />
                    <div className={styles['profileContainer']}> <QandAQuestionProfile /> </div>
                </div>

                <div> {/* 질문 컴포넌트 */} </div>

                <div> {/* 댓글 컴포넌트 */} </div>
                <div> {/* 댓글 전송 input 컴포넌트*/} </div>
            </div>
        </>
    )
}

export default QandAQuestion;