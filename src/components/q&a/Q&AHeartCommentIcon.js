import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HOST } from '../../config/Config';
import axios from 'axios';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&AHeartCommentIcon.module.css';

import { GoHeart } from "react-icons/go";
import { BsChat } from "react-icons/bs";

function QandAHeartCommentIcon({ data }) {
    // const [data, setData] = useState([]);
    // const { id } = useParams();

    // async function fetchData() {
    //     try {
    //         const response = await axios.get(`${HOST}/api/posts/details/${id}`);
    //         if (response.status === 200) {
    //             console.log("게시글 단일 조회 데이터 불러오기 성공");
    //             setData(response.data);
    //         } else {
    //             console.log("게시글 단일 조회 데이터 불러오기 실패", response.status);
    //         }
    //     } catch(error) {
    //         console.log("서버 연결 실패", error);
    //     }
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);

    return (
        <>
            <div className={styles['heart']}> <GoHeart /> <p>{data.heartCount}</p> </div>
            <div className={styles['comment']}> <BsChat /> <p>{data.commentCount}</p> </div>
        </>
    )
}

export default QandAHeartCommentIcon;