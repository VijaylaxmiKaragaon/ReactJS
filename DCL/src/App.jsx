import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./components/Jun1/Assignment/Home";
import About from "./components/Jun1/Assignment/About";
import Contact from "./components/Jun1/Assignment/Contact";
// import Login from "./components/Jun1/Login";
// import Home from "./components/Jun1/Home";
// import SignUp from "./components/Jun1/SignUp";


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      {/* <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} /> */}

        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
     </Routes>
     </BrowserRouter>
     
    </>
  );
}

export default App;
