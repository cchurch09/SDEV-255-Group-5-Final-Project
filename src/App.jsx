import { Header, Footer } from "./resources/Boiler"
import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import { AuthProvider } from "./scripts/auth";
import { CartProvider } from "./scripts/cart";
import About from "./pages/about"
import Schedule from "./pages/schedule"
import SignUp from "./pages/signup"
import ErrorFound from "./pages/error";
import Home from "./pages/home";
import AddCourse from "./pages/addcourse";
import EditCourse from "./pages/editCourse";
import Details from "./pages/details";
import Student from "./pages/student";

function App() {
  return (
    <AuthProvider>
    <CartProvider>
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/signup"
            element={<SignUp />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="schedule/details/:id" element={<Details />} />
          <Route path="schedule/edit/:id" element={<EditCourse />} />
          <Route path="/student" element={<Student />} />
          <Route path="*" element={<ErrorFound/>} />
        </Routes>
      </main>

      <Footer />
    </div>
    </CartProvider>
    </AuthProvider>
  )
}

export default App
