const express = require('express'); 
const mongoose = require('mongoose'); 
const dotenv = require('dotenv');

const app = express();
dotenv.config();//ต้องเรียกใช้.env
app.use(express.json())

// ConnectDB
mongoose.connect(process.env.MONGO_DB_URI, {
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// เรียกไฟล์ต่างๆ
const productRouter = require("./routes/product")
app.use("/api/product" , productRouter)

const authRouter = require("./routes/auth")
app.use("/api/auth" , authRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));