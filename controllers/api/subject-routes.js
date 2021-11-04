const router = require('express').Router();
const { Subject } = require('../../models');
const withAuth = require('../../utils/withAuth');

// list all subjects
router.get('/', withAuth, (req, res) => {
    Subject.findAll({
    })
        .then(dbSubjectData => {
            res.json(dbSubjectData)
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

// get one subject by id
router.get('/:id', withAuth, (req, res) => {
    Subject.findOne({
        attributes: ['id', 'subject_name'],
        where: {
            id: req.params.id
        }
    })
        .then(dbSubjectData => {
            if (!dbSubjectData) {
                res.status(404).json({ msg: 'This subject does not exist.' });
                return;
            }
            json(dbSubjectData)
        })
        .catch(err => {
            res.status(500).json({
                msg: `Sorry, this one's on our end. Try again? Error: ${err}`
            });
        });
});

// add a subject
router.post('/', withAuth, (req, res) => {
    Subject.create({
        subject_name: req.body.subject_name,
        teacher_subj_id: req.session.teacher_id,
        subject_value: req.body.subject_value
    })
        .then(dbSubjectData => {
            console.log('subject added')
            res.status(201);
            res.json(dbSubjectData);
        })
        .catch(err => {
            res.status(500).json({
                msg: `Sorry, this one's on our end. Try again? Error: ${err}`
            });
        });
});

module.exports = router;