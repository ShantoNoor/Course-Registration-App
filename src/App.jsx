import { useEffect, useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <h1 className="text-3xl font-bold text-red">Hello world!!!</h1>
      <button
        className="text-lg font-medium bg-blue1 text-white w-full rounded-[4px] px-5 py-2 duration-300 hover:-translate-y-1 hover:shadow-md active:translate-y-[-2px] active:shadow-sm"
        onClick={notify}
      >
        Select
      </button>
      <ToastContainer />

      {count.map((course) => {
        return (
          <div key={course.id}>
            <h5>{course.title}</h5>
            <img src={course.thumbnail} alt="" />
          </div>
        );
      })}
    </>
  );
}

export default App;
