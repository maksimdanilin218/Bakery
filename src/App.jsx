import { Routes, Route} from "react-router-dom"
import BlogComponent from "./components/BlogComponent/BlogComponent.jsx"
import HomeComponent from "./components/HomeComponent/HomeComponent.jsx"
import Layout from "./components/Layout/Layout.jsx"
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeComponent />}/>
          <Route path="/blog" element={<BlogComponent />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
