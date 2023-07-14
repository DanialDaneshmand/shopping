import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartProvider from "./Context/Cart/CartProvider";
import Layout from "./Layout/Layout";
import CartPage from "./Pages/CartPage/CartPage";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import AuthProvider from "./Context/AuthProvider/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <ToastContainer />
        <Layout>
          <Routes>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/checkOut" element={<CheckoutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
