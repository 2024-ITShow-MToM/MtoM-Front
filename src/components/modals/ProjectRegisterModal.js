import React from 'react';
import Modal from 'react-modal';

import '../../styles/common/Style.css';
import styles from '../../styles/modals/ProjectRegisterModal.module.css';

import { FaCircleCheck } from "react-icons/fa6";

function ProjectRegisterModal() {
    return (
        <Modal isOpen={true} className={styles['modal']}>
            <div className={styles['container']}>
                <FaCircleCheck style={{ fontSize: '30px', color: '#FF6524' }}/>
                <p>프로젝트 등록 완료!</p>
                <p>미림인들의 프로젝트를 응원합니다!</p>
            </div>
        </Modal>
    )
}

export default ProjectRegisterModal;