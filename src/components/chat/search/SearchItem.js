import '../../../styles/common/Style.css';
import styles from '../../../styles/chat/search/SearchItem.module.css';
import SearchDetail from './SearchDetail';

function SearchItem({ id, onClick, isSelected }) {
    return (
        <>
            {isSelected ? (
                <SearchDetail />
            ) : (
                <div className={styles['container']} onClick={() => onClick(id)}>
                    <div className={styles['inDiv']}>
                        <div className={styles['imgDiv']}>
                            <img src='/images/example.png' alt='Example' />
                        </div>

                        <div className={styles['info']}>
                            <p>{id} 최보람</p>
                            <p>안녕하세요</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SearchItem;