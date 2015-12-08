/**
 * Created by agafner on 02.12.2015.
 */

var hellow = "Hellow World",
    http = require('http'),
    anotherModule = require('somedir/anothermodule');

console.log(hellow);
anotherModule.doMe('bla-bla-bla');

http.createServer(function(request, response){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hellow World 2');
}).listen(8888, '127.0.0.1');