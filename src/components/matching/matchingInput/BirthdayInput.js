import React, { useState } from "react";
import styles from "../../../styles/matching/InputStyle.module.css";

function BirthdayInput() {
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');

    const handleYearChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 4) {
            setYear(value);
        }
    };

    const handleMonthChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 2) {
            setMonth(value);
        }
    };

    const handleDayChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 2) {
            setDay(value);
        }
    };

    return (
        <div className={styles['name-container']}>
            <p>생년월일</p>
            <div className={styles['day-container']}>
                <input
                    type="text"
                    value={year}
                    onChange={handleYearChange}
                    placeholder="YYYY"
                />
                <input
                    type="text"
                    value={month}
                    onChange={handleMonthChange}
                    placeholder="MM"
                />
                <input
                    type="text"
                    value={day}
                    onChange={handleDayChange}
                    placeholder="DD"
                />
            </div>
        </div>
    );
}

export default BirthdayInput;
