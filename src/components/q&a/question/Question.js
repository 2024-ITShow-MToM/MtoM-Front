import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/Question.module.css';

function Question() {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['question']}>
                    <p>Q.</p>
                    <p>혹시 2학년 취업 특강 있나요?</p>
                </div>

                <hr />

                <div className={styles['tagAndicon']}>
                    <div className={styles['tags']}>
                        <div className={styles['tagDiv']}> <p>취업</p> </div>
                    </div>

                    <div className={styles['icons']}>
                        {/* 하트 아이콘 */}
                        <div className={styles['iconDiv']}> <p>3</p> </div>

                        {/* 댓글 아이콘 */}
                        <div className={styles['iconDiv']}> <p>3</p> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Question;