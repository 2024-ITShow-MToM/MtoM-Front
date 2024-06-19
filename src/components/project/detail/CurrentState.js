import React, { useState, useEffect } from 'react';

import '../../../styles/common/Style.css';
import styles from '../../../styles/project/detail/CurrentState.module.css';

function CurrentState({ data }) {
    const [currentState, setCurrentState] = useState('');

    useEffect(() => {
        if (data.frontend_personnel === data.current_frontend &&
            data.backend_personnel === data.current_backend &&
            data.designer_personnel === data.current_designer &&
            data.promoter_personnel === data.current_promoter) {
            setCurrentState('모집완료');
        } else {
            setCurrentState('모집중');
        }
    }, [data]);

    return (
        <div className={styles['container']}>
            <p>{currentState}</p>
        </div>
    )
}

export default CurrentState;