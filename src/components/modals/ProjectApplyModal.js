import React, {useEffect} from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

import '../../styles/common/Style.css';
import styles from '../../styles/modals/ProjectApplyModal.module.css';

import { FaCircleCheck } from "react-icons/fa6";

function ProjectApplyModal({ isOpen, onClose }) {
    const navigate = useNavigate()
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/project');
        }, 3000);

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