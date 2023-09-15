import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cancle from "./components/Cancle";
import Success from "./components/Success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancle" element={<Cancle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
