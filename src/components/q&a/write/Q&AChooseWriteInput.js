import React from 'react';

import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/write/Q&AChooseWriteInput.module.css';

function QandAChooseWriteInput({ setChooseData }) {
    const handleChange = (e) => {
        const { id, value } = e.target;
        if (value !== '') {
            setChooseData(data => ({
                ...data,
                [id]: value.trim()
            }));
        }
    };

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['input']}>
                    <input 
                        id='option1'
                        placeholder='항목 입력하기' 
                        type='text'
                        onChange={handleChange}
                    />
                </div>

                <div className={styles['input']}>
                    <input 
                        id='option2'
                        placeholder='항목 입력하기' 
                        type='text'
                        onChange={handleChange}
                    />
                </div>
            </div>
        </>
    )
}

export default QandAChooseWriteInput;