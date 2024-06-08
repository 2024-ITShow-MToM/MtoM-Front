import React from "react";
import Nav from "../components/common/Nav";
import Tag from "../components/project/Tag";
import ProjectBox from "../components/project/ProjectBox";
import styles from "../styles/project/Project.module.css"
import { Icon } from "@iconify/react";

export default function Project(){
    return(
        <div style={{height:"100vh", overflow:"hidden"}}>
            <Tag/>
            <div className={styles.plusBtn}>
                <Icon icon="ph:plus-bold"/>
            </div>
            <div className={styles.projectContainer}>
                <ProjectBox/>
                <ProjectBox/>
                <ProjectBox/>
                <ProjectBox/>
                <ProjectBox/>
                <ProjectBox/>
                <ProjectBox/>
            </div>
            <Nav/>
        </div>
    )
}