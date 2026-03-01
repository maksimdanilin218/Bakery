import Footer from "./components/Footer/Footer.jsx"
import { Routes, Route} from "react-router-dom"
import MenuComponent from "./components/MenuComponent/MenuComponent.jsx"
import BlogComponent from "./components/BlogComponent/BlogComponent.jsx"
import HomeComponent from "./components/HomeComponent/HomeComponent.jsx"

import './App.css'

function App() {

  return (
    <>
      <MenuComponent />
      <Routes>
        <Route path="/home" element={<HomeComponent />}/>
        <Route path="/blog" element={<BlogComponent />}/>
      </Routes>
      {/* <HomeComponent /> */}
      {/* <BlogComponent /> */}
      <Footer />
    </>
  )
}

export default App
