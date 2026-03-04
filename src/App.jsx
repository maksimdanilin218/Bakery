import { Routes, Route} from "react-router-dom"
import BlogComponent from "./components/BlogComponent/BlogComponent.jsx"
import HomeComponent from "./components/HomeComponent/HomeComponent.jsx"
import ServiceComponent from "./components/ServiceComponent/ServiceComponent.jsx"
import ContactComponent from "./components/ContactComponent/ContactComponent.jsx"
import Layout from "./components/Layout/Layout.jsx"
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeComponent />}/>
          <Route path="blog" element={<BlogComponent />}/>
          <Route path="service" element={<ServiceComponent />}/>
          <Route path="contact" element={<ContactComponent />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
