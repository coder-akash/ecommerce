import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'


const ProtectedRoute = (props) =>{
    const {component} = props
    console.log(component)
    if(Cookies.get('jwt_token') === undefined || localStorage.getItem('userID')=== undefined){
        return <Navigate to='/login' />
      }
    else{
    return component 
    }
}

export default ProtectedRoute