import '../../../styles/common/Style.css';
import styles from '../../../styles/chat/individual chat/ChattingBox.module.css';

import MyChat from './MyChat';
import YourChat from './YourChat';

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

function ChattingBox({ date, messages, userId }) {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['date']}>
                    <hr />
                    <div className={styles['dateBox']}>{date}</div>
                    <hr />
                </div>
                <div className={styles['chatting']}>
                    {messages.map((message, index) => {
                        const previousMessage = messages[index - 1];
                        const showProfile = !previousMessage || previousMessage.senderId !== message.senderId;
                        return message.senderId === userId ? 
                            <MyChat key={index} text={message.message} time={formatTime(message.timestamp)} /> :
                            <YourChat key={index} text={message.message} time={formatTime(message.timestamp)} showProfile={showProfile} />
                    })}
                </div>
            </div>
        </>
    )
}

export default ChattingBox;