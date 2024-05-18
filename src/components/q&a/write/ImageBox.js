import React, { useState } from 'react';

import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/write/ImageBox.module.css';

import { GoPlus } from "react-icons/go";

function ImageBox({ setImg }) {
    const [backgroundImage, setBackgroundImage] = useState(null);

    const handleImageSelect = (event) => {
        const selectedFile = event.target.files[0];
        const objectURL = URL.createObjectURL(selectedFile);
        setBackgroundImage(objectURL);
        setImg(selectedFile);
    };

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['background']} style={{backgroundImage: `url(${backgroundImage})`}}>
                    {!backgroundImage && (
                        <label htmlFor="imageInput" className={styles['circle']}>
                            <GoPlus />
                        </label>
                    )}
                </div>
                <input type="file" id="imageInput" accept="image/*" onChange={handleImageSelect} style={{display: 'none'}} />
            </div>
        </>
    )
}

export default ImageBox;