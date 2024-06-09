import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-day-picker/dist/style.css';
import { DayPicker, useNavigation } from 'react-day-picker';
import { ko } from 'date-fns/locale';
import { format, isAfter, isBefore, isValid, parse } from 'date-fns';

import '../../../styles/common/Style.css';
import styles from '../../../styles/project/register/RecruitmentPeriod.module.css';

import Header from '../../common/Header';
import { IoRemoveOutline } from "react-icons/io5";
import { ProjectContext } from './ProjectProvider';

function RecruitmentPeriod() {
    const { recruitment } = useContext(ProjectContext);
    const [selectedRange, setSelectedRange] = useState();
    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');
    const [recruitmentStart, setRecruitmentStart] = useState('');
    const [recruitmentEnd, setRecruitmentEnd] = useState('');

    const pastMonth = new Date();

    function CustomCaption(props) {
        const { goToMonth, nextMonth, previousMonth } = useNavigation();

        return (
          <>
            <div className={styles['rdp-nav']}>
                <button
                    name="previous-month"
                    className='rdp-button_reset rdp-button rdp-nav_button rdp-nav_button_previous'
                    aria-label='Go to previous month'
                    type='button'
                    disabled={!previousMonth}
                    onClick={() => previousMonth && goToMonth(previousMonth)}
                >
                    <svg width="16px" height="16px" viewBox="0 0 120 120" className="rdp-nav_icon">
                        <path d="M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z" fill="currentColor" fillRule="nonzero"></path>
                    </svg>
                </button>

                <div className='rdp-caption_label' aria-live='polite' role='presentation' id='test-0'>
                    {format(props.displayMonth, 'MMM', { locale: ko })}
                </div>
                
                <button
                    name="next-month"
                    className='rdp-button_reset rdp-button rdp-nav_button rdp-nav_button_next'
                    aria-label='Go to next month'
                    type='button'
                    disabled={!nextMonth}
                    onClick={() => nextMonth && goToMonth(nextMonth)}
                >
                    <svg width="16px" height="16px" viewBox="0 0 120 120" className="rdp-nav_icon"><path d="M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z" fill="currentColor"></path></svg>
                </button>
            </div>
          </>
        );
    }

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
          setFromValue(format(range.from, 'y-MM-dd'));
          setRecruitmentStart(format(range.from, 'y-MM-dd'));
        } else {
          setFromValue('');
        }
        
        if (range?.to) {
          setToValue(format(range.to, 'y-MM-dd'));
          setRecruitmentEnd(format(range.to, 'y-MM-dd'));
        } else {
          setToValue('');
        }
    };

    const handleSave = () => {
        if (recruitmentStart && recruitmentEnd) {
            recruitment(recruitmentStart, recruitmentEnd)
        } else {
            alert("모집기간 설정해주세요");
        }
    }

    return (
        <>
            <Header text='모집기간 설정'/>
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
                        selected={selectedRange}
                        onSelect={handleRangeSelect}
                        components={{
                            Caption: CustomCaption
                        }}
                    />
                </div>
                
                <div className={styles['button']}>
                    <Link to='/project/register' style={{ textDecoration: 'none', color: 'black' }}>
                        <button onClick={handleSave}>저장</button>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default RecruitmentPeriod;