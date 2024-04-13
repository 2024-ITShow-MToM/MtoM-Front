import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&AHeartCommentIcon.module.css';

import { GoHeart } from "react-icons/go";
import { BsChat } from "react-icons/bs";

function QandAHeartCommentIcon() {
    return (
        <>
            <div className={styles['bottomDiv']}>
                <div className={styles['heart']}> <GoHeart /> <p>2</p> </div>
                <div className={styles['comment']}> <BsChat /> <p>5</p> </div>
            </div>
        </>
    )
}

export default QandAHeartCommentIcon;