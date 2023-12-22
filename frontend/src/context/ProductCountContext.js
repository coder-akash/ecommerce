import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ModeContext } from './ModeContext';
const ProductCountContext = createContext();

const ProductCountProvider = ({ children }) => {
  //const [productsIds,setProductsIds] = useState([])
  const [productCount, setProductCount] = useState(0);
  const {updateMode}  = useContext(ModeContext)
  console.log('Context1')
  try{
  useEffect(()=>{
    axios.post('/getCartList', {'userId':localStorage.getItem('userId')})
    .then(res=>{
        //const ids = ('map',res.data.map(itme=>parseInt(itme.productId)))
        //updateProducts(res.data.map(itme=>parseInt(itme.productId)))
        updateProductCount(res.data.length)

    })
    .catch(err=>{
      console.log('Context',err)
      if (err.message ==='Network Error'){
        updateMode('offline')
      }
    })
    
  },[productCount,updateMode])
  
  
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
  }
  catch (error){
    console.log(error)
  
  }
  
   

  
    

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
