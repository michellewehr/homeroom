const router = require('express').Router();

const gradeRoutes = require('./grade-routes');
const studentRoutes = require('./student-routes');
const subjectRoutes = require('./subject-routes');
const lessonPlanRoutes = require('./lessonPlan-routes');
const teacherRoutes = require('./teacher-routes');
const assignmentRoutes = require('./assignment-routes');

router.use('/students', studentRoutes)
router.use('/grades', gradeRoutes);
router.use('/subjects', subjectRoutes);
router.use('/lessonplans', lessonPlanRoutes);
router.use('/teachers', teacherRoutes);
router.use('/assignments', assignmentRoutes);


module.exports = router;