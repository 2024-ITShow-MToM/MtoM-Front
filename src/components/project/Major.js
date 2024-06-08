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
`;

export default function Major({ major }) {
    return (
        <MajorBox majorLength={major.length}>
            {major}
        </MajorBox>
    );
}
