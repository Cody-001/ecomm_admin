import Navbar from './components/Navbar';
import { Routes, Route, Navigate } from "react-router-dom";
import Admin from './pages/Admin';
import AddProduct from './components/AddProduct';
import ListProduct from './components/ListProduct';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/*" element={<Admin />} />
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
      </Routes>
    </>
  )
}
export default App;
