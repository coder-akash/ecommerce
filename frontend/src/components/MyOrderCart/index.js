import {useState } from 'react'
//import CartItem from '../CartItem'

import { FaStar } from "react-icons/fa"
//import './index.css'
import axios from 'axios'





const MyOrderCart =(props)=> {

    const {ProductData} = props

   const StartGenerate = (select,p_id,i_id) => {
        const [selected, setSelected] = useState(select); 
      
        
        console.log('rating',selected)
        return Array(5)
          .fill()
          .map((item, i) => (
            <Start
              key={i}
              selected={selected > i}
              onSelected={() =>{
                 setSelected(i + 1)
                 axios.post('/updaterating',{id:p_id,itemId:i_id,rating:i+1,userId:localStorage.getItem('userId')})
                 .then(res=>console.log(res))

                }}
            />
          ));
      };
      
      const Start = ({ selected, onSelected }) => {
        return <FaStar color={selected ? "orange" : "gray"} onClick={onSelected} />;
      };
    
    
        return(
            <li className="order-item" key={ProductData.id}>
            <img className="order-product-image" src={ProductData.imageurl} alt={ProductData.title} />
              <div className="order-item-details-container">
                <div className="order-product-title-brand-container">
                    <p className="order-product-title">{ProductData.title}</p>
                    <p className="order-product-brand">by {ProductData.brand}</p>
                    {StartGenerate(ProductData.rating,ProductData.id,ProductData.itemId)}
                  <h6 className="order-product-rating-title">Rate the product now</h6>
                  
                </div>
              </div>
            </li>
        )
    }


export default MyOrderCart
                
                  
          
         
    
 
  
   
    
    
  


