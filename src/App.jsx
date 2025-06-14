// import "./App.css";
// import ClassMap from "./assets/class-map.svg?react";

// function App() {
//   const handleClick = (e) => {
//     // 클릭한 요소에서 가장 가까운 <g> (방 그룹)을 찾음
//     const roomGroup = e.target.closest("g.clickable");
//     if (roomGroup) {
//       console.log("선택한 방 ID:", roomGroup.id);
//     }
//   };

//   return (
//     <div>
//       <ClassMap onClick={handleClick} />
//     </div>
//   );

// }

import React, { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [selectedType, setSelectedType] = useState("");
  const [reason, setReason] = useState("");

  const leaveTypes = ["연가", "병가", "기타", "조퇴", "외출"];

  const handleSubmit = () => {
    if (!selectedType || !reason.trim()) {
      alert("휴가 종류와 사유를 모두 입력하세요.");
      return;
    }

    console.log("제출:", { type: selectedType, reason });
    alert("휴가 신청이 저장되었습니다!");
    setSelectedType("");
    setReason("");
  };

  return (
    <ModalContainer>
      <Title>휴가 신청</Title>

      <TypeButtonGroup>
        {leaveTypes.map((type) => (
          <TypeButton
            key={type}
            isSelected={selectedType === type}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </TypeButton>
        ))}
      </TypeButtonGroup>

      <ReasonInput
        placeholder="휴가 사유를 입력하세요"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />

      <SaveButton onClick={handleSubmit}>저장</SaveButton>
    </ModalContainer>
  );
};

export default App;

// ---------- styled-components ----------

const ModalContainer = styled.div`
  width: 380px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  color: #002c5f;
  text-align: center;
`;

const TypeButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`;

const TypeButton = styled.button`
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid ${({ isSelected }) => (isSelected ? "#002c5f" : "#ccc")};
  background-color: ${({ isSelected }) => (isSelected ? "#002c5f" : "#f5f5f5")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? "#002c5f" : "#e0e0e0"};
  }
`;

const ReasonInput = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  resize: none;
  font-size: 14px;
`;

const SaveButton = styled.button`
  padding: 10px;
  background-color: #002c5f;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
`;
