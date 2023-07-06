import Header from '../Header'
import CartListView from '../CartListView'
//import { ProductCountProvider } from '../../context/ProductCountContext'
import './index.css'

const Cart = () => (
  <>
  
    <Header />
    <div className="cart-container">
      <div className="cart-content-container">
        
        <CartListView />
      </div>
    </div>
    
  </>
)
export default Cart
