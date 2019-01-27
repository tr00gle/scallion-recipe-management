const { PORT } = require('./server')

function onListen(port) {
  return () => console.log(`we are listening for scallions on port ${port}`)
}

function onError(appInstance) {
  return (err, req, res, next) => {
    const env = appInstance.get('env');
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: env === 'development' ? err : {}
    })
  }
}

module.exports = {
  onListen,
  onError,
}