import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"; 
import HomePage from "./components/Home/HomePage";
import Contactus from "./components/ContactUs/Contactus";
import Team from "./components/Team/Team";
import Joinus from "./components/JoinUs/Joinus";
import Blog from "./components/blog/Blog";
import AboutUs from "./components/AboutUs/AboutUs";
import JoinUsCTA from "./components/AboutUs/JoinUsCTA";

function App() {
  return (
    <>
      <BrowserRouter>
        <Analytics />
        <SpeedInsights>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact-us" element={<Contactus />} />
            <Route path="/team" element={<Team />} />
            <Route path="/partner-with-us" element={<Joinus />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/the-soil-story" element={<AboutUs />} />
            <Route path="/join-waitlist" element={<JoinUsCTA />} />
          </Routes>
        </SpeedInsights>
      </BrowserRouter>
    </>
  );
}

export default App;
