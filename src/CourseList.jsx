import React from "react";
import Course from "./Course";

const CourseList = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <Course
          key={course.courseId}
          name={course.name}
          courseId={course.courseId}
          studentPositions={course.studentPositions}
        />
      ))}
    </div>
  );
};

export default CourseList;
