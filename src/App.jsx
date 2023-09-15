import { useEffect, useState } from "react";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar/Sidebar";
import CardContainer from "./components/CardContainer";

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((courses) => setCourses(courses))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <header>
        <h1 className="text-dark1 font-bold text-3xl text-center mt-12 mb-8">
          Course Registration
        </h1>
      </header>

      <main className="container flex flex-col-reverse lg:flex-row mx-auto gap-6 px-6 pb-6">
        <section className="w-full lg:w-3/4">
          <CardContainer courses={courses}></CardContainer>
        </section>
        <section className="w-full lg:w-1/4">
          <Sidebar></Sidebar>
        </section>
      </main>

      <ToastContainer /> 
    </>
  );
}

export default App;
