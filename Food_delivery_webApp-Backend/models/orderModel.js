import mongoose from "mongoose";

// create order Schema
const orderSchema = new mongoose.Schema({
    userId: {type:String, required:true},
    address: {type:Object, required:true},
    items: {type:Array, required:true},
    amount: {type:Number, required:true},
    data: {type:Date, default:Date.now},
    payment: {type:Boolean, default:false},
    status: {type:String, default:"Food Processing"}
});

// order Model
const orderModel = mongoose.models.Order || mongoose.model('Order', orderSchema);

// export the modules
export default orderModel;