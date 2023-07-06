import {Link} from 'react-router-dom'
import './index.css'
import Cookies from 'js-cookie'
import { useNavigate} from 'react-router-dom'
import {useContext } from 'react'
import { ProductCountContext } from '../../context/ProductCountContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  //const { productCount } = useContext(ProductCountContext);
  const {productCount} = useContext(ProductCountContext)
  console.log(productCount)
 
  //const [count,setCount] = useState(0)
  const history = useNavigate()
  const onClickLogout=()=>{
    Cookies.remove('jwt_token')
    localStorage.clear()
    history('/login',{ replace: true })
  }
  return(
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="website-logo"
        src="https://i.ibb.co/QrVMnhp/flybuy.png"
        alt="website logo"
      />
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </li>
        <li>
          {/*
          <Link to="/cart" className="nav-link">
            Cart {productCount!==0 && <span className='cart-count-badge'>{productCount}</span>}
          </Link>
  */ }
          <Link to="/cart" className="nav-link">
            <FontAwesomeIcon icon={faShoppingCart} /> Cart {productCount !== 0 && <span className="cart-count-badge">{productCount}</span>}
          </Link>
        </li>
        <li>
          <Link to='/myorders' className="nav-link">
            My Orders
          </Link>
        </li>
        <li class="dropdown">
        <Link to='#' className="nav-link">More</Link>
            <div class="dropdown-content">
            <Link to='/contactus' className="nav-link">Contact Us</Link>
            <Link to='#' className="nav-link">Download App</Link>
            </div>
        </li>
      </ul>
      <button type="button" className="logout-desktop-btn" onClick={onClickLogout}>
        Logout
      </button>
      <button type="button" className="logout-mobile-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="logout icon"
          className="logout-icon"
        />
      </button>
    </div>
  </nav>
)
}
export default Header
