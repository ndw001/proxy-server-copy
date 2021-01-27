const express = require('express');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
var cors = require('cors')




const path = require('path');
let app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
let port = 8000;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.send('hi')
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

/*
app.route('/reviews')
    .get( (req, res)=> {
 //send get request to reviewsmodule service
 //send results back
 

console.log('erics')
 var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch(`http://localhost:1128/reviews?itemid=${req.query.itemid}`, requestOptions)
    .then(response => res.send(response))
    .then(result => console.log('success'))
    .catch(error => console.log('error', error));
    }) 
    .post( (req, res)=> {
//send post request to reviewsmodule service
//send reults back 
var requestOptions2 = {
    method: 'POST',
    redirect: 'follow'
  };
  
  fetch(`http://localhost:1128/${req.params}/reviews`, requestOptions2)
    .then(response => res.send(response))
    .then(result => console.log('success'))
    .catch(error => console.log('error', error));
    })
    

app.get('/api/products/id/:prodId', (req, res) => {
    var requestOptions2 = {
        method: 'GET',
        redirect: 'follow'
      };
      console.log('kyles')
      
      fetch(`http://localhost:3000/api/products/id/${req.params.prodId}`, requestOptions2)
        .then(response => res.send(response))
        .then(result => console.log('success'))
        .catch(error => console.log('error', error));
    
   })
   app.get('/api/products/:category', (req, res) => {
    var requestOptions2 = {
        method: 'GET',
        redirect: 'follow'
      };
     
      console.log('kyles2')
      fetch(`http://localhost:3000/api/products/${req.params.category}`, requestOptions2)
        .then(response => res.send(response))
        .then(result => console.log('success'))
        .catch(error => console.log('error', error));
    
   })
app.get('/api/:productId', (req, res) => {
    var requestOptions2 = {
        method: 'GET',
        redirect: 'follow'
      };
      console.log('nathans')
      fetch(`http://localhost:8000/api/${req.params.productId}`, requestOptions2)
        .then(response => res.send(response))
        .then(result => console.log('success'))
        .catch(error => console.log('error', error));
})

*/