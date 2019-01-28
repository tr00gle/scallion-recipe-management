/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

function onListen(port) {
  return () => console.log(`we are listening for scallions on port ${port}`);
}

function onError(appInstance) {
  return (err, req, res, next) => {
    const env = appInstance.get('env');
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: env === 'development' ? err : {},
    });
  };
}

function logError(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

function ifContainsError(err, req, res, next) {
  return err ? 'yay' : 'sad';
}

module.exports = {
  onListen,
  onError,
  logError,
  ifContainsError,
};
