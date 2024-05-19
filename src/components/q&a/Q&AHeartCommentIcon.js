import React, { useState } from 'react';
import { HOST } from '../../config/Config';
import axios from 'axios';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&AHeartCommentIcon.module.css';

import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { BsChat } from "react-icons/bs";

function QandAHeartCommentIcon({ data, postId, onCommentAdded }) {
    const userId = localStorage.getItem("userId");
    const [clicked, setClicked] = useState(false);

    const clickedHeart = async (e) => {
        e.preventDefault();
        try {
            const request = await axios.post(`${HOST}/api/posts/${postId}/heart?userId=${userId}`);
            if (request.status === 200) {
                console.log("하트 누르기 성공");
                setClicked(true);
                onCommentAdded();
            } else {
                console.log("하트 누르기 실패", request.status);
            }
        } catch(error) {
            console.log("서버 연결 실패", error);
        }
    }

    return (
        <>
            <div className={styles['heart']}>
                {clicked ? <GoHeartFill /> : <GoHeart onClick={clickedHeart} />}
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