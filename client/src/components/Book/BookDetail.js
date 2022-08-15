import { Button, Checkbox, FormControlLabel, FormGroup, FormLabel, TextField } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import './Book.css'
import { useNavigate, useParams } from 'react-router-dom'

const BookDetail = () => {
    const history=useNavigate()
    const id=useParams().id;
    const[inputs,setInputs]=useState()
    const[checked,setChecked]=useState(false)

    useEffect(()=>{
const fetchHandler=async()=>{
    await axios.get(`http://localhost:5000/books/${id}`).then(res=>res.data).then(data=>setInputs(data.book))
}
fetchHandler()
    }
   
    ,[id])
    const sendRequest=async()=>{
        await axios.put(`http://localhost:5000/books/${id}`,
        {
            name:String(inputs.name),
author:String(inputs.author),
description:String(inputs.description),
price:Number(inputs.price),
available:Boolean(inputs.available),
image:String(inputs.image)

        }).then(res=>res.data)
    }
    const handleSubmit=(e)=>{
        e.preventDefault(e)
        sendRequest().then(()=>history('/books'))
    }
    const handleChange=(e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }
    console.log(inputs)
    

  return <div>
    {
inputs &&(
    
  
  <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" justifyContent={'center'} maxWidth={700}
        alignContent={'center'}
        marginLeft={"auto"}
        marginRight={"auto"}
        marginTop="20px">

       
    <FormLabel>Name</FormLabel>
    <TextField margin="normal" fullWidth variant='outlined' name="name"
     value={inputs.name}  onChange={handleChange}/>
    <FormLabel>Author</FormLabel>
    <TextField margin="normal" fullWidth variant='outlined' name="author"  value={inputs.author}  onChange={handleChange}/>
    <FormLabel>Description</FormLabel>
    <TextField margin="normal" fullWidth variant='outlined' name="description"  value={inputs.description}  onChange={handleChange}/>
    <FormLabel>Price</FormLabel>
    <TextField type="number" margin="normal" fullWidth variant='outlined' name="price"  value={inputs.price}  onChange={handleChange}/>
    <FormLabel>Image</FormLabel>
    <TextField  margin="normal" fullWidth variant='outlined' name="image"  value={inputs.image}  onChange={handleChange}/>
    <FormGroup>
  <FormControlLabel control={<Checkbox checked= {inputs.available} onChange={()=>setChecked(!checked)}/>} label="available"  />

</FormGroup>
    <Button variant='contained' type='submit'>Update BOOK </Button>

    </Box>
  </form>
  
)

    }
  </div>

  
}

export default BookDetail