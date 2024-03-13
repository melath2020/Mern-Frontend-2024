import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
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
  SellerActivationPage ,
  ShopLoginPage
} from "./Routes";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { loadSeller, loadUser } from "./redux/actions/user";
import { useSelector } from "react-redux";
import ProtectedRoute from './ProtectedRoute'
import { ShopHomePage } from "./ShopRoutes";
import SellerProtectedRoute from "./SellerProtectedRoute";



const App = () => {
  const {  loading } = useSelector((state) => state.user);
  const { isLoading, isSeller } = useSelector((state) => state.seller);

  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
  
  }, []);
  return (
    <div>
      <>
      {loading || isLoading?null:(<>
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
         <Route path="/shop-login" element={<ShopLoginPage />} />
         <Route path="/shop/:id" element={<SellerProtectedRoute>
          <ShopHomePage />
         </SellerProtectedRoute>
        } />
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
