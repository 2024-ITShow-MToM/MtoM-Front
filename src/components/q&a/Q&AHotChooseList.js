import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&AHotChooseList.module.css';

import DataSort from './DataSort';
import QandAChooseItem from './QandAChooseItem';

function QandAHotChooseList() {
    return (
        <div className={styles['container']}>
            <DataSort />

            <div className={styles['item-grid-container']}>
                <QandAChooseItem />
            </div>
            
        </div>
    )
}

export default QandAHotChooseList;