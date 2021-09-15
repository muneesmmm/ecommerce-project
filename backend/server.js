require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const shopeRoutes = require('./routes/shopeRoutes')

connectDB();
const app = express();
app.use(express.json());
app.use('/api/user',userRoutes)
app.use('/api/shope',shopeRoutes)
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`server running on port ${PORT}`));