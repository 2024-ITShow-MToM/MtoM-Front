import '../../../styles/common/Style.css';
import styles from '../../../styles/chat/individual chat/MyChat.module.css';

function MyChat({ text, time }) {
    return (
        <>
            <div className={styles['container']}>
                <p>{time}</p>
                <div className={styles['my-chat']}>{text}</div>
            </div>
        </>
    )
}

export default MyChat;