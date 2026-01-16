import Navbar from './components/Navbar'
import { Routes, Route, Navigate } from "react-router-dom"
import Admin from './pages/Admin'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/addproduct" />} />
        <Route path="/*" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
