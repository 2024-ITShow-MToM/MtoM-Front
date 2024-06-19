import React from 'react';
import Modal from 'react-modal';

import '../../styles/common/Style.css';
import styles from '../../styles/modals/ProjectApplyModal.module.css';

import { FaCircleCheck } from "react-icons/fa6";

function ProjectApplyModal({ isOpen, onClose }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/project');
        }, 1000);

        return () => clearTimeout(timer);
    }, [navigate]);
    return (
        <Modal
            isOpen={isOpen}
            className={styles['modal']}
        >
            <div className={styles['container']}>
                <FaCircleCheck style={{ fontSize: '30px', color: '#FF6524' }}/>
                <p>프로젝트 신청 완료!</p>
                <p>프로젝트 채팅방 초대 완료</p>
            </div>
        </Modal>
    )
}

export default ProjectApplyModal;
