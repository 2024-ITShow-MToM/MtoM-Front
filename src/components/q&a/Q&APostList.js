import React, { useEffect, useState } from 'react';
import { HOST } from '../../config/Config';
import axios from 'axios';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&APostList.module.css';

import DataSort from './DataSort';
import QandAPostItem from './Q&APostItem';

function QandAPostList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${HOST}/api/posts`);
                if (response.status === 200) {
                    console.log("게시글 데이터 불러오기 성공");
                    setData(response.data);
                } else {
                    console.log("게시글 데이터 불러오기 실패", response.status);
                }
            } catch(error) {
                console.log("서버 연결 실패", error);
            }
        }
        fetchData();
    }, []);


    return (
        <>
            <div className={styles['container']}>
                <DataSort setSortData={setData} />

                <div className={styles['item-grid-container']}>
                    {
                        data.map((item, index) => {
                            return <QandAPostItem key={index} data={item.post} views={item.views} hearts={item.hearts} />
                        })
                    }
                </div>
                
            </div>
        </>
    )
}

export default QandAPostList;