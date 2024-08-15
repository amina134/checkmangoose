const express=require('express')
const app=express()
const connectdb=require("./config/connectdb")
const person = require('./model/person')

require("dotenv").config()
const port=process.env.port
connectdb()

const create=async()=>{
    try {
      const newperson =  new person({
        name:"amina",
        age:19,
        favouriteFoods:["potato","pasta"]
      })
      await newperson.save()
        
    } catch (error) {
        console.log(error)
    }
}
//  create()
const createmany=async()=>{
    try {
        const newperson= await person.create([
         { name:"amin",
            age:19,
            favouriteFoods:["potato","pasta"]},
        { name:"aaaa",
            age:19,
            favouriteFoods:["potato","pasta"]}
        ])
    } catch (error) {
        console.log(error)
    }
}




// createmany()

app.listen(port,()=>{
    console.log("server is running")
})