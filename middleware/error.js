exports.error = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 400 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
  });
};
