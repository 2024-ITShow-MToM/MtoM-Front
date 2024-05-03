import '../../styles/common/Style.css';
import styles from '../../styles/chat/ChattingList.module.css';

import IndividualChattingItem from './IndividualChattingItem';
import GroupChattingItem from './GroupChattingItem';

function ChattingList() {
    return (
        <>
            <div className={styles['container']}>
                <IndividualChattingItem />  
                <GroupChattingItem />  
            </div>
        </>
    )
}

export default ChattingList;