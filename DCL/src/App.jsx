import React from "react";
import Count from "./components/Hooks/count/Count";
import Task1 from "./components/Hooks/Tasks/Task1";
import DecreaseCounter from "./components/Hooks/Tasks/DecreaseCounter";
import ResetCounter from "./components/AssignmentTasks/ResetCounter";
import ToggleText from "./components/AssignmentTasks/ToggleText";
import BackgroundColorChange from "./components/Hooks/Tasks/BackgroundColorChange";
import HideandShowPara from "./components/Hooks/Tasks/HideandShowPara";
import StudentNameDisplay from "./components/Hooks/Tasks/StudentNameDisplay";
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Home from "./components/Jun1/Assignment/Home";
// import About from "./components/Jun1/Assignment/About";
// import Contact from "./components/Jun1/Assignment/Contact";
// import Login from "./components/Jun1/Login";
// import Home from "./components/Jun1/Home";
// import SignUp from "./components/Jun1/SignUp";


function App() {
  return (
    <>
     {/* <BrowserRouter>
     <Routes> */}
      {/* <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} /> */}

        {/* <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
     </Routes>
     </BrowserRouter> */}

    <StudentNameDisplay/>
     
    </>
  );
}

export default App;
