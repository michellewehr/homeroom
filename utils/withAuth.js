const withAuth = (req, res, next) => {
  if (!req.session.id) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;