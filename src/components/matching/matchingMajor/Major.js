// import React from "react";

// function Major(props){
//     const { major , majorName } = props;
//     return(
//         <div>
//             <div>{major}</div>
//             <div>{majorName}</div>
//         </div>
//     )
// }
// export default Major;

import React from "react";
import styles from "../../../styles/matching/Major.module.css";

function Major(props) {
    const { major , majorName , isSelected, onClick } = props;
    return (
        <div className={styles['container']}>
            <div
                className={`${styles['field-box']} ${isSelected ? styles['selected'] : ''}`}
                onClick={onClick}
            >
                <div className={styles['major']}>{major}</div>
            </div>

            <div>{majorName}</div>
        </div>
    );
}

export default Major;