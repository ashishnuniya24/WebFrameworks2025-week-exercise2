import React from "react";
import CourseList from "./CourseList";

const App = ({ courses = [] }) => {
  return (
    <div>
      <CourseList courses={courses} />
    </div>
  );
};

export default App;
