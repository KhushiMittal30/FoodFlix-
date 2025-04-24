import mongoose from 'mongoose'

const URL = "mongodb://127.0.0.1:27017/FoodDeliveryWebApp";
// const URL = "mongodb+srv://pankajadityadev:%24%3BfoodApp715%24%3B@cluster0.m38yl.mongodb.net/FoodDeliveryWebApp";


export const connectToDB = async ()=>{
    await mongoose.connect(URL)
    .then(()=>console.log("DB Connected!..."))
}

// export const connectToDB = ()=>{
//     return new Promise((resolve,reject)=>{
//         mongoose.connect(URL)
//         resolve();
//     })
//     .then(()=>console.log("CONNECTED!!!......"))
// }