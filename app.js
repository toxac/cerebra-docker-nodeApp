const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send({message:"hello from a container"})
})

app.listen(3000, ()=>{
    console.log('app running on port 30000');
})