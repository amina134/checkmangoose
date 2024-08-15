const mongoose=require("mongoose")

const personSchema=mongoose.Schema({
    name:{type: String,require:true},
    age:{type:Number},
    favouriteFoods:[String]
})

const person=mongoose.model("person",personSchema)
module.exports=person

