import React, { useState } from "react";
import Para from "./components/Hooks/StateLifting/Task1/para";
import Btn from "./components/Hooks/StateLifting/Task1/Btn";


function App() {
  const [name,setname] = useState()
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

      {/* <UserInputForm/> */}
      {/* <StyleSheet primary={false}/> */}

      <Para username={name}/>
      <Btn username={name} setusername={setname}/>
    </>
  );
}

export default App;
