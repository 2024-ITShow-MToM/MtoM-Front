import React from "react";
import { useNavigate } from "react-router-dom";
import CurrentState from "./detail/CurrentState";
import MajorContainer from "./MajorContainer";
import styles from "../../styles/project/Project.module.css";
import Recruitment from "./Recruitment";

export default function ProjectBox() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/project/projectApplication');
    };

    return (
        <div className={styles['container']} onClick={handleClick}>
            <div className={styles.userBox}>
                <div>
                    <p className={styles.name}>2413 최보람</p>
                    <p className={styles.title}>간단한 프로젝트 같이 하실분 구해요!</p>
                </div>
                <CurrentState />
            </div>
            <div className={styles.projectBox}>
                <div style={{ display: "flex", alignItems: "end" }}>
                    <MajorContainer />
                    <p>2022.03.12 ~ 04.12</p>
                </div>
                <Recruitment />
            </div>
        </div>
    );
}
