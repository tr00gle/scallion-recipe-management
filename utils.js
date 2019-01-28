
function onListen(port) {
  // eslint-disable-next-line no-console
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

module.exports = {
  onListen,
  onError,
};
