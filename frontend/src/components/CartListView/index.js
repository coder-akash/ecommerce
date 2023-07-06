import { useContext, useEffect, useState } from 'react'
//import CartItem from '../CartItem'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import './index.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ProductCountContext } from '../../context/ProductCountContext';


const CartListView = () => {
  const [addToCartList, setAddToCartList] = useState([])
  const {productCount,updateProductCount} = useContext(ProductCountContext)

  const onDeleteCartItem = (id) => {
    axios.post('/deleteCartItme', {'id':parseInt(id),'userId':localStorage.getItem('userId')})
    .then(()=>{
      updateProductCount(productCount-1)
      //console.log('len',addToCartList.length)
      if(addToCartList.length===1){
        //console.log('j')
        setAddToCartList([])
      }
      //getAddToCardData()
      else{
      getAddToCardData()
      }
      
    })
      //let filteredArray = addToCartList.filter(item => item.id !== id)

      //setAddToCartList(filteredArray);
  }

  const onDecrementCartItem = (id,quant) => {
    if(quant===1){
      onDeleteCartItem(id)
    }
    else{
      //console.log(typeof(quant))
      quant= quant-1
    axios.post('/decrementCartItme', {'id':parseInt(id),'quantity':quant,'userId':localStorage.getItem('userId')})
    .then(()=>{
      // console.log('data',state.addToCartList.filter(item => item.id === id).map(item => ({...item,quantity : quant})))})
      // let newArray = (state.addToCartList.filter(item => item.id === id)).map(item => ({...item,quantity : quant}))//state.addToCartList.map(item => ({...item,quantity : quant}))
      // newArray= [...newArray,...state.addToCartList.filter(item => item.id !== id)]
      // setState({addToCartList: newArray});
      getAddToCardData()
    })
    
    }
    
  }

  const onIncremanetCartItem = (id,quant) => {
    
    //console.log(typeof(quant))
    quant= quant+1
    axios.post('/incrementCartItme', {'id':parseInt(id),'quantity':quant,'userId':localStorage.getItem('userId')})
    .then(()=>{
      // console.log(res)})
      // //let newArray = state.addToCartList.map(item => ({...item,quantity : quant}))
      // let newArray = (state.addToCartList.filter(item => item.id === id)).map(item => ({...item,quantity : quant}))//state.addToCartList.map(item => ({...item,quantity : quant}))
      // newArray= [...newArray,...state.addToCartList.filter(item => item.id !== id)]
      // setState({addToCartList: newArray});
      getAddToCardData()
    })
    
  }
  

  useEffect(()=>{
    getAddToCardData()
  },[])

  const getAddToCardData=()=>{
    let userDetails = JSON.parse(localStorage.getItem('userId'));
    //console.log(userDetails)
    axios.post('http://localhost:8081/getCartList',{'userId':userDetails})
    .then(res=>{console.log(res.data)
      //let userDetails = JSON.parse(localStorage.getItem('userId'));
      //console.log(userDetails)
      if(res.data[0]!==undefined){

      setAddToCartList(res.data)
      }

    })

  }
    let sum =0
    //updateProductCount(addToCartList.length)
   
    return(
      
      <>
      
      {addToCartList.length !== 0 &&
      <>
      <h1 className="cart-heading">My Cart</h1>
      <ul className="cart-list">
        {addToCartList.map(eachCartItem => {
          sum=sum+(eachCartItem.price * eachCartItem.quantity)
          return(
          //<CartItem key={eachCartItem.id} cartItemDetails={eachCartItem}  getAddToCardData={getAddToCardData} />
            <li className="cart-item" key={eachCartItem.id}>
              <img className="cart-product-image" src={eachCartItem.imageUrl} alt={eachCartItem.title} />
              <div className="cart-item-details-container">
                <div className="cart-product-title-brand-container">
                  <p className="cart-product-title">{eachCartItem.title}</p>
                  <p className="cart-product-brand">by {eachCartItem.brand}</p>
                </div>
                <div className="cart-quantity-container">
                  <button type="button" className="quantity-controller-button" onClick={() =>onDecrementCartItem(eachCartItem.id,parseInt(eachCartItem.quantity))}>
                    <BsDashSquare color="#52606D" size={12} />
                  </button>
                  <p className="cart-quantity">{parseInt(eachCartItem.quantity)}</p>
                  <button type="button" className="quantity-controller-button" onClick={() =>onIncremanetCartItem(eachCartItem.id,parseInt(eachCartItem.quantity))}>
                    <BsPlusSquare color="#52606D" size={12} />
                  </button>
                </div>
                <div className="total-price-delete-container">
                  <p className="cart-total-price">Rs {eachCartItem.price * eachCartItem.quantity}/-</p>
                  <button
                    className="remove-button"
                    type="button"
                    onClick={() =>onDeleteCartItem(eachCartItem.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <button
                className="delete-button"
                type="button"
                onClick={() =>onDeleteCartItem(eachCartItem.id)}
                
              >
                <AiFillCloseCircle color="#616E7C" size={20} />
              </button>
            </li>
            )}
          
            )}
            
        <div className="order-checkout">
            <p>Order Summary</p>
            <span className="item-count">No. of Items: {addToCartList.length}</span>
            <span className="total-price">Total Price: Rs {sum}/-</span>
            <Link to='/checkout'>
            <button className="checkout-button" >Checkout</button>
            </Link>
        </div>
      </ul>
    </>
  }
  
  

  {!addToCartList.length &&

<div className="cart-empty-view-container">
<img
  src="emptycart.gif"
  className="cart-empty-image"
  alt="cart empty"
/>
<h1 className="cart-empty-heading">Your Cart Is Empty</h1>

<Link to="/products">
  <button type="button" className="shop-now-btn">
    Shop Now
  </button>
</Link>
</div>
  
  }
  </>
    
    )
  }


export default CartListView




/*
class CartListView extends Component {
  state = {addToCartList:[],dispalyCheckout:true
    ,price:0,emptyCart:true}


  onCheckout = () =>{
    setState(prevState=>{
      return {dispalyCheckout: !prevState.dispalyCheckout}
    })
    //setState({price:sum,dispalyCheckout:false})
    
   
  }

  onDeleteCartItem = (id) => {

    axios.post('/deleteCartItme', {'id':parseInt(id),'userId':localStorage.getItem('userId')})
    .then(()=>{
      //console.log(res)
      //getAddToCardData()
      
    })
    
      let filteredArray = state.addToCartList.filter(item => item.id !== id)

      setState({addToCartList: filteredArray});
    
  }

  onDecrementCartItem = (id,quant) => {
    if(quant===1){
      onDeleteCartItem(id)
    }
    else{
      console.log(typeof(quant))
      quant= quant-1
    axios.post('/decrementCartItme', {'id':parseInt(id),'quantity':quant,'userId':localStorage.getItem('userId')})
    .then(()=>{
      // console.log('data',state.addToCartList.filter(item => item.id === id).map(item => ({...item,quantity : quant})))})
      // let newArray = (state.addToCartList.filter(item => item.id === id)).map(item => ({...item,quantity : quant}))//state.addToCartList.map(item => ({...item,quantity : quant}))
      // newArray= [...newArray,...state.addToCartList.filter(item => item.id !== id)]
      // setState({addToCartList: newArray});
      getAddToCardData()
    })
    
    }
    
  }

  onIncremanetCartItem = (id,quant) => {
    
    console.log(typeof(quant))
    quant= quant+1
    axios.post('/incrementCartItme', {'id':parseInt(id),'quantity':quant,'userId':localStorage.getItem('userId')})
    .then(res=>{
      // console.log(res)})
      // //let newArray = state.addToCartList.map(item => ({...item,quantity : quant}))
      // let newArray = (state.addToCartList.filter(item => item.id === id)).map(item => ({...item,quantity : quant}))//state.addToCartList.map(item => ({...item,quantity : quant}))
      // newArray= [...newArray,...state.addToCartList.filter(item => item.id !== id)]
      // setState({addToCartList: newArray});
      getAddToCardData()
    })
    
  }

  componentDidMount(){
    getAddToCardData()
  }

  getAddToCardData(){
    let userDetails = JSON.parse(localStorage.getItem('userId'));
    console.log(userDetails)
    axios.post('http://localhost:8081/getCartList',{'userId':userDetails})
    .then(res=>{console.log(res.data)
      //let userDetails = JSON.parse(localStorage.getItem('userId'));
      //console.log(userDetails)
      if(res.data[0]!==undefined){

      setState({addToCartList:res.data})
      }

    })

  }

  
  render(){
    
    let sum =0
    const {addToCartList,dispalyCheckout} = state
    //console.log(addToCartList)
    
    return(
      
      <>
      
      {addToCartList.length !== 0 &&
      <>
      <h1 className="cart-heading">My Cart</h1>
      <ul className="cart-list">
        {addToCartList.map(eachCartItem => {
          sum=sum+(eachCartItem.price * eachCartItem.quantity)
          return(
          //<CartItem key={eachCartItem.id} cartItemDetails={eachCartItem}  getAddToCardData={getAddToCardData} />
            <li className="cart-item" key={eachCartItem.id}>
              <img className="cart-product-image" src={eachCartItem.imageUrl} alt={eachCartItem.title} />
              <div className="cart-item-details-container">
                <div className="cart-product-title-brand-container">
                  <p className="cart-product-title">{eachCartItem.title}</p>
                  <p className="cart-product-brand">by {eachCartItem.brand}</p>
                </div>
                <div className="cart-quantity-container">
                  <button type="button" className="quantity-controller-button" onClick={() =>onDecrementCartItem(eachCartItem.id,parseInt(eachCartItem.quantity))}>
                    <BsDashSquare color="#52606D" size={12} />
                  </button>
                  <p className="cart-quantity">{parseInt(eachCartItem.quantity)}</p>
                  <button type="button" className="quantity-controller-button" onClick={() =>onIncremanetCartItem(eachCartItem.id,parseInt(eachCartItem.quantity))}>
                    <BsPlusSquare color="#52606D" size={12} />
                  </button>
                </div>
                <div className="total-price-delete-container">
                  <p className="cart-total-price">Rs {eachCartItem.price * eachCartItem.quantity}/-</p>
                  <button
                    className="remove-button"
                    type="button"
                    onClick={() =>onDeleteCartItem(eachCartItem.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <button
                className="delete-button"
                type="button"
                onClick={() =>onDeleteCartItem(eachCartItem.id)}
                
              >
                <AiFillCloseCircle color="#616E7C" size={20} />
              </button>
            </li>
            )}
          
            )}
            
        <div class="order-checkout">
            <p>Order Summary</p>
            <span class="item-count">No. of Items: {addToCartList.length}</span>
            <span class="total-price">Total Price: Rs {sum}/-</span>
            <Link to='/checkout'>
            <button class="checkout-button" >Checkout</button>
            </Link>
        </div>
      </ul>
    </>
  }
  
  

  {!addToCartList.length &&

<div className="cart-empty-view-container">
<img
  src="emptycart.gif"
  className="cart-empty-image"
  alt="cart empty"
/>
<h1 className="cart-empty-heading">Your Cart Is Empty</h1>

<Link to="/products">
  <button type="button" className="shop-now-btn">
    Shop Now
  </button>
</Link>
</div>
  
  }
  </>
    
    )
  }
}

export default CartListView


/*
state = {addToCartList:[]}

  componentDidMount(){
    getAddToCardData()
  }

  getAddToCardData(){
    let userDetails = JSON.parse(localStorage.getItem('userId'));
    axios.get('http://localhost:8081/getCartList',{'userId':userDetails})
    .then(res=>{console.log(res.data)
      //let userDetails = JSON.parse(localStorage.getItem('userId'));
      //console.log(userDetails)

      setState({addToCartList:[res.data]})

    })

  }


*/



