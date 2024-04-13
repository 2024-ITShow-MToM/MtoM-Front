import '../../styles/common/Style.css';
import styles from '../../styles/q&a/Q&AChooseItem.module.css';

function QandAChooseItem() {
    return (
        <>
            <div className={styles['background']}>
                <div className={styles['container']}>
                    <div className={styles['topContainer']}>
                        <p>🧐 양자택일</p>
                        <p>취업 시 중요한 것은?</p>
                        <div className={styles['info']}>
                            <p>2024.04.13</p>
                            <p>조회수 601회</p>
                        </div>
                    </div>

                    <hr />

                    <div className={styles['buttonContainer']}>
                        <div className={styles['button']}> <input type='button'/> </div>
                        <div className={styles['button']}> <input type='button'/> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QandAChooseItem;