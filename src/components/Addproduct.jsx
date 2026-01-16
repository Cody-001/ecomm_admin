import { useState } from 'react'
import uploadimg from "../assets/upload_area.svg"

const Addproduct = () => {
    const[image, setImage] = useState(false)
const [product, setproduct] = useState({
    name: "",
    image: "",
    category: "men",
    subcategory:"pants",
    new_price: "",
    old_price: "",
})

    const imagehandler = (e)=>{
        setImage(e.target.files[0])
    }
    const changeHandler = (e)=>{setproduct ({...product, [e.target.name]:e.target.value})}
   const adProduct = async () => {
  console.log(product);
  let responseData;
  let productItem = product;

  // Upload image first
  let formData = new FormData();
  formData.append("product", image);

  await fetch("http://localhost:3000/upload", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  })
    .then((resp) => resp.json())
    .then((data) => {
      responseData = data;
    });

  if (responseData.success) {
    productItem.image = responseData.image_url;


    // Send the product to backend with token
    await fetch("http://localhost:3000/addproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    
      },
      body: JSON.stringify(productItem),
    })
      .then((resp) => resp.json())
      .then((data) => {
        data.success ? alert("Product Added") : alert("Unauthorized or failed");
      });
  }
};

    return (
    <div className='addproduct'>
        <div className="addproduct-itemfield">
            <p>Product Title</p>
            <input value={product.name} onChange={changeHandler} type="text" placeholder='type here' id='name' name='name' />
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
            <p>Price</p>
            <input value={product.old_price} onChange={changeHandler}  type="text" placeholder='type here' id='old_price' name='old_price' />
        </div>
         <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input value={product.new_price} onChange={changeHandler}  type="text" placeholder='type here' id='new_price' name='new_price' />
        </div>
        </div>
       <div className="category-subcategory">
         <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select value={product.category} onChange={changeHandler} name="category" className="add-product-selector">
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kid">Kids</option>
            </select>
            </div>
            <div className="addproduct-itemfield">
            <p>Product Subcategory</p>
            <select value={product.subcategory} onChange={changeHandler} name="subcategory" className="add-product-selector">
                <option value="pants">Pants</option>
                <option value="shirts">Shirts</option>
                <option value="hoodies">Hoodies</option>
            </select>
            </div>
        
       </div>
       <div className="addproduct-itemfield">
           <label htmlFor='file-input'>
            <img src={image?URL.createObjectURL(image):uploadimg} className='addprodut-thumnail' alt="" />
           </label>
           <input onChange={imagehandler} type="file" name="image" id="file-input" hidden/>
        </div>
        <button onClick={()=>{adProduct()}} className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default Addproduct