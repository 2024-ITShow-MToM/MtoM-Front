import React, { useState } from "react";
import ChooseItem from "./ChooseItem";
import styles from "../../../styles/home/Interview.module.css";

function ChooseContainer() {
    const [selectedItem, setSelectedItem] = useState(0);
    const items = ["HOT", "취업", "학교생활", "진학"];

    return (
        <div className={styles['choose-container']}>
            {items.map((item, index) => (
                <ChooseItem 
                    key={index} 
                    tagname={item} 
                    selected={selectedItem === index}
                    onClick={() => setSelectedItem(index)}
                />
            ))}
        </div>
    )
}

export default ChooseContainer;
