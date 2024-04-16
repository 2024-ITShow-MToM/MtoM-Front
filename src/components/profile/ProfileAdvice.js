import React, { useState, useEffect, useRef } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/profile/ProfileAdvice.module.css';

import { FiPlus } from 'react-icons/fi';

function ProfileAdvice() {
    const [advices, setAdvices] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
        inputRef.current.focus();
        }
    }, [advices]);

    const handleAddAdvice = () => {
        const hasEmptyValue = advices.some(advice => advice.value === '');
        if (!hasEmptyValue) {
            const newAdviceId = `advice-${advices.length + 1}`;
            setAdvices([...advices, { id: newAdviceId, value: '' }]);
        }
    };

    const handleChange = (e, id) => {
        const updatedAdvices = advices.map(advice => {
        if (advice.id === id) {
            return { ...advice, value: e.target.value };
        }
        return advice;
        });
        setAdvices(updatedAdvices);
    };

    const divRef = useRef(null);
    const handleAdviceInput = () => {
        const input = divRef.current;
        input.style.height = 'auto';
        input.style.height = `${input.scrollHeight}px`;
    };

    return (
        <>
            <div className={styles['advice']}>
                <div className={styles['title']}> <p>조언 성향</p> </div>

                <div className={styles['adviceContainer']} ref={divRef} onInput={handleAdviceInput}>
                    {advices.map((advice, index) => (
                        <div key={advice.id} className={styles['adviceAdd']}>
                            <input
                                ref={index === advices.length - 1 ? inputRef : null}
                                value={advice.value}
                                onChange={e => handleChange(e, advice.id)}
                            />
                        </div>
                    ))}
                    <div className={styles['advicePlus']} onClick={handleAddAdvice}>
                        <FiPlus className={styles['plusIcon']}/>
                        <p>조언 성향 추가</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileAdvice;