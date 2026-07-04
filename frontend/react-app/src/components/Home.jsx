import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./home.css"

function Home() {

    let [state,setState]=useState([])
    console.log(state)
    // let fetch data
    let fetchData = async () => {
        let res =await axios.get('https://reactcurd-okbw.onrender.com/data')
        console.log(res)
        let{data} = res
        setState(data)

    
    }
    useEffect(() => {
        fetchData()
    }, [])

    let handleDelete =  (id) => {
        console.log(id)
        axios.delete(`https://reactcurd-okbw.onrender.com/data/${id}`)
        .then(()=>{
            console.log('deleted')
            window.location.reload()

        })
        .catch(() =>{
            console.log('error occured')

        })
    }
  return (
    <main>
        <h1 style={{ textAlign: 'center' }}><Link to="/create">Create new users</Link></h1>
    <div id='parent'>
        
        {
            state.map((value)=>{
                console.log(value)
                return(
                    <div key={value.id} >
                        <Card style={{  width: '30rem', border: '2px solid #ccc' }} >
                    <Card.Img variant="top" src={`https://api.dicebear.com/10.x/lorelei/svg?seed=${value.username}`}/>
                       <Card.Body>
                        <h2> username:{value.username}</h2>
                        <h2> email : {value.email} </h2>
                         <h2> company Name : {value.companyname}</h2>
                        <h3> phone : {value.phone}</h3>
                        <h3>Street : {value.address?.street}</h3>
                        <h3> city : {value.address?.city}</h3>
                        <button><Link to={`/edit/${value.id}`}>Edit</Link></button>&nbsp; &nbsp;
                        <button onClick={() => {handleDelete(value.id)}}>Delete</button>
                        </Card.Body>
                </Card>
                    </div>
                
                )
            })
        }

    </div>
    </main>
  )
}

export default Home
