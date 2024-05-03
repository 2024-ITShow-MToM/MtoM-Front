import '../../../styles/common/Style.css';
import styles from '../../../styles/chat/group chat/YourChat.module.css';

function YourChat({ text, time }) {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['your-chat']}>{text}</div>
                <p>{time}</p>
            </div>
        </>
    )
}

export default YourChat;