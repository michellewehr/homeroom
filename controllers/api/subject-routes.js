const router = require('express').Router();
const { Subject } = require('../../models');
const withAuth = require('../../utils/withAuth');

// list all subjects
router.get('/', withAuth, (req, res) => {
    Subject.findAll({
        attributes: ['id', 'subject_name']
    })
        .then(dbSubjectData => {
            console.log(dbSubjectData)
            res.json(dbSubjectData)
        })
        .catch(err => {
            console.log(err);
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
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;