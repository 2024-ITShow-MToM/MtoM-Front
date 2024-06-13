import React, { useState } from "react";
import Major from "./Major";

export default function MajorContainer({ data }) {
  const [selectedMajor, setSelectedMajor] = useState(null);

  const majors = [];
  if (data.frontend_personnel > 0) majors.push("프론트엔드");
  if (data.backend_personnel > 0) majors.push("백엔드");
  if (data.designer_personnel > 0) majors.push("디자인");
  if (data.promoter_personnel > 0) majors.push("기획");

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
