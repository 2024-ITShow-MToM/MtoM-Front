import React, { useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&AChooseWriteInput.module.css';

import { GoPlus } from "react-icons/go";

function QandAChooseWriteInput() {
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddItemClick = () => {
        if (inputValue.trim() !== '') {
            setItems([...items, inputValue]);
            setInputValue('');
        }
    };

    const isAddButtonDisabled = inputValue.trim() === '';

    return (
        <>
            <div className={styles['container']}>
                {items.map((item, index) => (
                    <div className={styles['input']}>
                        <input 
                            key={index}
                            placeholder='항목 입력하기' 
                            type='text'
                            value={item}
                            readOnly
                        />
                    </div>
                ))}
                <div className={styles['input']}>
                    <input 
                        placeholder='항목 입력하기' 
                        type='text'
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </div>


                <div className={styles['addButton']} onClick={handleAddItemClick}>
                    <GoPlus className={styles['icon']}/>
                    <p>항목 추가</p>
                    <input type='button' disabled={isAddButtonDisabled} />
                </div>
            </div>
        </>
    )
}

export default QandAChooseWriteInput;