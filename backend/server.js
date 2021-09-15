require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const storeRoutes = require('./routes/storeRoutes')

connectDB();
const app = express();
app.use(express.json());
app.use('/api/user',userRoutes)
app.use('/api/store',storeRoutes)
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`server running on port ${PORT}`));