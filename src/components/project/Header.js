import '../../styles/common/Style.css';
import styles from '../../styles/project/Header.module.css';

import { BsChevronLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Header({ title }) {
    const currentUrl = window.location.pathname;
    let pathname =  '';
    switch (currentUrl) {
        case '/project/register' : pathname='/project'; break;
        case '/project/recruitment-period' : pathname='/project/register'; break;
    }
    return (
        <>
            <div className={styles['container']}>
                <Link to={pathname} style={{ color: 'black' }}> <BsChevronLeft /> </Link>
                <div>
                    <p>{title}</p>
                </div>
            </div>
        </>
    )
}

export default Header;