const Book=require('../model/Book')



const getById=async(req,res)=>{
    const id=req.params.id
    let book;
    try{
        book=await Book.findById(id)

    }
    catch{
        console.log(err)
    }
    if(!book){
        return res.status(404).json({message:"No Books found"})
    }
    return res.status(200).json({book})

}

 const getAllBooks=async(req,res)=>{
    let books;
try{
books=await Book.find();


}catch(err){
    console.log(err)
}
if(!books){
    return res.status(404).json({message:"No Books found"})
}
return res.status(200).json({books})
}
const addBook=async(req,res)=>{
    const{name,author,description,price,available,image}=req.body
let book;
try{
book=new Book({
name,
author,
description,
price,
available,
image




});
await book.save();


}
catch(err){
    console.log(err)
}
if(!book){
    return res.status(500).json({message:"Unable to Add"})
}
return res.status(201).json({message:"Added  successfully"})

}

const updateBook=async(req,res)=>{
    const id=req.params.id
    const{name,author,description,price,available,image}=req.body
    let book;
    try{
book=await Book.findByIdAndUpdate(id,{
    name,
    author,
    description,
    price,
    available,
    image
    
})
book=await book.save()

    }
    catch(err){
        console.log(err)
        }
        if(!book){
            return res.status(500).json({message:"Unable to Update"})
        }
        return res.status(201).json({book})
        
}
const deleteBook=async(req,res)=>{
const id=req.params.id
let book;
try{
    book=await Book.findByIdAndRemove(id)
}catch(err){
    console.log(err)
}
if(!book){
    return res.status(500).json({message:"Unable to Delete"})
}
return res.status(201).json({book})


}
exports.getAllBooks=getAllBooks
exports.addBook=addBook
exports.getById=getById
exports.updateBook=updateBook
exports.deleteBook=deleteBook