import '../../../styles/common/Style.css';
import styles from '../../../styles/my/post/MyPost.module.css';
import PostList from './PostList';

function MyPost() {
    return (
        <>
            <div className={styles['container']}>
                <PostList />
            </div>
        </>
    )
}

export default MyPost;