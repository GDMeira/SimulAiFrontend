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
import { pages } from './routes/routes'
import ColorContext from './contexts/colors'


export default function App() {
  const colors = { color1: '#F2F9FF', color2: '#76D423', color3: '#FCF20C' }

  return (
    <ColorContext.Provider value={colors}>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path={pages.aboutUs} element={<AboutUs />} />
          <Route path={pages.customTests} element={<CustomTestPage />} />
          <Route path={pages.home} element={<HomePage />} />
          <Route path={pages.signIn} element={<LoginPage />} />
          <Route path={pages.news} element={<NewsPage />} />
          <Route path={pages.tests} element={<TestsPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ColorContext.Provider>
  )
}

