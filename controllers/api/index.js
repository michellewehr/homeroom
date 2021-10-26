const router = require('express').Router();

const gradeRoutes = require('./grade-routes');

router.use('/grades', gradeRoutes);

module.exports = router;