import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&AHeartCommentIcon.module.css';

import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { BsChat } from "react-icons/bs";
import { useParams } from 'react-router-dom';

function QandAHeartCommentIcon({ data, postId, onCommentAdded }) {
    const userId = localStorage.getItem("userId");
    const [clickedHeartData, setClickedHeartData] = useState([]);
    const [isHeartClicked, setIsHeartClicked] = useState(false);

    const clickedHeart = async (e) => {
        e.preventDefault();
        try {
            const request = await axios.post(`${process.env.REACT_APP_HOST}/api/posts/${postId}/heart?userId=${userId}`);
            if (request.status === 200) {
                console.log("하트 성공");
                setIsHeartClicked(!isHeartClicked);
                onCommentAdded();
            } else {
                console.log("하트 실패", request.status);
            }
        } catch(error) {
            console.log("서버 연결 실패", error);
        }
    }

    const { id } = useParams();
    useEffect(() => {
        async function clickedHeartData() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_HOST}/api/posts/${id}/hearts/users`);
                if (response.status === 200) {
                    console.log("하트 누른 회원 조회 성공");
                    setClickedHeartData(response.data.users);
                    const clickedUserIds = response.data.users.map(user => user.userId);
                    const isUserClicked = clickedUserIds.includes(userId);
                    setIsHeartClicked(isUserClicked);
                } else {
                    console.log("하트 누른 회원 조회 실패", response.status);
                }
            } catch(error) {
                console.log("서버 연결 실패", error);
            }
        }
        clickedHeartData();
    }, [id, userId]);

    return (
        <>
            <div className={styles['heart']}>
                {isHeartClicked ? <GoHeartFill onClick={clickedHeart} /> : <GoHeart onClick={clickedHeart} />}
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