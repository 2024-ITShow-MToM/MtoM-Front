import React, { useEffect, useState } from 'react';
import { HOST } from '../../../config/Config';
import axios from 'axios';
import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/question/Q&AQuestionProfile.module.css';

function QandAQuestionProfile() {
    // const userId = localStorage.getItem("userId");
    // const[data, setData] = useState([]);
    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await axios.get(`${HOST}/api/users`);
    //             if (response.status === 200) {
    //                 console.log("회원 조회 성공");
    //                 setData(response.data);
    //             } else {
    //                 console.log("회원 조회 실패", response.status);
    //             }
    //         } catch(error) {
    //             console.log("서버 연결 실패", error);
    //         }
    //     }
    //     fetchData();
    // }, []);

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['imgDiv']}> <img src='/images/example.png' /> </div>
                <div className={styles['info']}>
                    <p>디자인과</p>
                    <p>3413 최보람</p>
                </div>
            </div>
        </>
    )
}

export default QandAQuestionProfile;