import { useState } from "react";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0);
  const notify = () => {
    toast("Wow so easy !");
    toast("Wow so easy !");
    toast("Wow so easy !");
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-red">Hello world!</h1>
      <button className="btn btn-secondary text-white bg-purple1 w-full hover:-translate-y-1 duration-300 hover:shadow-lg" onClick={notify}>Notify !</button>
      <ToastContainer />  
    </>
  );
}

export default App;
