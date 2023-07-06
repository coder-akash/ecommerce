import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const ProductCountContext = createContext();

const ProductCountProvider = ({ children }) => {
  //const [productsIds,setProductsIds] = useState([])
  const [productCount, setProductCount] = useState(0);
  useEffect(()=>{
    axios.post('/getCartList', {'userId':localStorage.getItem('userId')})
    .then(res=>{
        //const ids = ('map',res.data.map(itme=>parseInt(itme.productId)))
        //updateProducts(res.data.map(itme=>parseInt(itme.productId)))
        updateProductCount(res.data.length)

    },[productCount])
  })
  
   /*

   useEffect(()=>{
    axios.post('/getCartLists', {'userId':localStorage.getItem('userId')})
    .then(res=>{
        console.log('list',res.data.length)
        const productId = res.data.map(itme=>itme.id)
        updateProductCount(res.data.length)
        setProducts(productId)

    },[])

  */
   

  
    

  const updateProductCount = (c) => {
    //console.log('count',count)
    setProductCount(c);
    
  
  };
  //countdata = countdata+productCount

  //console.log('prcount',productCount)

  return (
    <ProductCountContext.Provider value={{ productCount, updateProductCount }}>
      {children}
    </ProductCountContext.Provider>
  );
};

export { ProductCountContext, ProductCountProvider };
