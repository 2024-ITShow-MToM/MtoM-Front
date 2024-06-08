import React, { useState } from "react";
import Header from "../common/Header";
import FieldContainer from "./FieldList";
import ProjectApplyModal from "../modals/ProjectApplyModal";
import styles from "../../styles/project/ProjectApplication.module.css";

function ProjectApplication() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Header text="프로젝트 신청하기"/>
            <div style={{padding:"0 5%", display:"flex", flexDirection:"column", rowGap:"5vw", marginTop:"3vw"}}>
                <div>
                    <div className={styles.txtBox}>
                        <p>작업 영역</p>
                        <p>프로젝트 작업영역을 선택해주세요!</p>
                    </div>
                    <FieldContainer/>
                </div>
                <div>
                    <div className={styles.txtBox}>
                        <p>신청서 작성</p>
                        <p>하고싶은 말을 자유롭게 적어주세요. (다짐,목표 등)</p>
                    </div>
                    <textarea className={styles.textareaBox}></textarea>
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
