import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from "./components/Jun1/Login";


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route>
        <Login/>
      </Route>
     </Routes>
     </BrowserRouter>
     
    </>
  );
}

export default App;
