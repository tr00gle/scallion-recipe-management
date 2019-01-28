/* eslint-disable no-console */

function onListen(port) {
  return () => console.log(`we are listening for scallions on port ${port}`);
}

function onError(appInstance) {
  // eslint-disable-next-line no-unused-vars
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

module.exports = {
  onListen,
  onError,
  logError,
};
