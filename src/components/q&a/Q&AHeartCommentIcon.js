import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&AHeartCommentIcon.module.css';

import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { BsChat } from "react-icons/bs";

function QandAHeartCommentIcon({ data, postId }) {
    const userId = localStorage.getItem("userId");
    const [isHeartClicked, setIsHeartClicked] = useState(false);
    const [clickedHearts, setClickedHearts] = useState(0);

    const clickedHeart = async (e) => {
        e.preventDefault();
        try {
            const request = await axios.post(`${process.env.REACT_APP_HOST}/api/posts/${postId}/heart?userId=${userId}`);
            if (request.status === 200) {
                console.log("하트 성공");
                setIsHeartClicked(!isHeartClicked);
                clickedHeartData(); // 하트 누른 회원 조회
            } else {
                console.log("하트 실패", request.status);
            }
        } catch(error) {
            console.log("서버 연결 실패", error);
        }
    }

    const { id } = useParams();
    async function clickedHeartData() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/api/posts/${id}/hearts/users`);
            if (response.status === 200) {
                console.log("하트 누른 회원 조회 성공");
                const clickedUserIds = response.data.users.map(user => user.userId);
                const isUserClicked = clickedUserIds.includes(userId);
                setClickedHearts(response.data); // 하트 갯수
                setIsHeartClicked(isUserClicked); // 유저가 하트 눌렀는지 여부
            } else {
                console.log("하트 누른 회원 조회 실패", response.status);
            }
        } catch(error) {
            console.log("서버 연결 실패", error);
        }
    }

    useEffect(() => {
        clickedHeartData();
    }, []);

    return (
        <>
            <div className={styles['heart']}>
                {isHeartClicked ? <GoHeartFill onClick={clickedHeart} /> : <GoHeart onClick={clickedHeart} />}
                <p>{clickedHearts.heartCount}</p>
            </div>
            <div className={styles['comment']}>
                <BsChat />
                <p>{clickedHearts.commentCount}</p>
            </div>
        </>
    )
}

export default QandAHeartCommentIcon;