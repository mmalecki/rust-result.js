var fs = require('fs')
var Ok = require('./').Ok
var Err = require('./').Err
var Result = require('./').Result

// If you want async just get a promise or something.
var readFile = function (path, encoding) {
  var content;
  try {
    return Ok(fs.readFileSync(path, encoding))
  }
  catch (ex) {
    return Err(ex)
  }
}

var result = readFile(__filename)
var v, err;

if (v = Ok(result)) {
  console.log('got ' + v.length + ' bytes')
}
else if (err = Err(result)) {
  console.error('oops!', err.message)
}

result = readFile(__filename + 'I do not exist')
if (v = Ok(result)) {
  console.log('got ' + v.length + ' bytes')
}
else if (err = Err(result)) {
  console.error('oops!', err.message)
}
