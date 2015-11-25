var request = require('request')

// https://www.omdbapi.com/?s

exports.search = function(query, callback) {
  console.log('search')
  if (typeof query !== 'string' || query.length === 0) {
    callback({code:400, response:{status:'error', message:'missing query (q parameter)'}})
  }
  const url = 'http://www.omdbapi.com/'
  const query_string = {s: query}
  request.get({url: url, qs: query_string}, function(err, res, body) {
    if (err) {
      callback({code:500, response:{status:'error', message:'search failed', data:err}})
    }
    console.log(typeof body)
    const json = JSON.parse(body)
    console.log(json)
   /* const films = json.search.map(function(element) {
      return {title: element.Title}
    })
    console.log(films)
    */
    films = typeof
    
    
    
    
    
    
    (json);
    callback({code:200, response:{status:'success', message:films.length+' films found', data:films}});
  })
}