import './index.css'
//import CartContext from '../../context/CartContext'
import React ,{useContext} from 'react'
import axios from 'axios';

import { ProductCountContext } from '../../context/ProductCountContext';
import { Link } from 'react-router-dom';


const ProductCard = (props)=>{
  const {productData} = props
  //console.log(props)
  const {productCount,updateProductCount} = useContext(ProductCountContext)

 
  
  
  const handleAddToCart = (id) => {
    //console.log(id)
    axios.post('/addToCart',{'id':id,'quantity':1,'userId':JSON.parse(localStorage.getItem('userId'))})
    .then(()=>{
      //console.log(productCount)
      updateProductCount(productCount+1)
      //console.log('up',productCount)
    })
  };  
    return(
      <div className="products-container">
        <Link to={`/products/${productData.id}`} className="link-item">
      <li className="product-item">
        <img src={productData.imageUrl} alt="product" className="thumbnail" />
        <h1 className="title">{productData.title}</h1>
        <div className="rating-container">
            <p className="rating">{productData.rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        <p className="brand">by {productData.brand}</p>
        
        <div className="product-details">
          <p className="price">Rs {productData.price}/-</p>

         </div>
      </li>
      </Link>
      <button className='addtocartBtn gradient-button-2' onClick={()=>handleAddToCart(productData.id)}>ADD TO CART</button>
      </div>
    )
  }

export default ProductCard







/*
class ProductCard extends Component{
  handleAddToCart = () => {
    console.log(this.props)
    const {productData} = this.props
    let userDetails = JSON.parse(localStorage.getItem('userId'));
    

    axios.post('http://localhost:8081/addToCart',{'id':productData.id,'quantity':1,'userId':userDetails})
    .then(res=>{console.log(res.data)

    })
  };



  render(){
    
    const {productData} = this.props
    //const {id,title, brand, imageUrl, rating, price} = productData
    
     
    return(
    
      <li className="product-item">
        <img src={productData.imageUrl} alt="product" className="thumbnail" />
        <h1 className="title">{productData.title}</h1>
        <div className="rating-container">
            <p className="rating">{productData.rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        <p className="brand">by {productData.brand}</p>
        
        <div className="product-details">
          <p className="price">Rs {productData.price}/-</p>
          
          <button className='addtocartBtn' onClick={this.handleAddToCart}>ADD TO CART</button>
        </div>
      </li>
    )
  }
}
//


/*
// //const ProductCard = props => {
//   const [state,setState] = useState({
//     selectedProductData: {},
//     //similarProductsData: [],
//     //apiStatus: apiStatusConstants.initial,
//     quantity: 1,
//   })

state = {
  selectedProductData: {
    title: 'Product 1',
    brand: 'Brand Name',
    id: 1001,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg',
    price: 760,
    quantity: 5,
  },
  quantity: 1,
}



onClickAddToCart=() => {
  const { addCartItem } = useContext(CartContext);
  console.log(this.selectedProductData)
  // <CartContext.Consumer>
    
  //   {value => {
  //     //this.setState({selectedProductData:{id,title, brand, imageUrl, rating, price}})
  //     const {selectedProductData, quantity} = this.state
  //     const {addCartItem} = value
  //     //this.setState({selectedProductData:{id,title, brand, imageUrl, rating, price}})
  //     addCartItem({...selectedProductData, quantity})

  //  }}
  // </CartContext.Consumer>
  
   
}
*/

/*

const ProductCard = (props) =>{

  const {productData} = props
  console.log(productData)

  const handleAddToCart = (id) => {
    
    
    let userDetails = JSON.parse(localStorage.getItem('userId'));
    

    axios.post('http://localhost:8081/addToCart',{'id':id,'quantity':1,'userId':userDetails})
    .then(res=>{console.log(res.data)

    })
  };



 
    
    
    //const {id,title, brand, imageUrl, rating, price} = productData
    
     
    return(
      <>
      <li className="product-item">
        <img src={productData.imageUrl} alt="product" className="thumbnail" />
        <h1 className="title">{productData.title}</h1>
        <div className="rating-container">
            <p className="rating">{productData.rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        <p className="brand">by {productData.brand}</p>
        
        <div className="product-details">
          <p className="price">Rs {productData.price}/-</p>
          
          <button className='addtocartBtn' onClick={handleAddToCart(productData.id)}>ADD TO CART</button>
        </div>
      </li>
      </>
    )
}
export default ProductCard
*/

  

