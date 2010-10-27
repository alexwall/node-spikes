// http://nodejs.org/api.html
// ls -lh /usr

var util   = require('util'),
    spawn = require('child_process').spawn,
    ls    = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', function (data) {
	util.print('stdout: ' + data);
});

ls.stderr.on('data', function (data) {
  util.print('stderr: ' + data);
});

ls.on('exit', function (code) {
  console.log('child process exited with code ' + code);
});