import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&ASearch.module.css';

import { RiSearchLine } from "react-icons/ri";

function QandASearch({ onSearch, setPostData, setChooseData }) {
    const [expanded, setExpanded] = useState(true);
    const [keyword, setKeyword] = useState('');
    const userId = useSelector(state => state.userId);

    const handleSearch = async (event) => {
        if (!event.target.value.trim()) {
            setPostData([]);
            setChooseData([]);
            return;
        }

        if (event.key === 'Enter') {
            try {
                const response = await axios.get(`${process.env.REACT_APP_HOST}/api/qna`, {
                    params: {
                        userId: userId,
                        keyword: keyword
                    }
                });
                if (response.status === 200) {
                    console.log("Q&A 키워드 데이터 불러오기 성공");
                    setPostData(response.data.filter(item => item.hasOwnProperty('postId')));
                    setChooseData(response.data.filter(item => item.hasOwnProperty('selectId')));
                    setExpanded(false);
                    onSearch(true);
                } else {
                    console.log("Q&A 키워드 데이터 불러오기 실패", response.status);
                    setExpanded(true);
                }
            } catch (error) {
                console.log('서버 연결 실패', error);
                setExpanded(true);
            }
        }
    };

    return (
        <>
            <div className={styles['container']} style={{height: expanded ? '17vh' : '10vh'}}>
                <div className={styles['search']}>
                    <div className={styles['searchInput']}>
                        <input 
                            type='text' 
                            placeholder='Q&A 키워드 검색하기' 
                            style={{width: expanded ? '80vw' : '90vw'}}
                            onKeyPress={handleSearch}
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                        <div className={styles['iconDiv']}> <RiSearchLine className={styles['icon']}/> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QandASearch;