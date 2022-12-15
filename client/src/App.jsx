import Form from "./components/Form";
import Home from "./components/Home";
import Success from "./components/Success";
import Fail from "./components/Fail";
import {Routes , Route } from 'react-router-dom';

function App(){
  return(
    <Routes>
      <Route path="/" element= {<Home />}></Route>
      <Route path="/form" element= {<Form />}></Route>
      <Route path="/success" element= {<Success />}></Route>
      <Route path="/fail" element= {<Fail />}></Route>
    </Routes>
  )
}

export default App;
