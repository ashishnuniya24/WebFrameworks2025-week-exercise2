import React from "react";

const Course = ({ name, courseId, studentPositions }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{courseId}</p>
      <p>Student Positions: {studentPositions}</p>
    </div>
  );
};

export default Course;
