import React, { useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/profile/ProfileAdvice.module.css';

function ProfileAdvice({ setProfileData }) {
    const adviceArr = ['현실적으로 조언 해주는🤔', '감정적인 공감을 잘 해주는🥹', '계획적인 조인을 주는📝', '나의 경험을 이야기 해줄 수 있는💬', '좋은 아이디어를 제공해주는💡', '이야기를 잘 경청 해줄 수 있는👂🏻', '다름을 인정 해주는😌'];
    const [selectedAdvices, setSelectedAdvices] = useState([]);
    const [isSaveButtonVisible, setIsSaveButtonVisible] = useState(false);
    const [isAdviceDisabled, setIsAdviceDisabled] = useState(false);

    const handleAdviceClick = (advice) => {
        const index = selectedAdvices.indexOf(advice);
        if (index === -1) {
            setSelectedAdvices([...selectedAdvices, advice]);
            setIsSaveButtonVisible(true);
        } else {
            setSelectedAdvices(selectedAdvices.filter((item) => item !== advice));
            setIsSaveButtonVisible(false);
        }
    };

    const handleSaveButtonClick = () => {
        const selectedAdviceString = selectedAdvices.join(', ');
        setProfileData(prevData => ({
            ...prevData,
            personal: selectedAdviceString
        }));
        setIsSaveButtonVisible(false);
        setIsAdviceDisabled(true);
    };

    return (
        <>
            <div className={styles['advice']}>
                <div className={styles['title']}> <p>조언 성향</p> </div>
                <div className={styles['adviceContainer']}>                
                    <div className={styles['adviceSelect']}>
                        {adviceArr.map((advice, index) => (
                            <div
                                key={index}
                                className={`${styles['border']} ${selectedAdvices.includes(advice) ? styles['borderClicked'] : styles['borderDefault']}`}
                                onClick={() => !isAdviceDisabled && handleAdviceClick(advice)}
                                style={{ cursor: isAdviceDisabled ? 'not-allowed' : 'pointer' }}>
                                <p value={advice}>{advice}</p>
                            </div>
                        ))}
                        {selectedAdvices.length > 0 && isSaveButtonVisible && (
                            <div className={styles['button']}>
                                <button onClick={handleSaveButtonClick}>저장</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileAdvice;