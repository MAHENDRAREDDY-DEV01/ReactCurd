import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import {toast} from 'react-toastify'

function Edit() {
  let [username,setUsername] = useState('')
  let [email,setEmail] = useState('')
  let [companyname,setCompanyname] = useState('')
  let [phone,setPhone] = useState('')
  let [street,setStreet] = useState('')
  let [city,setCity] = useState('')

  console.log(useParams())
  let {id} = useParams()
  console.log(id)

  let navigate = useNavigate()

  //
  useEffect(() => {
    axios.get(`http://localhost:8080/data/${id}`)
      .then((res) => {
        console.log(res.data)
      
        setUsername(res.data.username);
        setEmail(res.data.email);
        setCompanyname(res.data.companyname);
        setPhone(res.data.phone);
        setStreet(res.data.address.street);
        setCity(res.data.address.city);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      })
  }, [id])

  // update data
  let handleChange = (e) => {
    e.preventDefault();
    let payload = {
      username,
      email,
      companyname,
      phone,
      address: {
        street,
        city
      }

    }
    axios.put(`http://localhost:8080/data/${id}`, payload)
      .then(() => {
        console.log('Data updated successfully:');
        toast.success('Data updated successfully');
        navigate('/'); // Redirect to home page after successful update
      })
      .catch((err) => {
        console.error('Error updating data:', err);
        toast.error('Error updating data');
      });
  }


  return (
    <div>
      <form action=" ">
      UserName : <input type="text" name="username" id="username" value={username}  onChange={(e) => {setUsername(e.target.value)}} /> <br />
      Email : <input type="email" name="email" id="email" value={email} onChange={(e) => {setEmail(e.target.value)}} /> <br />
      Company Name : <input type="text" name="companyname" id="companyname" value={companyname} onChange={(e) => {setCompanyname(e.target.value)}} /> <br />
      Phone : <input type="number" name="phone" id="phone" value={phone} onChange={(e) => {setPhone(e.target.value)}} /> <br />
      Street : <input type="text" name="street" id="street" value={street} onChange={(e) => {setStreet(e.target.value)}} /> <br />
      City : <input type="text" name="city" id="city" value={city} onChange={(e) => {setCity(e.target.value)}} /> <br />
      <br/>
      <button onClick={handleChange}>Submit</button>


     </form>
    </div>
  )
}

export default Edit
