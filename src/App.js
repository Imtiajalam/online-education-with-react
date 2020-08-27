import React,{ useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import fakeCourses from './components/fakedata/fakeCourses';
import Course from './components/course/Course';
import Cart from './components/cart/Cart';



// console.log(addCourse);
function App() {
  const [courses,setCourses] = useState([]);
  const [addCourse,setAddCourse] = useState([]);

  useEffect(()=>{
    setCourses(fakeCourses.courses)
  },[])

  const handleCourse = (course)=>{
    const newCourse = [...addCourse,course]
    setAddCourse(newCourse);
  }
  console.log(addCourse);
  
  return (
    <div className="App">
      <Header></Header>
      <div className="col-md-12 m-auto">
      <div className="row">
          <div className="col-md-9 main-course">
            <h2 className="text-center m-3 bg-primary p-3 rounded">All Courses</h2>
            <Course Courses={courses} handleCourse={handleCourse}></Course>
          </div>
          <div className="col-md-3 added-course">
          <h2 className="text-center m-3 bg-success p-3 rounded">Added Courses</h2>
            <Cart addCourse={addCourse}></Cart>
          </div>
      </div>
      </div>
    </div>
  );
}

export default App;
