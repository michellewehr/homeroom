const router = require('express').Router();
const { Student, Grade, Assignment } = require('../../models');

// list all students by last name alphabetically
router.get('/', (req, res) => {
    Student.findAll({
        order: [['last_name', 'ASC']]
    })
        .then(dbStudentData => {
            console.log(dbStudentData)
            res.json(dbStudentData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// list all students with assignments and grades
router.get('/grades', (req, res) => {
    Student.findAll({
        order: [['last_name', 'ASC']],
        include: [{
            model: Grade,
            attributes: ['number_grade'],
            include: [
                {
                    model: Assignment,
                    attributes: ['assignment_name']
                }
            ]
        }],
    })
        .then(dbStudentData => {
            console.log(dbStudentData)
            res.json(dbStudentData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});



// get one student by id
router.get('/:id', (req, res) => {
    Student.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbStudentData => {
            // * we can take this data check and make it a utility function later for cleaner code
            if (!dbStudentData) {
                res.status(404).json({ msg: 'This student does not exist, at least on this side of the universe.' });
                return;
            }
            res.json(dbStudentData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// add a student
router.post('/', ({ body }, res) => {
    Student.create({
        first_name: body.first_name,
        last_name: body.last_name,
        guardian: body.guardian,
        guardian_email: body.guardian_email
    })
        .then(dbStudentData => res.json({ msg: `Successfully added ${body.first_name} ${body.last_name}!` }))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;