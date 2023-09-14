import { useEffect, useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar/Sidebar";
import CardContainer from "./components/CardContainer";

function App() {
  const [count, setCount] = useState([]);
  const notify = () => {
    toast("Wow so easy !");
    toast("Wow so easy !");
    toast("Wow so easy !");
  };

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((courses) => setCount(courses))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <header>
        <h1 className="text-dark1 font-bold text-3xl text-center mt-12 mb-8">
          Course Registration
        </h1>
      </header>

      <main className="container flex flex-col lg:flex-row mx-auto gap-6 px-3 pb-32">
        <section className="w-full lg:w-[75%]">
          <CardContainer></CardContainer>
        </section>
        <section className="w-full lg:w-[25%]">
          <Sidebar></Sidebar>
        </section>
      </main>

      {/* <button
        className="text-lg font-medium bg-blue1 text-white w-full rounded-[4px] px-5 py-2 duration-300 hover:-translate-y-1 hover:shadow-md active:translate-y-[-2px] active:shadow-sm"
        onClick={notify}
      >
        Select
      </button>
      <ToastContainer /> */}

      {/* {count.map((course) => {
        return (
          <div key={course.id}>
            <h5>{course.title}</h5>
            <img src={course.thumbnail} alt="" />
          </div>
        );
      })} */}
    </>
  );
}

export default App;
