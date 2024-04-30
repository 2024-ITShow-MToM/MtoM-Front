import '../../styles/common/Style.css';
import styles from '../../styles/chat/ChattingList.module.css';

import ChattingItem from './ChattingItem';

function ChattingList() {
    return (
        <>
            <div className={styles['container']}>
                <ChattingItem />    
            </div>
        </>
    )
}

export default ChattingList;