import { useEffect, useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar/Sidebar";
import CardContainer from "./components/CardContainer";

function App() {
  const [courses, setCourses] = useState([]);
  const [coursesList, setCoursesList] = useState([]);
  const [remainingCredit, setRemainingCredit] = useState(20);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((courses) => setCourses(courses))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (course) => {
    if (coursesList.find((listedCourse) => listedCourse.id === course.id)) {
      toast.warn(`The course named "${course.title}" is already selected!`);
      return;
    }

    if (remainingCredit - course.credit < 0) {
      toast.warn(
        `Can not select this course! Don't have enough credit remaining!!`
      );
      toast.warn(`Total Credit Hour cannot exceed 20 hrs!!!`);
      return;
    }

    setRemainingCredit(remainingCredit - course.credit);
    setCoursesList([...coursesList, { id: course.id, title: course.title }]);
  };

  return (
    <>
      <header>
        <h1 className="text-dark1 font-bold text-3xl text-center mt-12 mb-8">
          Course Registration
        </h1>
      </header>

      <main className="container flex flex-col-reverse lg:flex-row mx-auto gap-6 px-6 pb-6">
        <section className="w-full lg:w-3/4">
          <CardContainer
            courses={courses}
            handleClick={handleClick}
          ></CardContainer>
        </section>
        <section className="w-full lg:w-1/4">
          <Sidebar
            coursesList={coursesList}
            remainingCredit={remainingCredit}
          ></Sidebar>
        </section>
      </main>

      <ToastContainer
        position={window.innerWidth < 1024 ? "top-center" : "bottom-right"}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
