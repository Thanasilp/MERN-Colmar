import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { InformationRightDetail } from "./components/InformationRightDetail";
import { CourseDetails } from "./components/CourseDetail";
import { LogIn } from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/information/:slug" element={<InformationRightDetail />} />
        <Route path="/course/:slug" element={<CourseDetails />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
