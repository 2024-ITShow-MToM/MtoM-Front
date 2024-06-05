import React, { useState } from 'react';

import '../../../styles/common/Style.css';
import styles from '../../../styles/chat/search/Search.module.css';

import Header from '../../common/Header';

import { RiSearchLine } from "react-icons/ri";
import SearchList from './SearchList';

function Search() {
    const [keyword, setKeyword] = useState('');
    const [user, setUser] = useState([]);

    const handleSearch = async (event) => {
        if (!event.target.value.trim()) {
            setUser([]);
            return;
        }

        if (event.key === 'Enter') {

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
                    <div className={styles['iconDiv']}> <RiSearchLine className={styles['icon']}/> </div>
                </div>
            </div>
            <div className={styles['searchList']}>
                <SearchList />
            </div>
        </>
    )
}

export default Search;