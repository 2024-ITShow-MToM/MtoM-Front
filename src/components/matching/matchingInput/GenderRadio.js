import React from "react";
import styles from "../../../styles/matching/InputStyle.module.css"

function GenderRadio(){
    return(
        <div className={styles['radioGroup']}>
            <div className={styles['title']}> <p>성별</p> </div>
            <div className={styles['radioDiv']}>
                <div className={styles['radioButton']}>
                    <input id='gender' type='radio' name='radioButton' value='여자'/>
                    <label className={styles['label']}>여자</label>
                </div>
                <div className={styles['radioButton']}>
                    <input id='gender' type='radio' name='radioButton' value='남자'/>
                    <label className={styles['label']}>남자</label>
                </div>
            </div>
        </div>
    )
}
export default GenderRadio;