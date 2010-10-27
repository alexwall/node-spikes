var util   = require('util'),
    exec  = require('child_process').exec,
    child;

child = exec('cat *.js bad_file | wc -l', 
  function (error, stdout, stderr) {
    util.print('stdout: ' + stdout);
    util.print('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});