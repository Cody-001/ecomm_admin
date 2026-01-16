import Navbar from './components/Navbar';
import { Routes, Route, Navigate } from "react-router-dom";
import Admin from './pages/Admin';
import ListProduct from './components/ListProduct';
import ProductAdd from './components/ProductAdd';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/addproduct" />} />
        <Route path="/" element={<Admin />}/>
        <Route path="/*" element={<Admin />} />
      </Routes>
    </>
  )
}
export default App;
