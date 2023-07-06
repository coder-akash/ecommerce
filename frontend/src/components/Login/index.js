//import {Component} from 'react'
import {useContext, useState } from 'react'
import { useNavigate,Navigate,} from 'react-router-dom';
import Cookies from 'js-cookie';
import PhoneInput from 'react-phone-input-2'
import axios from 'axios';
import OTPInput from "otp-input-react";
import { ProductCountContext } from '../../context/ProductCountContext';


import 'react-phone-input-2/lib/bootstrap.css'
//import "react-phone-input-2/lib/style.css";
//import 'react-phone-input-2/lib/style.css'
//import 'react-phone-input-2/lib/material.css'

import './index.css'


const LoginForm = () =>{

  const {updateProductCount} = useContext(ProductCountContext)
  const navigate = useNavigate()

  const [user, setUser] = useState('')
 
  const [OTP, setOTP] = useState("");
  //const [username,setUsername] = useState('')
  //const [password,setPassword] = useState('')
  //const [mobile,setMobile] = useState('')
  const [signUpData,setSignUpData] = useState({
    username:'',
    password:'',
    conpass:'',
    mobile:'',
    email:''
  })
  const [signInData, setSignInData] = useState({
    username:'',
    password:'',
  })
  const [signInError,setSignInError] = useState({
    error:false,
    errorMsg:''
  })
  const [signUpError,setSignUpError] = useState({
    error:false,
    errorMsg:''
  })
  const [signUpSucc,setSignUpSucc] = useState({
    succ:false,
    succMsg:''
  })
  const [logchange,setLogchange] =useState(true)

  const [showotp, setShowOtp] = useState({
    show:false,
    mobile:'',
    error:''
  })

  const [authOtp,setAuthOtp] = useState({
    otp:'',
    data:''
  })

  const [otpEror ,setOtpError] = useState('')

  const varifyOtp = (e) =>{
    e.preventDefault()
    console.log(typeof(OTP))
    console.log(typeof(authOtp))
    if(OTP.length ===6){
      if (OTP===authOtp.otp){
        console.log('success')
        //navigate('/',{ replace: true })
        axios.post('/verifyotp',authOtp.data) //{username:'akash',password:12233,mobile:12113123})
    .then(res=>{
      console.log(res.data.jwt_token)
     onLoginSuccess(res.data.jwt_token,user)
    })
    .catch(err=>{
      console.log(err.response.data)
      setOtpError(err.response.data)
    })
        
      }
      else{
        setOtpError("Invalid OTP")
      }
    }
    else{
      setOtpError("Invalid OTP")
    }
    
  }
  
  const onLoginSuccess = (jwtToken,userId) =>{
    
    Cookies.set('jwt_token',jwtToken,{expires:30})
    localStorage.setItem('userId', JSON.stringify(userId))
    axios.post('/getCartList', {'userId':userId})
    .then(res=>{
        updateProductCount(res.data.length)
    },[])
    //console.log(username,password)
    navigate('/',{ replace: true }) //it won't go back
    //navigate('/')
  }
  
  const showSubmitFailure = (msg) => {
    //console.log(msg)
    setSignInError({error:true,errorMsg:msg})

  }
 /*
  const onChangePassword = event => {
    setPassword((password)=>password=event.target.value)
  }
  
  
  const onSubmitForm = async event =>{
    event.preventDefault()
    const userDetails = {username,password}
    //console.log(username,password)
    const url  = 'https://apis.ccbp.in/login'
    const options = {
      method : 'POST',
      body : JSON.stringify(userDetails)
    }
    //console.log(options.body)
    const response = await fetch(url,options)
    const data = await response.json()
    console.log(data)
    //console.log(response)
    if (response.ok){
        onLoginSuccess(data.jwt_token)
    }
    else{
        showSubmitFailure(data.error_msg)
    }
  }
  */

  const changeToSignUP = () =>{
    console.log('clicked')
    setSignUpSucc({succ:false,succMsg:''})
    setSignUpError({error:false,errorMsg:''})
    setSignInError({error:false,errorMsg:''})
    //console.log('mobile',mobile)
    setLogchange((setLogchange)=>setLogchange=!setLogchange)
    
  }


  const onSignIn = (e) =>{
    //console.log(username,password,mobile)
    e.preventDefault()
    axios.post('/login',signInData) //{username:'akash',password:12233,mobile:12113123})
    .then(res=>{
      console.log(res.data)
     onLoginSuccess(res.data.jwt,res.data.userId)
    })
    .catch(err=>{
      console.log(err.response.data)
      showSubmitFailure(err.response.data)
    })
  }

  const onSignUp = (e) =>{
    e.preventDefault()
    console.log(signUpData)
    if (signUpData.password === signUpData.conpass){
    axios.post('/data',signUpData) //{username:'akash',password:12233,mobile:12113123})
    .then(res=>{
      console.log(typeof(res.data))
      if (typeof(res.data)== "string"){
      if(res.data.slice(0,16)+res.data.slice(-9,-1)==="Duplicate entry username"){
        setSignUpError({error:true,errorMsg:'*Username already exist try another...'})
        setSignUpSucc({succ:false,succMsg:''})
      }
      else if (res.data.slice(0,16)+res.data.slice(-7,-1)==="Duplicate entry mobile"){
        setSignUpError({error:true,errorMsg:'*Mobile number already exist try another...'})
        setSignUpSucc({succ:false,succMsg:''})
      }
    }
    else{
      setSignUpSucc({succ:true,succMsg:'*SignUp sucessfull try to SignIn...'})
      setSignUpError({error:false,errorMsg:''})
      
    }
     
    })
    .catch(err=>console.log(err))
    //console.log(username,password,mobile)
  }
  else{
    setSignUpError({error:true,errorMsg:'*Password Field Must Match'})
  }
}

  const displayotp = (e) =>{
    e.preventDefault()
    console.log(showotp.mobile.length)
    if(showotp.mobile!=='' && showotp.mobile.length === 12){
    axios.post('/getotp',{'mobile':showotp.mobile}) //{username:'akash',password:12233,mobile:12113123})
    .then(res=>{
      console.log(res.data.data)
      setShowOtp({show:true,mobile:'',error:''})
      setAuthOtp({otp:String(res.data.otp),data:res.data.data})
      setUser(res.data.userId)
    })
    .catch(err=>{
      console.log(err.response.data)
      setShowOtp({...showotp,error:err.response.data})
    })}
    else{
      setShowOtp({...showotp,error:'Please Enter Valid Mobile Number'})
    }


  }

  

  /*

  const renderUsernameField = () => {
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onInput={e => setUsername(e.target.value)}
        />
      </>
    )
  }

  const renderPasswordField = () => {

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          //onChange={onChangePassword}
          onInput={e => setPassword(e.target.value)}
        />
      </>
    )
  }
  */

 
  
  const signIn = () =>{
    return(
      <>
      
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          autoCapitalize = 'none'
          required
          //value={username}
          //onInput={e => setUsername(e.target.value)}
          onInput={e => setSignInData({...signInData,username:e.target.value})}
          />
          <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          required
          //value={password}
          //onChange={onChangePassword}
          //onInput={e => setPassword(e.target.value)}
          onInput={e => setSignInData({...signInData,password:e.target.value})}
        />
        
        </>
    )
  }
/*
  const onChangeUser = e =>{
    e.preventDefault()
    setSignUpData({...signUpData,username:e.target.value})
    axios.post('http://localhost:8081/username',{'user':signUpData.username}) //{username:'akash',password:12233,mobile:12113123})
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

  }

  const onChangeno = e =>{
    e.preventDefault()
    setSignUpData({...signUpData,mobile:e.target.value})
    axios.post('http://localhost:8081/username',{'user':signUpData.mobile}) //{username:'akash',password:12233,mobile:12113123})
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

  }
  */
 

  const signUp = () =>{
    return(
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          //value={signUpData.username}
          required
          //onChange={onChangeUser}
          //onInput={e => setUsername(e.target.value)}
          onInput={e => setSignUpData({...signUpData,username:e.target.value})}
          />
        <label className="input-label" htmlFor="password1">
          PASSWORD
        </label>
        <input
          type="password"
          id="password1"
          className="password-input-filed"
          required
          //value={signUpData.password}
          //onChange={onChangePassword}
          //onInput={e => setPassword(e.target.value)}
          onInput={e => setSignUpData({...signUpData,password:e.target.value})}
        />
        
        <label className="input-label" htmlFor="password2">
         CONFIRM PASSWORD
        </label>
        <input
          type="password"
          id="password2"
          className="password-input-filed"
          required
          //value={signUpData.password}
          //onChange={onChangePassword}
          //onInput={e => setPassword(e.target.value)}
          onInput={e => setSignUpData({...signUpData, conpass:e.target.value})}
        />

        <label className="input-label" htmlFor="mobile">
         MOBILE NO.
        </label>
        
        <PhoneInput
          id="mobile"
          className="phonefiled"
          value={signInData.mobile}
          
          country={'in'}
          // Set your inline styles here
         
          inputStyle={{
            border: "1px solid #d7dfe9",
            background: "#ffffff",
            width:"100%",
            height: "40px",            
          }}
          
          //value={mobile}
          onChange={e => setSignUpData({...signUpData, mobile:e})}
          //onChange={onChangeno}
          //onInput={e => setMobile(e)}
          //onInput={e => setSignUpData({...signUpData, mobile:e.target.value})}
        />
        <label className="input-label" htmlFor="email">
          EMAIL
        </label>
        <input
          type="email"
          id="email"
          className="username-input-filed"
          required
          //value={signUpData.email}
          //onInput={e => setUsername(e.target.value)}
          onInput={e => setSignUpData({...signUpData,email:e.target.value})}
          />
        </>
    )
  }

  const jwt_token = Cookies.get('jwt_token')
  if (jwt_token !== undefined){
    return <Navigate to='/' />
  }
  return (  
    <div className="login-form-container">
      <img
        src="flybuy.png"
        className="login-website-logo-mobile-image"
        alt="website logo"
      />
      <img
        src="shop1.gif"
        className="login-image"
        alt="website login"
      />
      {!showotp.show &&
      <>
        { logchange &&
        <div className="form-container">
          
        <form  onSubmit={onSignIn}>
          <img
            src="flybuy.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{signIn()}</div>
          
          
          <button type="submit" className="login-button" >
            SignIn
          </button>
          {signInError.error && <p className='error-message'>*{signInError.errorMsg}</p>}
          
        </form>
        <div className="line"></div>
        <form onSubmit={displayotp}>
        <label className="input-label" htmlFor="mobile">
          *Enter Your Registered Mobile Number
        </label>
        <PhoneInput
          inputProps={{ name: 'phone', required: true}} 
          id="mobile"
          className="signInphonefiled"
          value={showotp.mobile}
          required
          country={'in'}
          // Set your inline styles here
          inputStyle={{
            border: "1px solid #d7dfe9",
            background: "#ffffff",
            width:"100%",
            height: "40px", 
          }}
          onChange={e => setShowOtp({...showotp, mobile:e})}
          />
          <button type="submit" className="otp-button" >
            Get OTP
          </button>
          </form>
          {showotp.error!==''&& <p  className='error-message'>*{showotp.error}</p>}
        <div className="text">
                  <h3>Don't have an account?<button onClick={changeToSignUP}>SignUp</button></h3>
        </div>
      </div>
      
          }
          {
            !logchange &&
            <div className="form-container">
        <form  onSubmit={onSignUp}>
          <img
            src="flybuy.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{signUp()}</div>
          
          <button type="submit" className="login-button" >
            SignUp
          </button>
          {signUpError.error && <p className='error-message'>{signUpError.errorMsg}</p>}
          {signUpSucc.succ && <p className='succ-message'>{signUpSucc.succMsg}</p>}
          
        </form>
        <div className="text">
                  <h3>Already have an account? <button onClick={changeToSignUP}>SignIn</button></h3>
        </div>
      </div>
          }
          </>
        }
  <div>
  {showotp.show &&
      <div className="container3">
      <button className='backBtn' onClick={()=>{setShowOtp({...showotp,error:'',show:false} ,setOTP(''),setOtpError(''))}}><img src='back.png' alt='logo>' /></button>
        <header>
          <img className = 'logo'src='security.png' alt='logo>' />
        </header>
      <h4>Enter OTP Code</h4>
      <form onSubmit={varifyOtp}>
        
        <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} />
        
        <button className='submitBtn'>Verify OTP</button>
      </form>
      <footer>
         <h3 style={{fontFamily:'serif'}}>Powered By @FlyBuy</h3>
      </footer>
      {otpEror!==''&& <p className='error-message'>*{otpEror}</p>}
      </div>
}
      </div>
    </div>

  )

}
export default LoginForm