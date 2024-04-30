import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/Question.module.css';

import { GoHeart } from "react-icons/go";
import { BsChat } from "react-icons/bs";
import QuestionTagList from './QuestionTagList';

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
                    <QuestionTagList />

                    <div className={styles['icons']}>
                        {/* 하트 아이콘 */}
                        <div className={styles['iconDiv']}> <GoHeart /> <p>3</p> </div>

                        {/* 댓글 아이콘 */}
                        <div className={styles['iconDiv']}> <BsChat /> <p>3</p> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Question;