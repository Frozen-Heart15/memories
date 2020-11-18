const express = require('express');
const connectDB = require('./config/db')
const app = express();
app.use(express.json({extended:false}));

//Connect to database
connectDB();

app.get('/',(req,res)=> res.send('Working!!'));

//Define Routes
app.use('/api/user',require('./routes/user'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/post',require('./routes/post'));


//Listening
const port = process.env.PORT || 5000;
app.listen(port, ()=>{console.log(`Server running at port ${port}`)})