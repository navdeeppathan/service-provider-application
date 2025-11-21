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
import ProtectedRoute from "./middleware/ProtectedRoute";
import PublicRoute from "./middleware/PublicRoute";
import AdminCategory from "./admin/AdminCategory";
import CheckoutLayout from "./pages/Checkout/CheckoutLayout";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Profile/Dashboard";
import Orders from "./pages/Profile/Orders";
import Wishlist from "./pages/Profile/Wishlist";
import PaymentMethods from "./pages/Profile/PaymentMethods";
import Addresses from "./pages/Profile/Addresses";
import Reviews from "./pages/Profile/Reviews";
import Help from "./pages/Profile/Help";
import ServiceCategory from "./pages/ServiceCategory";
import ServiceProviderList from "./pages/ServiceProviderList";
import Abouts from "./pages/Abouts";
import Support from "./pages/Support";
import Termandcondition from "./pages/Termandcondition";
import AllPolicy from "./pages/AllPolicy";
import ServiceProviderListAll from "./pages/ServiceProviderListAll";
import Successpage from "./pages/Checkout/Successpage";

function App() {
  return (
   <BrowserRouter>
  <Routes>
    {/* PUBLIC ROUTES */}
   <Route path="/" element={<Home />} />


    <Route path="/login" element={<LoginSignupAnimation />} />
    <Route path="/details" element={<ServiceDetails />} />
    <Route path="/categories" element={<CategoriesPage />} />
    <Route path="/abouts" element={<Abouts />} />
    <Route path="/support" element={<Support />} />
    <Route path="/servicecategories" element={<ServiceCategory />} />
    <Route path="/termandcondition" element={<Termandcondition />} />
    <Route path="/privecepolicy" element={<AllPolicy />} />
    <Route path="/serviceproviderlist/:id" element={<ServiceProviderList />} />
    <Route path="/serviceproviderlistall" element={<ServiceProviderListAll />} />
    <Route path="/checkout" element={<CheckoutLayout />} />
    <Route path="/success" element={<Successpage />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/profile/dashboard" element={<Dashboard/>} />
    <Route path="/profile/orders" element={<Orders/>} />
    <Route path="/profile/wishlist" element={<Wishlist/>} />
    <Route path="/profile/payments" element={<PaymentMethods/>} />
    <Route path="/profile/addresses" element={<Addresses/>} />
    <Route path="/profile/reviews" element={<Reviews/>} />
    <Route path="/profile/help" element={<Help/>} />

    
    {/* ADMIN ROUTES */}
    <Route
      path="/admindashboard"
      element={
        <ProtectedRoute role="admin">
          <AdminDashboard />
        </ProtectedRoute>
      }
    >
      <Route index element={<Admin />} />
      <Route path="profile" element={<AdminProfile />} />
      <Route path="users" element={<AdminUsers />} />
      <Route path="providers" element={<AdminProviders />} />
      <Route path="bookings" element={<AdminBookings />} />
      <Route path="payments" element={<AdminPayments />} />
      <Route path="category" element={<AdminCategory />} />
     
    </Route>

    {/* PROVIDER ROUTES */}
    <Route
      path="/providerdashboard"
      element={
        <ProtectedRoute role="provider">
          <ProviderDashboard />
        </ProtectedRoute>
      }
    >
      <Route index element={<Provider />} />
      <Route path="profile" element={<ProviderProfile />} />
      <Route path="users" element={<ProviderUsers />} />
      <Route path="providers" element={<ProviderProviders />} />
      <Route path="bookings" element={<ProviderBookings />} />
      <Route path="payments" element={<ProviderPayments />} />
    </Route>

    {/* DEFAULT */}
    <Route path="*" element={<LoginSignupAnimation />} />
  </Routes>
</BrowserRouter>

  );
}

export default App;
