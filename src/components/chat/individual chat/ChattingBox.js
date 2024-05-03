import '../../../styles/common/Style.css';
import styles from '../../../styles/chat/individual chat/ChattingBox.module.css';

import MyChat from './MyChat';
import YourChat from './YourChat';

function ChattingBox({ date }) {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['date']}>
                    <hr />
                    <div className={styles['dateBox']}>{date}</div>
                    <hr />
                </div>
                <div className={styles['chatting']}>
                    <MyChat text='안녕!' time='오전 10:20'/>
                    <YourChat text='안녕~!' time='오전 10:22'/>
                    <MyChat text='만나서 반가워' time='오전 10:22'/>
                </div>
            </div>
        </>
    )
}

export default ChattingBox;