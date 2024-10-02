// models/Product.js
const mongoose = require('mongoose');
//ประกาศตัวแปร productSchema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true },

},
    { timestamps: true, versionKey: false }
);
const user = mongoose.model('User', userSchema);
module.exports = user