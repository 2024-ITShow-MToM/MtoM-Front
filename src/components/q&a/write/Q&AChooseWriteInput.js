import React, { useState } from 'react';

import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/write/Q&AChooseWriteInput.module.css';

function QandAChooseWriteInput() {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [valueArr, setValueArr] = useState([]);

    const handleInputChange1 = (event) => {
        setInputValue1(event.target.value);
    };

    const handleInputChange2 = (event) => {
        setInputValue2(event.target.value);
    };

    const handleAddItem = () => {
        const item1 = inputValue1.trim();
        const item2 = inputValue2.trim();
        
        if (item1 !== '' && item2 !== '') {
            setValueArr(item1, item2); // 작성한 항목 배열에 저장
            setInputValue1('');
            setInputValue2('');
        }
    };

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['input']}>
                    <input 
                        placeholder='항목 입력하기' 
                        type='text'
                        value={inputValue1}
                        onChange={handleInputChange1}
                    />
                </div>

                <div className={styles['input']}>
                    <input 
                        placeholder='항목 입력하기' 
                        type='text'
                        value={inputValue2}
                        onChange={handleInputChange2}
                    />
                </div>
            </div>

            <div className={styles['button']}>
                <button onClick={handleAddItem}>등록하기</button>
            </div>
        </>
    )
}

export default QandAChooseWriteInput;