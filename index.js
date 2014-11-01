function Result(result) {
  this.result = result
}

function Ok(v) {
  this.v = v
}
Ok.prototype = new Result()

function Err(err) {
  this.err = err
}
Err.prototype = new Result()

function createOk(v) {
  if (v instanceof Result) {
    if (v instanceof Ok) return v.v
    return undefined
  }
  return new Ok(v)
}

function createError(err) {
  if (err instanceof Result) {
    if (err instanceof Err) return err.err
    return undefined
  }
  return new Err(err)
}

module.exports = {
  Ok: createOk,
  Err: createError
}
