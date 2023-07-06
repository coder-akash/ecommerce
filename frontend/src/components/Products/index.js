import AllProductsSection from '../AllProductsSection'
//import PrimeDealsSection from '../PrimeDealsSection'

import Header from '../Header'
import Slideshow from '../SlideShow'



import './index.css'

const Products = () => {
  

  

  return(
    
  <>
    <Header />
    <Slideshow />
    <div className="product-sections">
      <AllProductsSection />
    </div>
  </>
  
)
  }

export default Products
