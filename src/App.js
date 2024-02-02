import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage,SignupPage,ActivationPage,HomePage,ProductsPage,BestSellingPage,EventsPage, FAQPage,ProductDetailsPage,ProfilePage } from './Routes'
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
