import '../../../styles/common/Style.css';
import styles from '../../../styles/chat/individual chat/Header.module.css';

import { BsChevronLeft } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";

function Header({ name }) {
    return (
        <>
            <div className={styles['container']}>
                <BsChevronLeft />
                <p>{name}</p>
                <BsThreeDotsVertical />
            </div>
        </>
    )
}

export default Header;