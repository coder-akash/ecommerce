import AllProductsSection from '../AllProductsSection'
//import PrimeDealsSection from '../PrimeDealsSection'

import Header from '../Header'
import Slideshow from '../SlideShow'
import { useContext } from 'react'
import { ModeContext } from '../../context/ModeContext'



import './index.css'

const Products = () => {


  const { mode } = useContext(ModeContext)
  console.log(mode)

  return (

    <div className='whole-products-page-container'>
      <div className='warning'>
        {
          mode === 'offline' ?
            <div class="alert alert-danger" role="alert" >
              You are offline Check your internet connection!
            </div>
            : null
        }
      </div>
      <Header />
      <Slideshow />
      <div className="product-sections">
        <AllProductsSection />
      </div>
    </div>

  )
}

export default Products
