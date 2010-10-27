// http://nodejs.org/api.html
// brew install socat
// run in bash: socat - unix-connect:echo.sock

var net = require('net');
var server = net.createServer(function (stream) {
  stream.setEncoding('utf8');
  stream.on('connect', function () {
    stream.write('Hello!\r\n');
  });
  stream.on('data', function (data) {
    stream.write("You send me: " + data);
  });
  stream.on('end', function () {
    stream.write('Goodbye!\r\n');
    stream.end();
  });
});
server.listen('./echo.sock');