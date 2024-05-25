import React, { useState, useEffect } from 'react';

import '../../../../styles/common/Style.css';
import styles from '../../../../styles/my/profile/edit/MyProfileSkill.module.css';

import { FiPlus } from 'react-icons/fi';

import ProgressBar from './MyProgressBar';

function MyProfileSkill({ setProfileData, setSkills, skills }) {
    useEffect(() => {
        setProfileData(prevData => ({
            ...prevData,
            skills: skills
        }));
    }, [skills, setProfileData]);

    const handleAddSkill = () => {
        setSkills(prevSkills => [...prevSkills, { skill_name: '', skill_score: 0 }]);
    };
    
    const handleChange = (e, index, field) => {
        const updatedSkills = [...skills];
        updatedSkills[index][field] = e.target.value;
        setSkills(updatedSkills);
    };

    const handleSkillScoreChange = (index, score) => {
        const updatedSkills = [...skills];
        updatedSkills[index].skill_score = score;
        setSkills(updatedSkills);
    };

    return (
        <div className={styles['skill']}>
            <div className={styles['title']}>
                <p>SKILL</p>
            </div>
            {skills.map((skill, index) => (
                <div key={index} className={styles['skillInput']}>
                    <input 
                        value={skill.skill_name || ''}
                        onChange={e => handleChange(e, index, 'skill_name')}
                    />
                    <div className={styles['progressBar']}>
                        <ProgressBar 
                            progress={skill.skill_score || 0}
                            onProgressChange={score => handleSkillScoreChange(index, score)}
                        />
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
}

export default MyProfileSkill;