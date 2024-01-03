import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="min-h-screen text-base bg-white overscroll-contain dark:bg-slate-900 dark:text-slate-300 md:text-xl">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
