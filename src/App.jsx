import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import StartTest from "./Pages/StartTest";
import TestWindow from "./Pages/TestWindow";
import Analysis from "./Pages/Analysis";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/startTest" element={<StartTest />}></Route>
        <Route path="/testWindow" element={<TestWindow />}></Route>
        <Route path="/analysis" element={<Analysis />}></Route>
      </Routes>
    </>
  );
}

export default App;
