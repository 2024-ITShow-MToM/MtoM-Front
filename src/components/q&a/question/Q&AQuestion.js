import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/Q&AQuestion.module.css';

import Header from '../../common/Header';
import QandAQuestionProfile from './Q&AQuestionProfile';
import Question from './Question';
import CommentList from './CommentList';
import SendInput from './SendInput';

function QandAQuestion() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    async function fetchData() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/api/posts/details/${id}`);
            if (response.status === 200) {
                console.log("게시글 단일 조회 데이터 불러오기 성공");
                setData(response.data);
            } else {
                console.log("게시글 단일 조회 데이터 불러오기 실패", response.status);
            }
        } catch(error) {
            console.log("서버 연결 실패", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const reloadComments = async () => {
        await fetchData();
    };

    return (
        <>
            <Header text={('질문')}/>

            <div className={styles['container']}>
                <div className={styles['imgContainer']}>
                    <img src={data.img} />
                    <div className={styles['profileContainer']}> <QandAQuestionProfile data={data.user} /> </div>
                </div>

                <div className={styles['questionContainer']}> <Question data={data} postId={id} onCommentAdded={reloadComments} /> </div>

                <div className={styles['commentContainer']}> <CommentList data={data.comments} onCommentAdded={reloadComments} /> </div>
                <div className={styles['inputContainer']}> <SendInput postId={id} onCommentAdded={reloadComments} /> </div>
            </div>
        </>
    )
}

export default QandAQuestion;