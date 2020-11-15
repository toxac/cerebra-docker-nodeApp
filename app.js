const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    res.send({message:"hello from a container"});
})

app.get('/port', (req,res)=>{
    res.send({port: PORT});
})

app.listen(PORT, ()=>{
    console.log(`app running on port ${PORT}`);
})