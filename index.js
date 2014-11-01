function Result(result) {
  if (!(this instanceof Result)) return new Result(result)
  this.result = result
}

function Ok(v) {
  if (!(this instanceof Ok)) return new Ok(v)
  this.v = v
}
Ok.prototype = new Result()

function Err(err) {
  if (!(this instanceof Err)) return new Err(err)
  this.err = err
}
Err.prototype = new Result()

function createOk(v) {
  if (v instanceof Result) {
    if (v instanceof Ok) return v.v
    return null
  }
  return new Ok(v)
}

function createError(err) {
  if (err instanceof Result) {
    if (err instanceof Err) return err.err
    return null
  }
  return new Err(err)
}

module.exports = {
  Ok: createOk,
  Err: createError
}
