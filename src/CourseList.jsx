import React from 'react';
import Course from './Course';

const CourseList = ({ courses }) => {
  return (
    <div className="course-list">
      {courses.map((course, index) => (
        <Course
          key={index}
          name={course.name}
          courseId={course.courseId}
          studentPositions={course.studentPositions}
        />
      ))}
    </div>
  );
};

export default CourseList;
