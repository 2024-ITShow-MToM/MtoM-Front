import '../../styles/common/Style.css';
import styles from '../../styles/q&a/HeartCommentIcon.module.css';

import { GoHeart } from "react-icons/go";
import { BsChat } from "react-icons/bs";

function HeartCommentIcon({ hearts, comments }) {
    return (
        <>
            <div className={styles['heart']}> <GoHeart /> <p>{hearts}</p> </div>
            <div className={styles['comment']}> <BsChat /> <p>{comments}</p> </div>
        </>
    )
}

export default HeartCommentIcon;