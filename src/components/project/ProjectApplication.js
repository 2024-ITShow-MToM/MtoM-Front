import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { ProjectContext } from "./ProjectProvider";

import Header from "../common/Header";
import FieldContainer from "./FieldList";
import ProjectApplyModal from "../modals/ProjectApplyModal";
import styles from "../../styles/project/ProjectApplication.module.css";
import axios from "axios";

function ProjectApplication() {
    const navigate = useNavigate();
    const userId = useSelector(state => state.userId);
    const { projectId } = useContext(ProjectContext);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [role, setRole] = useState('');
    const [application, setApplication] = useState('');

    const handleButtonClick = () => {
        setIsModalOpen(true);
        projectApplication();
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        navigate("/project");
    };

    async function projectApplication() {
        try {
            const request = await axios.post(`${process.env.REACT_APP_API_URL}/api/projects/application`, {
                userId: userId,
                projectId: projectId,
                role: role,
                application: application
            });
            if (request.status === 200) {
                console.log("프로젝트 신청 성공");
            } else {
                console.log("프로젝트 신청 실패", request.status);
            }
        } catch(error) {
            console.error('서버 연결 실패', error);
        }
    }

    return (
        <div>
            <Header text="프로젝트 신청하기"/>
            <div style={{padding:"0 5%", display:"flex", flexDirection:"column", rowGap:"5vw", marginTop:"3vw"}}>
                <div>
                    <div className={styles.txtBox}>
                        <p>작업 영역</p>
                        <p>프로젝트 작업영역을 선택해주세요!</p>
                    </div>
                    <FieldContainer setRole={setRole} />
                </div>
                <div>
                    <div className={styles.txtBox}>
                        <p>신청서 작성</p>
                        <p>하고싶은 말을 자유롭게 적어주세요. (다짐,목표 등)</p>
                    </div>
                    <textarea className={styles.textareaBox} onChange={e => setApplication(e.target.value)}></textarea>
                </div>
                <div className={styles.button}>
                    <button onClick={handleButtonClick}>프로젝트 신청하기</button>
                </div>
            </div>
            <ProjectApplyModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
}

export default ProjectApplication;
