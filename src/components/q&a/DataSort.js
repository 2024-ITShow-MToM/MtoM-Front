import React, { useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/DataSort.module.css';
import axios from 'axios';

function DataSort({ handleSort }) {
    const [selectedSort, setSelectedSort] = useState('');

    const handleSortClick = async (sortType) => {
        setSelectedSort(sortType);
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/api/qna/posts?sortBy=${sortType}`);
            if (response.status === 200) {
                console.log(`${sortType} 데이터 불러오기 성공`);
                handleSort(response.data);
            } else {
                console.log(`${sortType} 데이터 불러오기 실패`);
            }
        } catch (error) {
            console.log("서버 연결 실패", error);
        }
    };

    return (
        <div className={styles['buttonContainer']}>
            <button
                className={selectedSort === '조회수' ? styles['selectButton'] : styles['defaultButton']}
                onClick={() => handleSortClick('views')}
            >
                조회수
            </button>
            <button
                className={selectedSort === '댓글' ? styles['selectButton'] : styles['defaultButton']}
                onClick={() => handleSortClick('comments')}
            >
                댓글
            </button>
            <button
                className={selectedSort === '하트' ? styles['selectButton'] : styles['defaultButton']}
                onClick={() => handleSortClick('hearts')}
            >
                하트
            </button>
        </div>
    );
}

export default DataSort;