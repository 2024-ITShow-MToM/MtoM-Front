import React, { useState } from "react";
import styles from "../../../styles/matching/InputStyle.module.css";

function PhoneNumInput() {
    const [part1, setPart1] = useState('');
    const [part2, setPart2] = useState('');
    const [part3, setPart3] = useState('');

    const handlePart1Change = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 3) {
            setPart1(value);
        }
    };

    const handlePart2Change = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 4) {
            setPart2(value);
        }
    };

    const handlePart3Change = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 4) {
            setPart3(value);
        }
    };

    return (
        <div className={styles['name-container']}>
            <p>연락처</p>
            <div className={styles['num-container']}>
                <input
                    type="text"
                    value={part1}
                    onChange={handlePart1Change}
                    placeholder="010"
                    className={styles['num-input']}
                />
                <input
                    type="text"
                    value={part2}
                    onChange={handlePart2Change}
                    placeholder="1234"
                    className={styles['num-input']}
                />
                <input
                    type="text"
                    value={part3}
                    onChange={handlePart3Change}
                    placeholder="5678"
                    className={styles['num-input']}
                />
            </div>
        </div>
    );
}

export default PhoneNumInput;
