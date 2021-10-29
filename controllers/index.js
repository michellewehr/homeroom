const router = require('express').Router();


const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes')
const classRosterRoutes = require('./class-roster');
const lessonPlanRoutes = require('./lesson-plans');

router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/class-roster', classRosterRoutes);
router.use('/lesson-plans', lessonPlanRoutes);


module.exports = router;

