import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&A-question-item.module.css';

import { GoHeart } from "react-icons/go";
import { BsChat } from "react-icons/bs";

function QandAQuestionItem() {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['imgDiv']}> <img src={process.env.PUBLIC_URL+'/images/example.png'} /> </div>
                <div className={styles['info']}>
                    <div className={styles['topDiv']}>
                        <div className={styles['top']}>
                            <p>🔥HOT</p>
                            <p>2024.04.10</p>
                        </div>
                        <div className={styles['middle']}>
                            <div className={styles['title']}> <p>혹시 2학년 취업 특강 있나요?</p> </div>
                        </div>
                        <div className={styles['bottom']}>
                            <div className={styles['tag']}> <p>tag</p> </div>
                            <p>조회수 20회</p>
                        </div>
                    </div>
                    <hr />
                    <div className={styles['bottomDiv']}>
                        <div className={styles['heart']}> <GoHeart /> <p>2</p> </div>
                        <div className={styles['comment']}> <BsChat /> <p>5</p> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QandAQuestionItem;