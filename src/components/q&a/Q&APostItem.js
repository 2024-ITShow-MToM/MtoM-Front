import { Link } from 'react-router-dom';
import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&APostItem.module.css';

import QandAHeartCommentIcon from './Q&AHeartCommentIcon';

function QandAPostItem({ data, views }) {
    let hashtag = data.hashtags.split("/")[0];
    let date = data.createdAt.slice(0, 10);
    return (
        <>
            <Link to={`/q&a/question/${data.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <div className={styles['container']}>
                    <div className={styles['imgDiv']}> <img src={data.img} /> </div>
                    <div className={styles['info']}>
                        <div className={styles['topDiv']}>
                            {
                                views >= 100 ?
                                <>
                                    <div className={styles['hotTop']}>
                                        <p>🔥HOT</p>
                                        <p>{date}</p>
                                    </div>
                                </>
                                :
                                <>
                                    <div className={styles['top']}>
                                        <p>{date}</p>
                                    </div>
                                </>
                            }
                            <div className={styles['middle']}>
                                <div className={styles['title']}> <p>{data.title.length > 8 ? `${data.title.slice(0, 8)}...` : data.title}</p> </div>
                            </div>
                            <div className={styles['bottom']}>
                                <div className={styles['tag']}> <p>{hashtag}</p> </div>
                                <p>조회수 {views}회</p>
                            </div>
                        </div>
                        <hr />
                        <QandAHeartCommentIcon />
                    </div>
                </div>
            </Link>
        </>
    )
}

export default QandAPostItem;