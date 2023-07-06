import React, { useEffect, useState } from "react"
import Header from "../Header"
import MyOrderCart from "../MyOrderCart";
import './index.css'
import axios from "axios";


const data = [
  {
      'rating':'4.6',
      'id':'1',
      'imageUrl': '/products/1.jpg',
      'title': 'TRQ White Shoes',
      'category': 'Shoes',
      'brand': 'AMZ brand Ghz',
      'price': 1999
    },
    {
      'rating':'3.9',
      'id':'2',
      'imageUrl': '/products/2.jpg',
      'title': 'LOREM Watch Black',
      'category': 'Watches',
      'brand': 'Watch Ltd Siyana',
      'price': 2599
    },
    {
      'rating':'3.9',
      'id':'2',
      'imageUrl': '/products/2.jpg',
      'title': 'LOREM Watch Black',
      'category': 'Watches',
      'brand': 'Watch Ltd Siyana',
      'price': 2599
    }
  ]



 function Order() {
  const [products,setProducts] = useState([])

  useEffect(()=>{
    axios.post('/getpurcheseditems',{'userId':localStorage.getItem('userId')})
    .then(res=>{
      console.log(res)
      setProducts(res.data.productData)
    }
    )
  },[])

  
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







    

  
    


