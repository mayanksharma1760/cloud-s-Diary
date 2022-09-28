const mongoose=require('mongoose');
const mongouri='mongodb://localhost:27017/'
const connectToMongo=()=>{
    mongoose.connect(mongouri,()=>{
        console.log('connected successfully')
    })
}
module.exports=connectToMongo 


