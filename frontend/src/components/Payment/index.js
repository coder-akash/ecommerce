import React, { useContext, useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'
import Header from '../Header'
import { Link } from 'react-router-dom'
import { ProductCountContext } from '../../context/ProductCountContext'


const Payment = ()=>  {
    
    const [paymentOpt ,setPaymentOpt] = useState('')
    const [userDetails,setUserDetails] = useState({})
    const [price,setPrice] =useState(0)
    const[donePayment,setDonePayment] = useState(false)
    const [purchase_data,setPurchase_data] = useState([])

    const {updateProductCount} = useContext(ProductCountContext)

    useEffect(()=>{
        const script = document.createElement("script");

        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;

        document.body.appendChild(script);
        getPrice()
        getUserDetails()
    },[])
    
    const getPrice=()=>{
        axios.post("/getPrice",{'userId':localStorage.getItem('userId')})
        .then(res=>{console.log(res)
            setPrice(res.data.total_price)
            setPurchase_data(res.data.data)
        })
    }

    const getUserDetails=()=>{
        axios.post("/user",{'userId':localStorage.getItem('userId')})
        .then(res=>{console.log('user',res.data)
            setUserDetails(res.data[0])
        })
    }

    const onSubmitPayment = (e) =>{
        e.preventDefault()

        if(paymentOpt==='cod'){
            axios.post("/removeallCartItme",{'userId':localStorage.getItem('userId')})
            .then(()=>{})
            axios.post("/addPurches",{'data':purchase_data})
            updateProductCount(0)
            setDonePayment(true)
        }
        else if(paymentOpt==='razorpay'){
                axios.post("/removeallCartItme",{'userId':localStorage.getItem('userId')})
                .then(()=>{})
                axios.post("/addPurches",{'data':purchase_data})
                var amount = price * 100; //Razorpay consider the amount in paise
            
                var options = {
                  "key": "rzp_test_mSY3Dgj5lDiQJI",
                  "amount": 0, // 2000 paise = INR 20, amount in paisa
                  "name": "FlyBuy",
                  'order_id':"",
                  "image":"https://i.ibb.co/QrVMnhp/flybuy.png",
                  "handler": function(response) {
                      console.log('response',response);
                      setDonePayment(true)
                        alert("Success")
                  },
                  "prefill": {
                    "contact": userDetails.mobile,
                    "name": userDetails.username,
                    "email": userDetails.email
                },
                  "theme": {
                    "color": "#528ff0"
                  }
                };
            
                axios.post('/upgrade/order',{amount:amount})
                .then(res=>{
                    options.order_id = res.data.id;
                    options.amount = res.data.amount;
                    console.log(res)
                    var rzp1 = new window.Razorpay(options);
                    rzp1.open();
                })
                .catch(e=>console.log(e))
                
            };
        }

        console.log(paymentOpt)
    

  return (
    <> 
    <Header />
    {!donePayment &&   
    <>    
        <div className='head'>
            <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
            />
        </div>
        <div className='wholebody' >
            <div className="payment-container">
                <form onSubmit={onSubmitPayment}>
                    <div className="title">
                        <h4>Select a <span style={{color:" #6064b6"}}>Payment</span> method</h4>
                    </div>
                    {/* <input type="radio" name="payment" id="upi" onClick={()=>{setPaymentOpt('upi')}}  />
                    <input type="radio" name="payment" id="cards" onClick={()=>{setPaymentOpt('cards')}}  /> 
                    <input type="radio" name="payment" id="net" onClick={()=>{setPaymentOpt('net')}}  />
                    <input type="radio" name="payment" id="cod" onClick={()=>{setPaymentOpt('cod')}}  /> */}
                     <input type="radio" name="payment" id="razorpay" onClick={()=>{setPaymentOpt('razorpay')}}  />
                     <input type="radio" name="payment" id="cod" onClick={()=>{setPaymentOpt('cod')}}  />
                    <div className="category">
                        <label htmlFor="razorpay" className="razorpayMethod">
                    <div className="imgName">
                        <div className="imgContainer razorpay">
                            <img src="razorpay.png" alt="razorpay" />
                        </div>
                        <span className="name">Razorpay</span>
                    </div>
                    <span className="check"><i className="fa-solid fa-circle-check" style={{color:" #6064b6"}}></i></span>
                        </label>
                    {/*
                        <label htmlFor="cards" className="cardsMethod">
                    <div className="imgName">
                        <div className="imgContainer cards">
                        <img src="cards.png" alt="cards"/>
                        </div>
                        <span className="name">Credit / Debit / ATM Card</span>
                    </div>
                    <span className="check"><i className="fa-solid fa-circle-check" style={{color:" #6064b6"}}></i></span>
                    </label>

                   * <label htmlFor="net" className="netMethod">
                    <div className="imgName">
                        <div className="imgContainer net">
                        <img src="NET.png" alt="netBanking"/>
                        </div>
                        <span className="name">Net Banking</span>
                    </div>
                    <span className="check"><i className="fa-solid fa-circle-check" style={{color:" #6064b6"}}></i></span>
                    </label>
                    */}
                        <label htmlFor="cod" className="codMethod">
                    <div className="imgName">
                        <div className="imgContainer cod">
                        <img src="COD.png" alt="cod" />
                        </div>
                        <span className="name">Cash On Delivery</span>
                    </div>
                    <span className="check"><i className="fa-solid fa-circle-check" style={{color:" #6064b6"}}></i></span>
                    </label>
                    </div>
                    <div>
                 
            </div>
            <h3>Order Summary</h3>
            <h4 style={{marginTop:"0"}}>Total Amount: Rs {price}/-</h4>
            <button className='submitBtn'>Place Order</button>
                </form>
            </div>
        
            </div>
    </>
    }
    
    {donePayment &&

    <div className='view'>
    
       <div className="wrap">
        <div className="container-donepayment">
            <h1 className="highlight">Your Order Placed Successfully</h1>
            
            <Link to='/products'>
            <button className="cont-button">Continue Shopping</button>
            </Link>
        </div>

        <img className="image truck-img" src="truck.png" alt="" />
        <img className="image box-img" src="https://learndesigntutorial.com/wp-content/uploads/2021/03/box.png" alt="" />
        <img className="image box-img box-img2" src="https://learndesigntutorial.com/wp-content/uploads/2021/03/box.png" alt="" />
    </div> 
    </div>
    
    }

    </>
  )
}

export default Payment


/*
class Payment extends Component {
    state = {paymentOpt:'',price:'',donePayment:false}

    componentDidMount(){
        this.getPrice()
    }
    
    getPrice=()=>{
        axios.post("http://localhost:8081/getPrice",{'userId':localStorage.getItem('userId')})
        .then(res=>{console.log(res)
            setPaymentOpt({price:res.data})
        })
    }

    onSubmitPayment = (e) =>{
        e.preventDefault()
        const {paymentOpt} = this.state
        if(paymentOpt==='cod'){
            axios.post("http://localhost:8081/removeallCartItme",{'userId':localStorage.getItem('userId')})
            .then(()=>{})
            setPaymentOpt({donePayment:true})
        }

        console.log(paymentOpt)
    }

    render(){
        const {price,donePayment} = this.state
  return (
    <> 
    <Header />
    {!donePayment &&   
    <>    
        <div className='head'>
            <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
            />
        </div>
        <div className='wholebody' >
            <div className="payment-container">
                <form onSubmit={this.onSubmitPayment}>
                    <div className="title">
                        <h4>Select a <span style={{color:" #6064b6"}}>Payment</span> method</h4>
                    </div>
                    <input type="radio" name="payment" id="upi" onClick={()=>{setPaymentOpt({paymentOpt:'upi'})}}  />
                    <input type="radio" name="payment" id="cards" onClick={()=>{setPaymentOpt({paymentOpt:'cards'})}}  /> 
                    <input type="radio" name="payment" id="net" onClick={()=>{setPaymentOpt({paymentOpt:'net'})}}  />
                    <input type="radio" name="payment" id="cod" onClick={()=>{setPaymentOpt({paymentOpt:'cod'})}}  />
                    <div className="category">
                        <label htmlFor="upi" className="upiMethod">
                    <div className="imgName">
                        <div className="imgContainer upi">
                            <img src="upi.png" alt="upi" />
                        </div>
                        <span className="name">UPI</span>
                    </div>
                    <span className="check"><i className="fa-solid fa-circle-check" style={{color:" #6064b6"}}></i></span>
                        </label>

                        <label htmlFor="cards" className="cardsMethod">
                    <div className="imgName">
                        <div className="imgContainer cards">
                        <img src="cards.png" alt="cards"/>
                        </div>
                        <span className="name">Credit / Debit / ATM Card</span>
                    </div>
                    <span className="check"><i className="fa-solid fa-circle-check" style={{color:" #6064b6"}}></i></span>
                    </label>

                        <label htmlFor="net" className="netMethod">
                    <div className="imgName">
                        <div className="imgContainer net">
                        <img src="NET.png" alt="netBanking"/>
                        </div>
                        <span className="name">Net Banking</span>
                    </div>
                    <span className="check"><i className="fa-solid fa-circle-check" style={{color:" #6064b6"}}></i></span>
                    </label>

                        <label htmlFor="cod" className="codMethod">
                    <div className="imgName">
                        <div className="imgContainer cod">
                        <img src="COD.png" alt="cod" />
                        </div>
                        <span className="name">Cash On Delivery</span>
                    </div>
                    <span className="check"><i className="fa-solid fa-circle-check" style={{color:" #6064b6"}}></i></span>
                    </label>
                    </div>
                    <div>
                
            </div>
            <h3>Order Summary</h3>
            <h4 style={{marginTop:"0"}}>Total Amount: Rs {price}/-</h4>
            <button className='submitBtn'>Place Order</button>
                </form>
            </div>
        
            </div>
    </>
    }
    
    {donePayment &&

    <div class='view'>
    
       <div class="wrap">
        <div class="container-donepayment">
            <h1 class="highlight">Your Order Placed Successfully</h1>
            
            <Link to='/products'>
            <button class="cont-button">Continue Shopping</button>
            </Link>
        </div>

        <img class="image truck-img" src="truck.png" alt="" />
        <img class="image box-img" src="https://learndesigntutorial.com/wp-content/uploads/2021/03/box.png" alt="" />
        <img class="image box-img box-img2" src="https://learndesigntutorial.com/wp-content/uploads/2021/03/box.png" alt="" />
    </div> 
    </div>
    
    }

    </>
  )
}}

export default Payment

*/