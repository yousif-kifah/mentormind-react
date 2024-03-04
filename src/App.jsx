import React, { useState, useEffect } from "react"
import JsonData from "./data/data.json"
import SmoothScroll from "smooth-scroll"
import "./App.css"

import HomePageNew from "./pages/home"
import AboutUsNew from "./pages/about"
import SendUsYourProduct from "./pages/send-us"
import FaqPage from "./pages/faq"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageNew />} index />
        <Route path="/about" element={<AboutUsNew />} />
        <Route path="/product" element={<SendUsYourProduct />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
