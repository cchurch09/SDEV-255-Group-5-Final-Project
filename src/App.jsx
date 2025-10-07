import { Header, Footer } from "./resources/Boiler"
import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import About from "./pages/about"
import Schedule from "./pages/schedule"
import SignUp from "./pages/signup"
import errorFound from "./pages/error";
import Home from "./pages/home";
import AddCourse from "./pages/addcourse";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/signup"
            element={<SignUp />}
          />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="*" element={<errorFound/>} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
