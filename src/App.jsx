import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignupAnimation from "./auth/LoginSignupAnimation";
import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails";
import CategoriesPage from "./pages/CategoriesPage";
import AdminDashboard from "./admin/AdminDashboard";
import Admin from "./admin/Admin";
import AdminProfile from "./admin/AdminProfile";
import AdminUsers from "./admin/AdminUsers";
import AdminProviders from "./admin/AdminProviders";
import AdminBookings from "./admin/AdminBookings";
import AdminPayments from "./admin/AdminPayments";
import ProviderDashboard from "./provider/ProviderDashboard";
import Provider from "./provider/Provider";
import ProviderProfile from "./provider/ProviderProfile";
import ProviderUsers from "./provider/ProviderUsers";
import ProviderProviders from "./provider/ProviderProviders";
import ProviderBookings from "./provider/ProviderBookings";
import ProviderPayments from "./provider/ProviderPayments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignupAnimation />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<ServiceDetails />} />
        <Route path="/categories" element={<CategoriesPage />} />

        <Route path="/admindashboard" element={<AdminDashboard />}>
          <Route index element={<Admin />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="providers" element={<AdminProviders />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="payments" element={<AdminPayments />} />
        </Route>
        <Route path="/providerdashboard" element={<ProviderDashboard />}>
          <Route index element={<Provider />} />
          <Route path="profile" element={<ProviderProfile />} />
          <Route path="users" element={<ProviderUsers />} />
          <Route path="providers" element={<ProviderProviders />} />
          <Route path="bookings" element={<ProviderBookings />} />
          <Route path="payments" element={<ProviderPayments />} />
        </Route>

        <Route path="*" element={<LoginSignupAnimation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
