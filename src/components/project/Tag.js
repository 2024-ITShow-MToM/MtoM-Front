import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const TagContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 15px 10px 10px 10px;
  align-items: flex-end;
  justify-content: space-around;
`;

const TagItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  row-gap: 2vw;
  height: 8vw;
`;

const TagItem = styled.p`
  margin: 0;
  font-weight: var(--SemiBold);
  padding-bottom: 5px;
  color: ${props => (props.selected ? 'var(--sub-color)' : '#8C8F8B')};
  
`;

const TagUnderline = styled.hr`
  width: 100%;
  border: none;
  border-top: 2px solid var(--sub-color);
  margin: 0;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`;

export default function Tag({ setTag, projectAll }) {
  const [selectedTag, setSelectedTag] = useState("전체");

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    saveTagData(tag);
  };

  const tags = ["전체", "프론트엔드", "백엔드", "디자인", "기획"];

  const saveTagData = async (tag) => {
    switch (tag) {
      case "전체": projectAll(); break;
      case "프론트엔드": tag='frontend'; break;
      case "백엔드": tag='backend'; break;
      case "디자인": tag='design'; break;
      case "기획": tag='promoter'; break;
    }

    try {
      const response = await axios.get(`${process.env.REACT_APP_HOST}/api/projects/major/${tag}`);
      if (response.status === 200) {
        console.log("프로젝트 필터링 성공");
        setTag(response.data.data);
      } else {
        console.log("프로젝트 필터링 실패", response.status);
      }
    } catch(error) {
      console.error("서버 연결 실패", error);
    }
  }

  return (
    <>
        <div style={{height:"40vw", backgroundColor:"black"}}></div>
        <TagContainer>
          {tags.map((tag) => (
              <TagItemContainer key={tag} onClick={() => handleTagClick(tag)}>
                <TagUnderline visible={selectedTag === tag} />
                <TagItem selected={selectedTag === tag}>{tag}</TagItem>
              </TagItemContainer>
          ))}
        </TagContainer>
    </>
  );
}
