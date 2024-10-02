// models/Product.js
const mongoose = require('mongoose');
//ประกาศตัวแปร productSchema
const productSchema = new mongoose.Schema({
    //ใส่ แอคตีบิว เพื่อสร้างdatabase
    product_name: { type: String, required: true }, 
    product_type: { type: String, required: true },
    price: { type: Number, required: true },
    unit: { type: String, required: true },
    
},
{timestamps: true, versionKey: false} //มันจะใส่วันที่โดยอัติโนมัติ
);
const Product = mongoose.model('Product', productSchema); 
module.exports = Product