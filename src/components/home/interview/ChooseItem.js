import React from "react";
import styles from "../../../styles/home/Interview.module.css";

function ChooseItem(props) {
    const { tagname, selected, onClick } = props;
    return (
        <div 
            className={`${styles['default-item']} ${selected ? styles['selected-item'] : ''}`} 
            onClick={onClick}
        >
            {selected && <div className={styles['line']}></div>}
            <p>{tagname}</p>
        </div>
    )
}

export default ChooseItem;
