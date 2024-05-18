import React, { useState, useRef } from 'react';

import '../../../styles/common/Style.css';
import styles from '../../../styles/q&a/write/ImageBox.module.css';

import { GoPlus } from "react-icons/go";

function ImageBox({ setImg }) {
    const [backgroundImage, setBackgroundImage] = useState(null);
    const inputRef = useRef(null);

    const handleImageSelect = (event) => {
        const selectedFile = event.target.files[0];
        const objectURL = URL.createObjectURL(selectedFile);
        setBackgroundImage(objectURL);
        setImg(selectedFile);
    };

    const handleClickImage = () => {
        inputRef.current.click();
    };

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['background']} style={{backgroundImage: `url(${backgroundImage})`}} onClick={handleClickImage}>
                    {!backgroundImage && (
                        <label htmlFor="imageInput" className={styles['circle']}>
                            <GoPlus />
                        </label>
                    )}
                </div>
                <input ref={inputRef} type="file" id="imageInput" accept="image/*" onChange={handleImageSelect} style={{display: 'none'}} />
            </div>
        </>
    )
}

export default ImageBox;