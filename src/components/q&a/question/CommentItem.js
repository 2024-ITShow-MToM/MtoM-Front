import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/CommentItem.module.css';

import { GoHeart } from 'react-icons/go';
import { GoHeartFill } from 'react-icons/go';

function CommentItem({ data, onCommentAdded }) {
    const [clicked, setClicked] = useState(false);
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        if (clicked === true) {
            setClicked(true);
        } else {
            setClicked(false);
        }
    }, [data.commentId, userId]);

    const heartClick = async (e) => {
        e.preventDefault();
        try {
            const request = await axios.post(`${process.env.REACT_APP_HOST}/api/posts/comments/${data.commentId}/heart?userId=${userId}`);
            if (request.status === 200) {
                console.log("댓글 하트 누르기 성공");
                setClicked(true);
                onCommentAdded();
            } else {
                console.log("댓글 하트 누르기 실패", request.status);
            }
        } catch(error) {
            console.log("서버 연결 실패", error);
            onCommentAdded();
        }
    }

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['infoContainer']}>
                    <div className={styles['imgDiv']}> <img src={data.profile} /> </div>
                    <div className={styles['info']}>
                        <p>{data.name}</p>
                        <div className={styles['content']}>
                            <p>{data.content}</p>
                            <p>{data.time}</p>
                        </div>
                    </div>
                </div>

                <div className={styles['heart']}>
                    {clicked ? <GoHeartFill onClick={heartClick} /> : <GoHeart onClick={heartClick} />}
                    <p>{data.heartCount}</p>
                </div>
            </div>
        </>
    )
}

export default CommentItem;