const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.post('/login/:uid', function (req, res) {
    console.log(req);
    res.end();
  // if(req.body.login && req.body.password){
  //   let login = req.body.login;
  //   let password = req.body.password;
  //   console.log(login, password);
  // } else {
  //   console.log('login ou mot de passe manquant');
  // }
})

app.listen(5050);
