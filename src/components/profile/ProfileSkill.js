import React, { useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/profile/ProfileSkill.module.css';

import { FiPlus } from 'react-icons/fi';

import ProgressBar from './ProgressBar';

const ProfileSkill = () => {
    const [skills, setSkills] = useState([{ id: Date.now(), value: '' }]);

    const handleAddSkill = () => {
        setSkills([...skills, { id: Date.now(), value: '' }]);
    };
    
    const handleChange = (e, id) => {
        const updatedSkills = skills.map(skill => {
            if (skill.id === id) {
            return { ...skill, value: e.target.value };
            }
            return skill;
        });
        setSkills(updatedSkills);
    };

    return (
        <div className={styles['skill']}>
            <div className={styles['title']}>
                <p>SKILL</p>
            </div>
            {skills.map((skill, index) => (
                <div key={skill.id} className={styles['skillInput']}>
                    <input value={skill.value} onChange={e => handleChange(e, skill.id)} />
                    <div className={styles['progressBar']}>
                    <ProgressBar />
                    </div>
                </div>
            ))}

            <hr />
            
            <div className={styles['addPlus']} onClick={handleAddSkill}>
                <FiPlus className={styles['plusIcon']} />
                <p>항목 추가</p>
            </div>
        </div>
    );
};

export default ProfileSkill;