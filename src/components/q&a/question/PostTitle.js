import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/PostTitle.module.css';

function PostTitle({ title }) {

    if (!title) {
        return "Not Found";
    }

    return (
        <p className={styles['title']}>{title}</p>
    )
}

export default PostTitle;