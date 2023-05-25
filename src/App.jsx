import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage/HomePage'
import AboutUs from './pages/AboutUs/AboutUs'
import CustomTestPage from './pages/CustomTestsPage/CustomTestPage'
import LoginPage from './pages/LoginPage/LoginPage'
import NewsPage from './pages/NewsPage/NewsPage'
import TestsPage from './pages/TestsPage/TestsPage'




export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/CustomTestPage' element={<CustomTestPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/NewsPage' element={<NewsPage />} />
        <Route path='/TestsPage' element={<TestsPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>)
}

