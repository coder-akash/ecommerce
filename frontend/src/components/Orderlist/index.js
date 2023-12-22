import React, { useEffect, useState } from "react"
import Header from "../Header"
import MyOrderCart from "../MyOrderCart";
import './index.css'
import axios from "axios";






 function Order() {
  const [products,setProducts] = useState([])

  useEffect(()=>{
    axios.post('/getpurcheseditems',{'userId':localStorage.getItem('userId')})
    .then(res=>{
      console.log(res)
      if (res.data.productData !== undefined){
      setProducts(res.data.productData)
    }
    }
    )
  },[])
console.log(products)
  
  return (
    
      <>
      <Header/>
      
      <h1 className="order-heading">My Orders</h1>
      <ul className="order-list">
      <ul className="order-list">
          {products.map(product => (
            <MyOrderCart ProductData={product} key={product.id} />
          ))}
      </ul>
         </ul>
        
      </>
  )
}

export default Order;







    

  
    


