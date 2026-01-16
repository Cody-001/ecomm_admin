import React from 'react'
import Sidebar from '../components/Sidebar'
import { Routes, Route } from "react-router-dom"
import Addproduct from '../components/Addproduct'
import ListProduct from '../components/ListProduct'

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />

      <Routes>
        <Route path="addproduct" element={<Addproduct />} />
        <Route path="listproduct" element={<ListProduct />} />
      </Routes>

    </div>
  )
}

export default Admin
