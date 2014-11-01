var Individual = require('individual');

var VERSION_KEY = '1';
var ERROR_CACHE_KEY = '__RUST_RESULT_ERROR_UUID@' + VERSION_KEY;
var OK_CACHE_KEY = '__RUST_RESULT_OK_UUID@' + VERSION_KEY;

var ERROR_UUID = Individual(ERROR_CACHE_KEY, fakeUUID('Error'));
var OK_UUID = Individual(OK_CACHE_KEY, fakeUUID('Ok'));

function Ok(v) {
  this.v = v

  this[OK_UUID] = true;
}

function Err(err) {
  this.err = err

  this[ERROR_UUID] = true;
}

function createOk(v) {
  if (isObject(v) && OK_UUID in v) {
    return v.v
  } else if (isObject(v) && ERROR_UUID in v) {
    return undefined
  } else {
    return new Ok(v)
  }
}

function createError(err) {
  if (isObject(err) && ERROR_UUID in err) {
    return err.err
  } else if (isObject(err) && OK_UUID in err) {
    return undefined
  } else {
    return new Err(err)
  }
}

module.exports = {
  Ok: createOk,
  Err: createError
}

function fakeUUID(word) {
  return 'rust-result:' + word + ':' +
    Math.random().toString(32).slice(2) + ':' +
    Math.random().toString(32).slice(2) + ':' +
    Math.random().toString(32).slice(2) + ':' +
    Math.random().toString(32).slice(2) + ':';
}

function isObject(o) {
  return typeof o === 'object' && o !== null;
}
