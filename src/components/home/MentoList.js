import React from 'react';
import Mento from './Mento';
import styles from '../../styles/home/Home.module.css'

function MentoList() {
    const mentoData = [
        { major: '웹솔루션과', name: '최보람', hashTag: '#리액트 #정신교육', infoText: '리액트, 정신교육에 관한 멘토 해드려요!' },
        { major: '웹솔루션과', name: '최보람', hashTag: '#리액트 #정신교육', infoText: '리액트, 정신교육에 관한 멘토 해드려요!' },
        { major: '웹솔루션과', name: '최보람', hashTag: '#리액트 #정신교육', infoText: '리액트, 정신교육에 관한 멘토 해드려요!' }
    ];

    return (
        <div className={styles['mento-box']}>
            {mentoData.map((data, index) => (
                <Mento
                    key={index}
                    isFirst={index === 0}
                    major={data.major}
                    name={data.name}
                    hashTag={data.hashTag}
                    infoText={data.infoText}
                />
            ))}
        </div>
    );
}

export default MentoList;
