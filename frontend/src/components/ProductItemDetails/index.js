import { useContext, useEffect, useState } from 'react'
// import Cookies from 'js-cookie'
// import Loader from 'react-loader-spinner'
import { BsPlusSquare, BsDashSquare } from 'react-icons/bs'

import Header from '../Header'
import './index.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ProductCountContext } from '../../context/ProductCountContext';

const ProductItemDetails = () => {
  const [productDetails, setProductDetails] = useState('')
  const [quantity, setQuantity] = useState(1)
  let { id } = useParams()

  const {productCount,updateProductCount} = useContext(ProductCountContext)

  useEffect(() => {
    axios.post('/getProductDetails', { id: id }).then((res) => {
      console.log(res.data)
      setProductDetails(res.data.productDetails)
    })
  },[id])

  const onDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  const onIncrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const onClickAddToCart = () => {
    console.log('quant',quantity)
    axios.post('/addToCart',{'id':id,'quantity':quantity,'userId':JSON.parse(localStorage.getItem('userId'))})
    .then(()=>{
      //console.log(productCount)
      updateProductCount(productCount+1)
      //console.log('up',productCount)
    })
  }

  return (
    <>
      <Header />
      <div className="product-item-details-container">
        <div className="product-details-success-view">
          <div className="product-details-container">
            <img src={productDetails.imageUrl} alt="product" className="product-image" />
            <div className="product">
              <h1 className="product-name">{productDetails.title}</h1>
              <p className="price-details">Rs {productDetails.price}/-</p>
              <div className="rating-and-reviews-count">
                <div className="rating-container">
                  <p className="rating">{productDetails.rating}</p>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                    alt="star"
                    className="star"
                  />
                </div>
                <p className="reviews-count">{productDetails.totalReviews} Reviews</p>
              </div>
              <p className="product-description">{productDetails.productDescription}</p>
              <div className="label-value-container">
                <p className="label">Available:</p>
                <p className="value">In Stock</p>
              </div>
              <div className="label-value-container">
                <p className="label">Brand:</p>
                <p className="value">{productDetails.brand}</p>
              </div>
              <hr className="horizontal-line" />
              <div className="quantity-container">
                <button type="button" className="quantity-controller-button" onClick={onDecrementQuantity}>
                  <BsDashSquare className="quantity-controller-icon" />
                </button>
                <p className="quantity">{quantity}</p>
                <button type="button" className="quantity-controller-button" onClick={onIncrementQuantity}>
                  <BsPlusSquare className="quantity-controller-icon" />
                </button>
              </div>
              <button type="button" className="button add-to-cart-btn  gradient-button-2" onClick={onClickAddToCart}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItemDetails
