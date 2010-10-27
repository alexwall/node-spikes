// # Requirements: 
// http://github.com/brainfucker/hashlib

var hash = require('hashlib');
var text = "Create a md5 hash";

console.log('"' + text + '" => ' + hash.md5(text));
