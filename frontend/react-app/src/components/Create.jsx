import React,{useState}from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'

function Create() {
  let [username,setUsername] = useState('');
  let [email,setEmail] = useState('');
  let [companyname,setCompanyname] = useState('');
  let [phone,setPhone] = useState('');
  let [street,setStreet] = useState('');
  let [city,setCity] = useState('');

  let navigate = useNavigate()

  let handleChange = (e) => {
    e.preventDefault();
    let playload = {
      username,
      email,
      companyname,
      phone,
      address : {
      street,
      city
      }
    }
    console.log(playload)


    axios.post('http://localhost:8080/data', playload)
    .then(()=>{
      console.log('data added')
      navigate('/')
      toast.success('data added successfully',{
        autoClose: 2000
      })
    }
    )
    .catch(()=>{
      console.log('error occured')

    })
  }
  


  
  return (
    <div>
     <form action=" ">
      UserName : <input type="text" name="username" id="username"  onChange={(e) => {setUsername(e.target.value)}} /> <br />
      Email : <input type="email" name="email" id="email"  onChange={(e) => {setEmail(e.target.value)}} /> <br />
      Company Name : <input type="text" name="companyname" id="companyname"  onChange={(e) => {setCompanyname(e.target.value)}} /> <br />
      Phone : <input type="number" name="phone" id="phone" onChange={(e) => {setPhone(e.target.value)}} /> <br />
      Street : <input type="text" name="street" id="street" onChange={(e) => {setStreet(e.target.value)}} /> <br />
      City : <input type="text" name="city" id="city" onChange={(e) => {setCity(e.target.value)}} /> <br />
      <br/>
      <button onClick={handleChange}>Submit</button>


     </form>
    </div>
    
  );
}


export default Create

