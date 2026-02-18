import { useState } from 'react'
import Head from "./components/Head/Head.jsx"
import Product from "./components/Product/Product.jsx"
import PromoBanner from "./components/PromoBanner/PromoBanner.jsx"
import ProductGallary from "./components/ProductGallery/ProductGallery.jsx"
import AboutUs from "./components/AboutUs/AboutUs.jsx"
import Featured from "./components/Featured/Featured.jsx"
import Footer from "./components/Footer/Footer.jsx"

import './App.css'

function App() {

  return (
    <>
      <Head />
      <Product />
      <AboutUs />
      <ProductGallary />
      <PromoBanner />
      <Featured />
      <Footer />
    </>
  )
}

export default App
