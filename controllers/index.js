const router = require('express').Router();


const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes')
const classRosterRoutes = require('./class-roster');

router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/class-roster', classRosterRoutes);


module.exports = router;

