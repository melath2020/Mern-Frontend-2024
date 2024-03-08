import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  ProductDetailsPage,
  ProfilePage,
  CheckoutPage,
  ShopCreatePage,
  SellerActivationPage 
} from "./Routes";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { loadUser } from "./redux/actions/user";
import { useSelector } from "react-redux";
import ProtectedRoute from './ProtectedRoute'


const App = () => {
  const {  loading } = useSelector((state) => state.user);
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);
  return (
    <div>
      <>
      {loading?null:(<>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route
            path="/activation/:activation_token"
            element={<ActivationPage />}
          />
          <Route
          path="/seller/activation/:activation_token"
          element={<SellerActivationPage />}
        />
        <Route path='/best-selling' element={<BestSellingPage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/product/:name' element={<ProductDetailsPage />}/>
        <Route path='/events' element={<EventsPage/>}/>
        <Route path='/faq' element={<FAQPage/>}/>
        <Route path='/checkout' element={<ProtectedRoute>
          <CheckoutPage/>
        </ProtectedRoute>}/>
        <Route path='/profile' element={<ProtectedRoute>
          <ProfilePage/>
        </ProtectedRoute>}/>
         {/* shop Routes */}
         <Route path="/shop-create" element={<ShopCreatePage />} />
        </Routes>
      </BrowserRouter>
      </>)}
      </>
   

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default App;
