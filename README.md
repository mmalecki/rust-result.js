# rust-result.js

Mimic Rust's [`std::result`][result].

## Installation

```sh
npm install rust-result
```

## Usage

```js
var fs = require('fs');
var Result = require('rust-result');


// If you want async just get a promise or something.
var readFile = function (path, encoding) {
  var content;
  try {
    return Result.Ok(fs.readFileSync(path, encoding))
  }
  catch (ex) {
    return Result.Err(ex)
  }
}

var result = readFile(__filename);
var v, err;

if (Result.Ok(result) !== undefined) {
  v = Result.Ok(result);
  console.log('got ' + v.length + ' bytes')
}
else if (Result.Err(result) !== undefined) {
  err = Result.Err(result);
  console.error('oops!', err.message)
}

result = readFile(__filename + 'I do not exist')
if (Result.Ok(result) !== undefined) {
  v = Result.Ok(result)
  console.log('got ' + v.length + ' bytes')
}
else if (Result.Err(result) !== undefined) {
  err = Result.Err(result)
  console.error('oops!', err.message)
}
```

## MIT Licenced.

  [result]: http://doc.rust-lang.org/std/result/
