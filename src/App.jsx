import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignupAnimation from "./auth/LoginSignupAnimation";
import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails";
import CategoriesPage from "./pages/CategoriesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignupAnimation />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<ServiceDetails />} />
        <Route path="/categories" element={<CategoriesPage />} />

        <Route path="*" element={<LoginSignupAnimation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
