import { Link } from 'react-router-dom';
import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&APostItem.module.css';

import { GoHeart } from "react-icons/go";
import { BsChat } from "react-icons/bs";

function QandAPostItem({ data, views, hearts }) {
    let hashtag = data.hashtags.split("/")[0];
    let date = data.createdAt.slice(0, 10);
    return (
        <>
            <Link to={`/q&a/question/${data.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <div className={styles['container']}>
                    <div className={styles['imgDiv']}> <img src={data.img} /> </div>
                    <div className={styles['info']}>
                        <div className={styles['topDiv']}>
                            <div className={styles['top']}>
                                <p>{date}</p>
                            </div>
                            <div className={styles['middle']}>
                                <div className={styles['title']}> <p>{data.title}</p> </div>
                            </div>
                            <div className={styles['bottom']}>
                                <div className={styles['tag']}> <p>{hashtag}</p> </div>
                                <p>조회수 {views}회</p>
                            </div>
                        </div>
                        <hr />
                        <div className={styles['iconDiv']}>
                            <div className={styles['heart']}> <GoHeart /> <p>{hearts}</p> </div>
                            <div className={styles['comment']}> <BsChat /> <p>3</p> </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default QandAPostItem;