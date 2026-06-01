import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from "./components/Jun1/Login";
import Home from "./components/Jun1/Home";
import SignUp from "./components/Jun1/SignUp";


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
     </Routes>
     </BrowserRouter>
     
    </>
  );
}

export default App;
