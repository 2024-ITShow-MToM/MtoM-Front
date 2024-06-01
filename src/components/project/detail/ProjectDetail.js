import '../../../styles/common/Style.css';
import styles from '../../../styles/project/detail/ProjectDetail.module.css';

import Image from './Image';
import ProjectInfo from './ProjectInfo';
import WriterInfo from './WriterInfo';

function ProjectDetail() {
    return (
        <div className={styles['container']}>
            <div>
                <Image />
                <WriterInfo />
                
            </div>

            <div className={styles['infoContainer']}>
                <ProjectInfo />
                <div className={styles['button']}>
                    <button>프로젝트 신청하기</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail;