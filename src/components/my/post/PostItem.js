import { Link } from 'react-router-dom';

import '../../../styles/common/Style.css';
import styles from '../../../styles/my/post/PostItem.module.css';

import HeartCommentIcon from '../../q&a/HeartCommentIcon';

function PostItem({ data }) {
    let hashtag = data && data.hashtags ? data.hashtags.split("/")[0] : "";

    return (
        <Link to={`/q&a/question/${data.postId}`} style={{ textDecoration: 'none', color: 'black' }}>
            <div className={styles['container']}>
                <div className={styles['innerContainer']}>
                    <div className={styles['imgDiv']}> <img src={data.img} /> </div>
                        <div className={styles['info']}>
                            <div className={styles['topDiv']}>
                                <div className={styles['top']}>
                                    <p>🔥HOT</p>
                                    <div className={styles['title']}> <p>{data.title}</p> </div>
                                    <div className={styles['tagAndinfo']}>
                                        <div className={styles['tag']}> <p>{hashtag}</p> </div>
                                        <div className={styles['bottom']}>
                                            <p>{data.createdAt}</p>
                                            <p>조회수 {data.viewCount}회</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        <hr />
                        <div className={styles['iconDiv']}>
                            <HeartCommentIcon hearts={data.heartCount} comments={data.commentCount} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PostItem;