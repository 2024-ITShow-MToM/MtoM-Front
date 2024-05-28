import React, { useEffect, useState } from 'react';
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
                const response = await axios.get(`${process.env.REACT_APP_HOST}/api/qna/posts`, {
                    params: {
                        sortBy: "latest"
                    }
                });
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

    // 데이터 정렬
    const handleSort = (sortedData) => {
        setData(sortedData);
    };

    return (
        <>
            <div className={styles['container']}>
                <DataSort handleSort={handleSort} />

                <div className={styles['item-grid-container']}>
                    {
                        data.map((item, index) => {
                            return <QandAPostItem key={index} data={item} views={item.viewCount} hearts={item.heartCount} comments={item.commentCount} />
                        })
                    }
                </div>
                
            </div>
        </>
    )
}

export default QandAPostList;