import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&ASearchList.module.css';

import QandAChooseItem from './Q&AChooseItem';
import QandAPostItem from './Q&APostItem';

function QandASearchList({ postData, chooseData }) {
    return (
        <div className={styles['container']}>
            <div className={styles['item-grid-container']}>
                {postData.length > 0 || chooseData.length > 0 ? (
                    <>
                        {postData.map((item, index) => (
                            <QandAPostItem
                                key={index}
                                data={item}
                                views={item.viewCount}
                                hearts={item.heartCount}
                                comments={item.commentCount}
                            />
                        ))}
                        {chooseData.map((item, index) => (
                            <QandAChooseItem
                                key={index}
                                onePercentage={item.options[0].percentage1}
                                twoPercentage={item.options[0].percentage2}
                                data={item}
                                options={item.options}
                            />
                        ))}
                    </>
                ) : (
                    <p>검색 결과 없습니다.</p>
                )}
            </div>
        </div>
    )
}

export default QandASearchList;