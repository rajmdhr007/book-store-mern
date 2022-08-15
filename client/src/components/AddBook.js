import { Button, Checkbox, FormControlLabel, FormGroup, FormLabel, TextField } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import"./Book/Book.css"
const AddBook = () => {
    const history=useNavigate()
    const[inputs,setInputs]=useState({
name:'',
author:'',
description:'',
price:'',

image:"",




    })
    const[checked,setChecked]=useState(false)

    const handleChange=(e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))



    }
    const sendRequest=async()=>{
       await axios.post("http://localhost:5000/books",
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
    e.preventDefault()
    console.log(inputs,checked)
sendRequest().then(()=>history('/books'))

}

  return  <div classname="form" >
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
    <Button variant='contained' type='submit'>ADD BOOK </Button>

    </Box>
  </form>
    </div>
    


}

export default AddBook