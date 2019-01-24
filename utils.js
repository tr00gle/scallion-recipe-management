const { PORT } = require('./server')

module.exports.onListen = function onListen() {
  console.log(`we are listening for scallions on port ${PORT}`)
}