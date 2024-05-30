import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/CommentItem.module.css';

import { GoHeart } from 'react-icons/go';
import { GoHeartFill } from 'react-icons/go';

function CommentItem({ data }) {
    const userId = localStorage.getItem("userId");
    const [isHeartClicked, setIsHeartClicked] = useState(false);
    const [clickedHeart, setClickedHeart] = useState([]);

     // 하트 누른 회원 조회
     const { id } = useParams();
     async function clickedHeartDatas() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/api/posts/comments/${data.commentId}/hearts/users`);
            if (response.status === 200) {
                console.log("댓글 하트 누른 회원 조회 성공");
                const clickedUserIds = response.data.users.map(user => user.userId);
                const isUserClicked = clickedUserIds.includes(userId);
                setIsHeartClicked(isUserClicked); // 유저가 하트 눌렀는지 여부
                setClickedHeart(response.data.heartCount); // 하트 갯수
            } else {
                console.log("댓글 하트 누른 회원 조회 실패", response.status);
            }
        } catch(error) {
            console.log("서버 연결 실패", error);
        }
    }
    useEffect(() => {
        clickedHeartDatas();
    }, [id, userId]);

    const heartClick = async (e) => {
        e.preventDefault();
        try {
            const request = await axios.post(`${process.env.REACT_APP_HOST}/api/posts/comments/${data.commentId}/heart?userId=${userId}`);
            if (request.status === 200) {
                console.log("댓글 하트 누르기 성공");
                clickedHeartDatas(); // 댓글 하트 누른 회원 조회
            } else {
                console.log("댓글 하트 누르기 실패", request.status);
            }
        } catch(error) {
            console.log("서버 연결 실패", error);
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
                    {isHeartClicked ? <GoHeartFill onClick={heartClick} /> : <GoHeart onClick={heartClick} />}
                    <p>{clickedHeart}</p>
                </div>
            </div>
        </>
    )
}

export default CommentItem;