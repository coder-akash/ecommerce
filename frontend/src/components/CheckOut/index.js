import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import './index.css'
import axios from 'axios'

const CheckOut=()=> {
    const navigate = useNavigate()
    const [address ,setAddress] = useState({
        fullname:'',
        email:'',
        mobile:'',
        addr:'',
        city:'',
        country:'India',
        state:'',
        zip:'',
        userId:localStorage.getItem('userId')
    })
    const onAddressSubmit = e =>{
        e.preventDefault()
        console.log(address)
        axios.post('http://localhost:8081/addAddress',{'address':address})
        .then(res=>{console.log(res.statusText)
            if(res.statusText==='OK'){
                navigate('/Payment')

            }
        
        })
    }

  return (
    <>
    <Header />
    
    <div className="checkout-container">

        <form onSubmit={onAddressSubmit}>

            <div className="row">

                <div className="col">

                    <h3 className="title">add delivery address</h3>

                    <div className="inputBox">
                        <span>Full Name :</span>
                        <input type="text" placeholder="john deo" onInput={e=>setAddress({...address,fullname:e.target.value})} required />
                    </div>
                    <div className="inputBox">
                        <span>Email :</span>
                        <input type="email" placeholder="example@example.com" onInput={e=>setAddress({...address,email:e.target.value})} required />
                    </div>
                    <div className="inputBox">
                        <span>Mobile No. :</span>
                        <input type="text" onInput={e=>setAddress({...address,mobile:e.target.value})}  required pattern="[6789][0-9]{9}"  maxLength="10" title="Please enter valid phone number" placeholder="91********" />

                    </div>

                    <div className="inputBox">
                        <span>Address :</span>
                        <input type="text" placeholder="room - street - locality" onInput={e=>setAddress({...address,addr:e.target.value})}  required/>
                    </div>
                    <div className="inputBox">
                        <span>City :</span>
                        <input type="text" placeholder="Hyderabad" onInput={e=>setAddress({...address,city:e.target.value})} required />
                    </div>

                    <div className="flex">
                        <div className="inputBox">
                            <span>Country:</span>
                            <input type="text" value="India"  readOnly />
                        </div>
                        <div className="inputBox">
                            <span>State :</span>
                            <input type="text" placeholder="Telengana" onInput={e=>setAddress({...address,state:e.target.value})} required  />
                        </div>
                        <div className="inputBox">
                            <span>Pin Code :</span>
                            <input type="text" maxLength="6" placeholder="123 456" onInput={e=>setAddress({...address,zip:e.target.value})} required />
                        </div>
                    </div>

                </div>



            </div>

            <div className="flex">
            <input type="submit" value="Save & proceed to Payment" className="submit-btn" />
            </div>

        </form>

    </div>
    
    </>
  )
}

export default CheckOut