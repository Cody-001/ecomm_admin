import React from 'react'
import { use } from 'react'
import { useState } from 'react'
import cross_icon from '../assets/cross_icon.png'
import { useEffect } from 'react'

const ListProduct = () => {
    const [allproduct, setAllProduct] = useState([])

    const fetchIndo = async()=>{
        await fetch('http://localhost:3000/allproducts')
        .then((resp)=>resp.json())
        .then((data)=>{setAllProduct(data)})
    }

    useEffect(()=>{
        fetchIndo()
    },[])
    const remove_product = async(id)=>{
        await fetch("http://localhost:3000/removeproduct",{
            method: "POST",
             headers: {
                Accept: "application/json",
                 "Content-Type":"application/json"

            },
         body:JSON.stringify({id:id})
            
        }
    )
    await fetchIndo()
    }
  return (
    <div className='listproduct'>
        <h1>ALL PRODUCTS LIST</h1>
        <div className="lisproduct-format lisproduct-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>old price</p>
            <p>new price</p>
            <p>category</p>
            <p>subcategory</p>
            <p>remove</p>
        </div>
        <div className="lisproduct-format  listproduct-all">
            <hr />
            {allproduct.map((product, index)=>{
                return <>
                <div className='lisproduct-format-main '>
                    <img src={product.image} alt=""className='lisproduct-forma-main-image'/>
                    <p>{product.name}</p>
                    <p>{product.old_price}</p>
                    <p>{product.new_price}</p>
                    <p>{product.category}</p>
                    <p>{product.subcategory}</p>
                    <img onClick={()=>{remove_product(product.id)}} className='lisproduct-forma-main-image' src={cross_icon} alt="" />
                    </div>
</>
            })}
        </div>

    </div>
  )
}

export default ListProduct