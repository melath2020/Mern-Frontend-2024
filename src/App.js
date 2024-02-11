import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage,SignupPage,ActivationPage,HomePage,ProductsPage,BestSellingPage,EventsPage, FAQPage,ProductDetailsPage,ProfilePage } from './Routes'
import "./App.css";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/sign-up' element={<SignupPage/>}/>
    <Route path='/activation/:activation_token' element={<ActivationPage/>}/>
    </Routes>
    </BrowserRouter>

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
  )
}

export default App
