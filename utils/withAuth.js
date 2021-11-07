const withAuth = (req, res, next) => {
  if (!req.session.teacher_id) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
