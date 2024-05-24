import React from "react";
import styles from "../../../styles/matching/InputStyle.module.css"

function NameInput(){
    return(
        <div className={styles['input-container']}>
            <div className={styles['name-container']}>
                <p>성</p>
                <input></input>
            </div>
            <div className={styles['name-container']}>
                <p>이름</p>
                <input></input>
            </div>
        </div>
    )
}
export default NameInput