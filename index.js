/* FILMS API */

var fs = require('fs')

var restify = require('restify')
var server = restify.createServer()
// var mongo = require('./mongo.js') 
server.use(restify.fullResponse())
server.use(restify.queryParser())
server.use(restify.bodyParser())
server.use(restify.authorizationParser())

//var accounts = require('./accounts.js')
var films = require('./films.js')

server.get('/films', function(req, res) {
  console.log('GET /library')
  const searchTerm = req.query.s
  console.log('q='+searchTerm)
  films.search(searchTerm, function(data) {
    console.log(data)
    res.setHeader('content-type', 'application/json');
    res.send(data.code, data.response);
    res.end();
  })
})

//server.get('/actor', function(req, res) {
//  console.log('GET /library')
//  const searchTerm = req.query.s
//  console.log('q='+searchTerm)
  
  
  //films.search(searchTerm, function(data) {
  //  console.log(data)
   // res.setHeader('content-type', 'application/json');
  //  res.send(404, "Not Yet Implemented");
   // res.end();
 // })
// })

//
// server.post('/accounts', function(req, res) {
//  console.log('POST /accounts')
// const auth = req.authorization
//  const body = req.body
//  console.log(body)
//  const host = req.headers.host
//  console.log(typeof req.files)
//  accounts.add(host, auth, body, req.files, function(data) {
//   console.log('DATA RETURNED')
//    console.log(data)
//    res.setHeader('content-type', 'application/json');
//    res.send(data.code, data.response);
//    res.end();
//  })
//})


var port = process.env.PORT || 8080;
server.listen(port, function (err) {
  if (err) {
      console.error(err);
  } else {
    console.log('App is ready at : ' + port);
  }
})
