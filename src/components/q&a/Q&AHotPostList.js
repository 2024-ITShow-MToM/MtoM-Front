import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&AHotPostList.module.css';

import DataSort from './DataSort';
import QandAPostItem from './Q&APostItem';

function QandAHotPostList() {
    return (
        <div className={styles['container']}>
            <DataSort />

            <div className={styles['item-grid-container']}>
                <QandAPostItem />
            </div>
            
        </div>
    )
}

export default QandAHotPostList;