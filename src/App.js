import { Route, Routes } from "react-router-dom";
import "./App.css";
import Basket from "./components/pages/Basket/Basket";
import Form from "./components/pages/Form/Form";
import MainPage from "./components/pages/MainPage/MainPage";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Form />} />
      <Route path='/main' element={<MainPage />} />
      <Route path='/basket' element={<Basket />} />

    </Routes>
      
      

  );
}

export default App;
