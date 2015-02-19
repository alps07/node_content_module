var fs = require('fs');
var path = require('path');

module.exports = function(request, response){

    var path_url   = path.parse(request.url);
    console.log(path_url);
    console.log("ext:"+ path_url['ext']);
   
    var file_path;
    var content_type;

    switch(path_url['ext']){
      case (""):
        if(!path_url['base']){
          file_path ="./views/index.html";
        }else{
          file_path = "./views/"+ path_url['base'] + ".html";
        }        
        content_type = "text/html";
        break;
      case (".css"):
        file_path ="./stylesheet/" +  path_url['base'];
        content_type = "text/css";
        break;
      case (".jpg"):
      case (".jpeg"):
        file_path="./images/" +  path_url['base'];  
        content_type = "text/jpeg";
        break;
      case (".png"):
        file_path="./images/" +  path_url['base'];  
        content_type = "text/png";
        break;
      case (".gif"):
        file_path="./images/" +  path_url['base'];  
        content_type = "text/gif";
        break;

    }

   if(request.url !== null){
        if(content_type === "text/html" || content_type === "text/css" )  
        { 
          fs.readFile(file_path, 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': content_type});
            response.write(contents); 
            response.end();
          });
        }
        else
        {
          fs.readFile(file_path, function (errors, contents){
            response.writeHead(200, {'Content-type': content_type});
            response.write(contents);
            response.end();
          });

        }
      }
      else
      {
        response.end('File not found!!!');
      }

  }