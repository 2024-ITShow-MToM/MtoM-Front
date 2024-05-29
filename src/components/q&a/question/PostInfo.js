import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/PostInfo.module.css';

function PostInfo({ data }) {
    if (!data) {
        return <div className={styles['view']}>Not Found</div>;
    }

    return (
        <div className={styles['view']}>
            <p>{data.createdAt}</p>
            <p>조회수 {data.view}회</p>
        </div>
    )
}

export default PostInfo;