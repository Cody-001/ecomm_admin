import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import Admin from './pages/Admin'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Admin/>} />
        <Route path="/*" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
