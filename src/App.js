import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cancel from "./components/Cancel";
import Success from "./components/Success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
