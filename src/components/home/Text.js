import React from "react";
import styles from "../../styles/home/Home.module.css"

function Text(props) {
    const {text} = props;

    return(
        <p className={styles['ment']}>{text}</p>
    )
}
export default Text;