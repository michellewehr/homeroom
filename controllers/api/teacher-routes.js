const router = require('express').Router();
const { Teacher } = require('../../models');


router.get('/', (req, res) => {
    Teacher.findAll({})
        .then(dbTeacherData => {
            console.log(dbTeacherData)
            res.json(dbTeacherData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// create teacher (user)
router.post('/', ({ body }, res) => {
    Teacher.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        password: body.password
    })
        .then(dbStudentData => res.json({ msg: `Successfully added ${body.first_name} ${body.last_name}!` }))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {
    // expects {email: 'lernantino@gmail.com', password: 'password1234'}
    Teacher.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbTeacherData => {
      if (!dbTeacherData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }
  
    //   const validPassword = dbTeacherData.checkPassword(req.body.password);
  
    //   if (!validPassword) {
    //     res.status(400).json({ message: 'Incorrect password!' });
    //     return;
    //   }
  
    //   req.session.save(() => {
    //     req.session.user_id = dbUserData.id;
    //     req.session.username = dbUserData.username;
    //     req.session.loggedIn = true;
    
        res.json({ user: dbTeacherData, message: 'You are now logged in!' });
      });
    });
//   });

module.exports = router;