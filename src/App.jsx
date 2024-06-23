import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Contactus from "./components/ContactUs/Contactus";
import Team from "./components/Team/Team";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
