const router = require('express').Router();


const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes')
const classRosterRoutes = require('./class-roster');
const lessonPlanRoutes = require('./lesson-plans');
const gradebookRoutes = require('./gradebook-routes');
const fetchGradeBookAPIroutes = require('./viewGradeBookApi');
const sucksRouts = require('./sucks');

router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/class-roster', classRosterRoutes);
router.use('/lesson-plans', lessonPlanRoutes);
router.use('/grades/api', fetchGradeBookAPIroutes);
router.use('/grades', gradebookRoutes);
router.use('/grades/api', apiRoutes);
router.use('/lesson-plans/api', apiRoutes);
router.use('/thisIsABitch/api/students', sucksRouts);


module.exports = router;

