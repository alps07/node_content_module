// var http = require('http');
var fs = require('fs');

module.exports = function(request, response){

   response.writeHead(200, {'Content-type': 'text/html'});
    console.log('Request', request.url);
    if(request.url === '/'){
      fs.readFile('views/index.html', 'utf8', function (errors, contents){
           response.writeHead(200, {'Content-type': 'text/html'});
        response.write(contents); 
        response.end();
      });
    } else if(request.url === '/dojo'){
      fs.readFile('views/dojo.html', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write(contents);
        response.end();
      });
    } else if(request.url === '/stylesheet/style.css'){
      fs.readFile('stylesheet/style.css', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-type': 'text/css'});
        response.write(contents);
        response.end();
      });
    } else {
        response.end('File not found!!!');
    }
  }