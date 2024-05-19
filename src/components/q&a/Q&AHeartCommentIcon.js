import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&AHeartCommentIcon.module.css';

import { GoHeart } from "react-icons/go";
import { BsChat } from "react-icons/bs";

function QandAHeartCommentIcon({ data }) {
    return (
        <>
            <div className={styles['heart']}> <GoHeart /> <p>{data.heartCount}</p> </div>
            <div className={styles['comment']}> <BsChat /> <p>{data.commentCount}</p> </div>
        </>
    )
}

export default QandAHeartCommentIcon;