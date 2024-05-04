import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import { ko } from 'date-fns/locale';
import { format, isAfter, isBefore, isValid, parse } from 'date-fns';

import '../../../styles/common/Style.css';
import styles from '../../../styles/project/register/RecruitmentPeriod.module.css';

import Header from '../Header';
import { IoRemoveOutline } from "react-icons/io5";

function RecruitmentPeriod() {
    const [selectedRange, setSelectedRange] = useState();
    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const pastMonth = new Date();

    const formatCaption = (month, options) => {
        return (
            <>
                {format(month, 'LLLL', { locale: options?.locale })}
            </>
        );
    };

    const handleFromChange = (e) => {
        setFromValue(e.target.value);
        const date = parse(e.target.value, 'y.MM.dd', new Date());
        if (!isValid(date)) {
            return setSelectedRange({ from: undefined, to: undefined });
        }
        if (selectedRange?.to && isAfter(date, selectedRange.to)) {
            setSelectedRange({ from: selectedRange.to, to: date });
        } else {
            setSelectedRange({ from: date, to: selectedRange?.to });
        }
    };

    const handleToChange = (e) => {
        setToValue(e.target.value);
        const date = parse(e.target.value, 'y.MM.dd', new Date());
    
        if (!isValid(date)) {
          return setSelectedRange({ from: selectedRange?.from, to: undefined });
        }
        if (selectedRange?.from && isBefore(date, selectedRange.from)) {
          setSelectedRange({ from: date, to: selectedRange.from });
        } else {
          setSelectedRange({ from: selectedRange?.from, to: date });
        }
    };

    const handleRangeSelect = (range) => {
        setSelectedRange(range);
        if (range?.from) {
          setFromValue(format(range.from, 'y.MM.dd'));
          setStartDate(format(range.from, 'y.MM.dd'));
        } else {
          setFromValue('');
        }
        
        if (range?.to) {
          setToValue(format(range.to, 'y.MM.dd'));
          setEndDate(format(range.to, 'y.MM.dd'));
        } else {
          setToValue('');
        }
    };

    let state = null;
    const handleSave = () => {
        console.log("save 함수 호출");
        if (startDate && endDate) {
            state = { startDate, endDate };
            console.log(state);
            return state;
        } else {
            console.log("둘 다 선택안함");
        }
        return state;
    }

    return (
        <>
            <Header title='모집기간 설정'/>
            <div className={styles['container']}>
                <div>
                    <form className={styles['form']}>
                        <input
                            style={fromValue.length !== 0 ? { borderColor: '#FF6524' } : null}
                            size={15}
                            placeholder="시작일 선택"
                            value={fromValue}
                            onChange={handleFromChange}
                            readOnly
                        />
                        <IoRemoveOutline style={toValue.length !== 0 && fromValue.length !== 0 ? { color: '#FF6524' } : null}/>
                        <input
                            style={toValue.length !== 0 ? { borderColor: '#FF6524' } : null}
                            size={15}
                            placeholder="마감일 선택"
                            value={toValue}
                            onChange={handleToChange}
                            readOnly
                        />
                    </form>

                    <DayPicker
                        locale={ko}
                        id="test"
                        mode="range"
                        defaultMonth={pastMonth}
                        formatters={{ formatCaption }}
                        selected={selectedRange}
                        onSelect={handleRangeSelect}
                    />
                </div>
                
                <div className={styles['button']}>
                    <Link
                        to={{
                            pathname: '/project/register',
                            state: { startDate: fromValue, endDate: toValue }
                        }}
                        style={{ textDecoration: 'none', color: 'black' }}
                    >
                        <button>저장</button>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default RecruitmentPeriod;