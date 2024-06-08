import React, { useState } from "react";
import Major from "./Major";

export default function MajorContainer() {
  const [selectedMajor, setSelectedMajor] = useState(null);

  const majors = ["프론트엔드", "백엔드", "디자인", "기획"];

  return (
    <div style={{ display: "flex", gap: "5px", flexWrap: "nowrap" }}>
      {majors.map((major) => (
        <Major
          key={major}
          major={major}
          active={selectedMajor === major}
          onClick={() => setSelectedMajor(major)}
        />
      ))}
    </div>
  );
}
