import "./App.css";
import ClassMap from "./assets/class-map.svg?react";

function App() {
  const handleClick = (e) => {
    // 클릭한 요소에서 가장 가까운 <g> (방 그룹)을 찾음
    const roomGroup = e.target.closest("g.clickable");
    if (roomGroup) {
      console.log("선택한 방 ID:", roomGroup.id);
    }
  };

  return (
    <div>
      <ClassMap onClick={handleClick} />
    </div>
  );
}

export default App;
