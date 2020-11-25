const express = require('express');
const connectDB = require('./config/db')
const app = express();
app.use(express.json({limit:'50mb',extended:false}));
const path = require('path');

//Connect to database
connectDB();

// app.get('/',(req,res)=> res.send('Working!!'));

//Define Routes
app.use('/api/user',require('./routes/user'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/post',require('./routes/post'));

//Serve static assets in production
if(process.env.NODE_ENV === 'production'){
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

//Listening
const port = process.env.PORT || 5000;
app.listen(port, ()=>{console.log(`Server running at port ${port}`)})