import { Button } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import"./Book.css"
import axios from 'axios'

const Book = (props) => {
    const{_id,name,author,description,price,image }=props.book
    const history=useNavigate()
    const deleteHandle=async()=>{
     await   axios.delete(`http://localhost:5000/books/${_id}`).then(res=>res.data)
     .then(()=>history("/"))
     
     .then(()=>history("/books"))
    }
  return (
    <div className="card1">
        <img src={image} alt={name}/>
        <article>By:{author}</article>
        <h4>{name}</h4>
        <p>{description}</p>
        <h4>Rs{price}</h4>
        <Button LinkComponent={Link} to={`/books/${_id}`} sx={{mt:'auto'}}>Update</Button>
        <Button onClick={deleteHandle} sx={{mt:'auto'}}>Delete</Button>
    </div>
  )
}

export default Book