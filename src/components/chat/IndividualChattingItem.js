import { useNavigate } from 'react-router-dom';

import '../../styles/common/Style.css';
import styles from '../../styles/chat/IndividualChattingItem.module.css';
import { useContext } from 'react';
import { ChattingContext } from './ChattingProvider';

const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? '오후' : '오전';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    return `${ampm} ${hours}:${minutesStr}`;
}

function IndividualChattingItem({ data, userData }) {
    const navigate = useNavigate();
    const { saveId } = useContext(ChattingContext);
    const username = data.lastSenderId;

    const clickedChatting = () => {
        navigate(`/chat/individual/${username}`);
        saveId(data.lastSenderId);
    }

    return (
        <>
            <div className={styles['container']} onClick={clickedChatting}>
                    <div className={styles['inContainer']}>
                        <div className={styles['rightDiv']}>
                            <div className={styles['imgDiv']}> <img src={`${process.env.REACT_APP_IMAGEURL}/${userData.profile}`} /> </div>

                            <div className={styles['info']}>
                                <p>{userData.studentId} {userData.name}</p>
                                <p>{data.lastMessage}</p>
                            </div>
                        </div>

                        <div className={styles['leftDiv']}>
                            <p>{formatTime(data.lastMessageTime)}</p>
                            {
                                data.unreadMessageCount > 0 &&
                                <div className={styles['unreadCount']}>
                                    <p>{data.unreadMessageCount}</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
        </>
    )
}

export default IndividualChattingItem;