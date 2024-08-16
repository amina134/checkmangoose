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
//find 
const findit=async()=>{
    try {
        const result= await person.find({name:"amina"})
        console.log(result);
        
    } catch (error) {
        console.log(error)
       
        
    }
}
 //findit()

// findfood()

const findfood=async()=>{
    try {
        const result= await person.findById("66be307d309fa81af57e5489")
        console.log(result);
        
    } catch (error) {
        console.log(error)
       
        
    }
}
// findfood()
const hambur=async()=>{
    try {
        const chercher= await person.findOne({name:"amin"})
      if (chercher){
        console.log(chercher.favouriteFoods);
        
        chercher.favouriteFoods.push("hamburger")
        await chercher.save()
      }
        
    } catch (error) {
        console.log(error);
        
    }
}
// hambur()
const age=async()=>{
    try {

        const cher= await person.findOneAndUpdate({name:"amin"},{age:"30"},{new :true})
        console.log(cher)
      }
        
    catch (error) {
        console.log(error);
        
    }
}
//age()
const efface=async()=>{
    try {

        const cher= await person.findByIdAndDelete("66be307d309fa81af57e548a")
        console.log(cher)
      }
        
    catch (error) {
        console.log(error);
        
    }
}
// efface()

const effacer=async()=>{
    try {

        const cher= await person.deleteMany({name:"amina"})
        console.log(cher)
      }
        
    catch (error) {
        console.log(error);
        
    }
}
//effacer()

const faire=async()=>{
    try {
        const travail = await person.find({name:"amin"}).sort("age").limit(1).select("-favouriteFoods")
        console.log(travail);
       
    } catch (error) {
        console.log(error)
    }
}
faire()

app.listen(port,()=>{
    console.log("server is running")
})