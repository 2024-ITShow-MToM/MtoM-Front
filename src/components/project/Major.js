import React from "react";
import styled from "styled-components";

const getWidth = (majorLength) => {
    if (majorLength === 2 || majorLength === 3) {
        return '10vw';
    }
};

const MajorBox = styled.div`
    color: var(--strong-color);
    font-size: 0.7rem;
    border: 1px solid var(--strong-color);
    width: ${({ majorLength }) => getWidth(majorLength)};
    text-align: center;
    padding: 0.5vw;
    border-radius: 5px;
    text-wrap: nowrap;
    ${({ isFull }) => isFull && `
        color: #C9C8C8;
        border-color: #C9C8C8;
    `}
`;

export default function Major({ major, current, total }) {
    const isFull = current === total;

    return (
        <MajorBox majorLength={major.length} isFull={isFull}>
            {major}
        </MajorBox>
    );
}
