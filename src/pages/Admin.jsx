import React from 'react';
import Sidebar from '../components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import ListProduct from '../components/ListProduct';
import ProductAdd from '../components/ProductAdd';

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="addproduct" element={<ProductAdd />} />
        <Route path="listproduct" element={<ListProduct />} />
        <Route path="" element={<ProductAdd />} />  {/* Default route inside Admin */}
      </Routes>
    </div>
  );
};

export default Admin;
