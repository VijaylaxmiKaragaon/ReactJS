import React, { lazy,Suspense } from "react";
import Lazzy from "./components/Hooks/LazyLoading/Lazzy";
import UseMemo from "./components/Hooks/UseMemo/UseMemo";
// import Para from "./components/Hooks/StateLifting/Task1/para";
// import Btn from "./components/Hooks/StateLifting/Task1/Btn";

const Lazyy=lazy(()=>{
  import('.//components/Hooks/LazyLoading/Lazzy')
})
function App() {
  // const [name,setname] = useState()
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

      {/* <Para username={name}/>
      <Btn username={name} setusername={setname}/> */}

      {/* <Suspense fallback={<h1>Loading.....</h1>}>
      <Lazzy/>
      </Suspense> */}

      <UseMemo/>
    </>
  );
}

export default App;
