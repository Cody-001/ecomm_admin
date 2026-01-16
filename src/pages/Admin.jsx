import React from 'react'
import Sidebar from '../components/Sidebar'
import { Routes, Route } from "react-router-dom"
import ListProduct from '../components/ListProduct'
import AddProduct from '../components/Addproduct'

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />

      <Routes>
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="listproduct" element={<ListProduct />} />
      </Routes>

    </div>
  )
}

export default Admin
