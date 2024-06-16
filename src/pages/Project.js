import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Nav from "../components/common/Nav";
import Tag from "../components/project/Tag";
import ProjectBox from "../components/project/ProjectBox";
import styles from "../styles/project/Project.module.css"
import { Icon } from "@iconify/react";

export default function Project() {
    const navigate = useNavigate();
    const [projectData, setProjectData] = useState([]);

    async function projectAll() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/api/projects`);
            if (response.status) {
                console.log("모든 프로젝트 조회 성공");
                setProjectData(response.data.data);
            } else {
                console.log("모든 프로젝트 조회 실패", response.status);
            }
        } catch(error) {
            console.error("서버 연결 실패", error);
        }
    }

    const plusProject = () => {
        navigate('/project/register');
    }

    useEffect(() => {
        projectAll();
    }, []);

    return (
        <div style={{height:"100vh", overflow:"hidden"}}>
            <Tag 
                setTag={setProjectData}
                projectAll={projectAll}    
            />
            <div className={styles.plusBtn} onClick={plusProject}>
                <Icon icon="ph:plus-bold"/>
            </div>
            <div className={styles.projectContainer}>
                {
                    projectData && projectData.map((item, index) => (
                        <ProjectBox
                            key={index}
                            data={item}
                        />
                    ))
                }
            </div>
            <Nav/>
        </div>
    )
}