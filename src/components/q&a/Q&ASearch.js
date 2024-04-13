import React, { useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&ASearch.module.css';

import { RiSearchLine } from "react-icons/ri";

function QandASearch() {
    const [expanded, setExpanded] = useState(false);

    const handleMouseEnter = () => {
        setExpanded(true);
    };

    const handleMouseLeave = () => {
        setExpanded(false);
    };

    return (
        <>
            <div className={styles['container']} style={{height: expanded ? '20vh' : '12vh'}}>
                <div className={styles['search']}>
                    <div className={styles['searchInput']} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <input type='text' placeholder='Q&A 키워드 검색하기' style={{width: expanded ? '75vw' : '90vw'}}/>
                        <div className={styles['iconDiv']}> <RiSearchLine className={styles['icon']}/> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QandASearch;