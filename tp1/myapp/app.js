const express = require('express');
const app = express ();
const port = 3000;
    app.get('/',(req,res)=>{
      const data = new Date ();
      const formattedDate = date.toLocalestring();
      res.send(`<h1>la date et l heure actuelles sont : ${formattedDate}</h1>`);
      
 });
 app.listen(port,()=>{
    console.log(`application sur le port ${port}`)
 });
