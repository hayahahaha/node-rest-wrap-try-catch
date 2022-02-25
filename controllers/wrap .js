const wrap = fn => (req, res, next) => {
  try {
    fn(req, res, next)
  }
  catch (error) {
    res.json(error.error)
  }
}

module.exports = {
  wrap,
};
