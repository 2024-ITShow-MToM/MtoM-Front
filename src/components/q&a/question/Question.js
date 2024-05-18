import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/Question.module.css';

import { GoHeart } from "react-icons/go";
import { BsChat } from "react-icons/bs";
import QuestionTagList from './TagList';

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