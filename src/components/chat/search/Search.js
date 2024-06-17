import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import '../../../styles/common/Style.css';
import styles from '../../../styles/chat/search/Search.module.css';

import Header from '../../common/Header';

import { RiSearchLine } from "react-icons/ri";
import SearchList from './SearchList';

function Search() {
    const userId = useSelector(state => state.userId);
    const [keyword, setKeyword] = useState('');
    const [user, setUser] = useState([]);
    const [selected, setSelected] = useState(false);

    // 유저 검색 api
    async function SearchUser() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/api/users/searches/${keyword}`);
            if (response.status === 200) {
                console.log("유저 검색 성공");
                const filteredUsers = response.data.filter(user => user.userId !== userId);
                setUser(filteredUsers);
            } else {
                console.log("유저 검색 실패", response.status);
            }
        } catch(error) {
            console.error("서버 연결 실패", error);
        }
    }

    // 모든 회원 불러오기 api
    async function AllUser() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/api/users`);
            if (response.status === 200) {
                console.log("모든 유저 정보 불러오기 성공");
                const filteredUsers = response.data.filter(user => user.userId !== userId);
                setUser(filteredUsers);
                setSelected(false);
            } else {
                console.log("모든 유저 정보 불러오기 실패", response.status);
            }
        } catch(error) {
            console.error("서버 연결 실패", error);
        }
    }

    useEffect(() => {
        AllUser();
    }, []);

    const handleSearch = async (event) => {
        if (!event.target.value.trim()) {
            setUser([]);
            setSelected(false)
            return;
        }

        // 엔터 누르면 유저 검색
        if (event.key === 'Enter') {
            SearchUser();
        }
    };

    return (
        <>
            <Header text='채팅 추가하기' />
            <div className={styles['search']}>
                <div className={styles['searchInput']}>
                    <input 
                        type='text' 
                        placeholder='이름 검색하기' 
                        onKeyPress={handleSearch}
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <div className={styles['iconDiv']}> <RiSearchLine className={styles['icon']} onClick={SearchUser}/> </div>
                </div>
            </div>
            <div className={styles['searchList']}>
                <SearchList user={user} setSelected={setSelected} />
            </div>
        </>
    )
}

export default Search;