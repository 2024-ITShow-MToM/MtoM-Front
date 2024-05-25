import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&AHeartCommentIcon.module.css';

import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { BsChat } from "react-icons/bs";

function QandAHeartCommentIcon({ data, postId, onCommentAdded }) {
    const userId = localStorage.getItem("userId");
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const clickedHeart = localStorage.getItem(`clickedHeart${postId}`);
        const clickedUserId = localStorage.getItem('clickedUserId');
        if (clickedHeart === "true" && clickedUserId === userId) {
            setClicked(true);
        }
    }, [postId, userId]);

    const clickedHeart = async (e) => {
        e.preventDefault();
        try {
            const request = await axios.post(`${process.env.REACT_APP_HOST}/api/posts/${postId}/heart?userId=${userId}`);
            if (request.status === 200) {
                console.log("하트 성공");
                if (clicked) {
                    localStorage.removeItem(`clickedHeart${postId}`);
                    localStorage.removeItem('clickedUserId');
                    setClicked(false);
                } else {
                    localStorage.setItem(`clickedHeart${postId}`, "true");
                    localStorage.setItem('clickedUserId', `${userId}`);
                    setClicked(true);
                }
                onCommentAdded();
            } else {
                console.log("하트 실패", request.status);
            }
        } catch(error) {
            console.log("서버 연결 실패", error);
        }
    }

    return (
        <>
            <div className={styles['heart']}>
                {clicked ? <GoHeartFill onClick={clickedHeart} /> : <GoHeart onClick={clickedHeart} />}
                <p>{data.heartCount}</p>
            </div>
            <div className={styles['comment']}>
                <BsChat />
                <p>{data.commentCount}</p>
            </div>
        </>
    )
}

export default QandAHeartCommentIcon;