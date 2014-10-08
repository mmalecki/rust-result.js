# rust-result.js
This is meant to mimic Rust's `std::result`.

## Installation
```sh
npm install rust-result
```

## Usage
```js
var fs = require('fs')
var Ok = require('rust-result').Ok
var Err = require('rust-result').Err
var Result = require('rust-result').Result

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
```
