import '../../../styles/common/Style.css';
import styles from '../../../styles/my/post/PostList.module.css';
import PostItem from './PostItem';

function PostList() {
    return (
        <>
            <div className={styles['container']}>
                <PostItem />
            </div>
        </>
    )
}

export default PostList;